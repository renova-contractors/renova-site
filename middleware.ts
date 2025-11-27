import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Block direct access to /not-found - it should only be used internally by Next.js
  // Return 404 status if someone tries to access it directly
  if (pathname === '/not-found') {
    return new NextResponse(null, { status: 404 })
  }

  // Ignore system & asset files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const lower = pathname.toLowerCase()

  if (pathname !== lower) {
    const url = req.nextUrl.clone()
    url.pathname = lower
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*']
}
