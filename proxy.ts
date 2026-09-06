import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const locales = [
  "fa",
  "en",
  "ar",
  "ru",
  "es",
  "zh",
];


const defaultLocale = "en";



function hasLocale(pathname:string){

  return locales.some(
    (locale)=>
      pathname === `/${locale}` ||
      pathname.startsWith(`/${locale}/`)
  );

}





export function proxy(
  request:NextRequest
){


  const pathname =
    request.nextUrl.pathname;



  /*
    Ignore API routes
  */

  if(
    pathname.startsWith("/api")
  ){

    return NextResponse.next();

  }





  /*
    Ignore Next internal files
  */

  if(

    pathname.startsWith("/_next") ||

    pathname.startsWith("/favicon") ||

    pathname.includes(".")

  ){

    return NextResponse.next();

  }





  /*
    Check locale
  */

  if(
    hasLocale(pathname)
  ){

    return NextResponse.next();

  }






  /*
    Redirect to default language
  */


  const url =
    request.nextUrl.clone();



  url.pathname =
    `/${defaultLocale}${pathname}`;





  return NextResponse.redirect(url);



}





export const config = {


  matcher:[

    "/((?!_next/static|_next/image|favicon.ico).*)",

  ],


};