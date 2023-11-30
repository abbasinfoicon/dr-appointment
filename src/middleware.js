import { NextResponse } from 'next/server'

export function middleware(req) {
    const path = req.nextUrl.pathname;
    const pbPath = path === "/login" || path === "/register" || path === "/reset-password" || path === "/forgot-password";

    // Use the Cookies header from the request headers
    const cookiesHeader = req.headers.get('cookie') || '';
    const tokenMatch = cookiesHeader.match(/access_token=([^;]*)/);
    const token = tokenMatch ? tokenMatch[1] : '';

    if (pbPath && token) {
        return NextResponse.redirect(new URL(path, req.nextUrl));
    }
    if (!pbPath && !token) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/my-account', '/my-account/:path*', '/dashboard', '/dashboard/:path*'],
}