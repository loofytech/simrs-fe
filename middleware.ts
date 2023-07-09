import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const rtsPath = request.nextUrl.pathname.split("/")[1];
  if (rtsPath === "dashboard") {
    const cookie = request.cookies.get("_aA_AdC");
    if (!cookie) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
    if (cookie && cookie.value === "false") {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  }
  if (rtsPath === "auth") {
    const cookie = request.cookies.get("_aA_AdC");
    if (cookie) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/dashboard/:path*'
  ],
}