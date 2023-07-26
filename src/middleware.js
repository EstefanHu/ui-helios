import { NextResponse } from "next/server";

const LANDING = ['/', '/register', '/login', '/recover_account', '/complete_profile', '/sitemap'];
const PROTECTED = ['/dashboard', '/journey', '/profile', 'write'];

const middleware = (req) => {
  const authCookie = req.cookies.get('heliosAuth');
  const { pathname } = req.nextUrl;

  if (Object.values(PROTECTED).includes(pathname)) {
    if (!authCookie) {
      const url = req.nextUrl.clone();
      url.pathname = '/';

      return NextResponse.redirect(url);
    }
  } else if (LANDING.includes(pathname)) {
    if (authCookie) {
      const url = req.nextUrl.clone();
      url.pathname = '/dashboard';

      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
};

export default middleware;