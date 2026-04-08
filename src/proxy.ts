import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_PATHS = ['/auth/sign-in', '/auth/sign-up', '/api/health']
const SESSION_COOKIE = 'appwrite-session'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isPublic = PUBLIC_PATHS.some((p) => pathname.startsWith(p))
  const session = request.cookies.get(SESSION_COOKIE)?.value

  if (!isPublic && !session) {
    const signIn = new URL('/auth/sign-in', request.url)
    signIn.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(signIn)
  }

  if (session && pathname.startsWith('/auth/')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
