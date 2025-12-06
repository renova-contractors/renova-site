import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Block direct access to /not-found - it should only be used internally by Next.js
  // Return 404 status if someone tries to access it directly
  if (pathname === '/not-found') {
    return new NextResponse(null, { status: 404 })
  }

  // Redirect old blog category URLs to main blog page (301 permanent redirect for SEO)
  // /blog/category/* -> /blog
  // Old category URLs like /blog/kitchen, /blog/basement -> /blog
  const blogCategories = ['bathroom', 'kitchen', 'basement', 'attic', 'deck', 'tile', 'cabinets', 'architecture', 'countertops'];
  
  if (pathname.startsWith('/blog/category/')) {
    const url = req.nextUrl.clone()
    url.pathname = '/blog'
    return NextResponse.redirect(url, 301)
  }

  // Redirect old category URLs to main blog page
  const blogCategoryMatch = pathname.match(/^\/blog\/([^\/]+)$/);
  if (blogCategoryMatch) {
    const category = blogCategoryMatch[1].toLowerCase();
    if (blogCategories.includes(category)) {
      const url = req.nextUrl.clone();
      url.pathname = '/blog';
      return NextResponse.redirect(url, 301);
    }
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
