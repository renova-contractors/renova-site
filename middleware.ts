import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Ignore system & asset files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.') ||
    pathname === '/not-found' // ВАЖНО
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
