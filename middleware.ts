import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["fa", "en"];

const defaultLocale = "en";


export function middleware(request: NextRequest) {

  const pathname = request.nextUrl.pathname;


  // اجازه API ها
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }


  // اجازه فایل های استاتیک
  if (
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }


  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}`)
  );


  if (pathnameHasLocale) {
    return NextResponse.next();
  }


  return NextResponse.redirect(
    new URL(
      `/${defaultLocale}${pathname}`,
      request.url
    )
  );

}


export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};