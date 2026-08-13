import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
  Vazirmatn,
} from "next/font/google";

import "./globals.css";

import { LangProvider } from "@/components/LangContext";
import AuthProvider from "@/components/AuthProvider";



const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});



const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});



const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
  weight: [
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  display: "swap",
});





export const metadata: Metadata = {

  metadataBase: new URL(
    "https://anox-three.vercel.app"
  ),


  title: {
    default: "ANOX",
    template: "%s | ANOX",
  },


  description:
    "ANOX builds next-generation software, artificial intelligence, cybersecurity, cloud infrastructure and digital products.",


  keywords: [
    "ANOX",
    "Artificial Intelligence",
    "Cyber Security",
    "Software Engineering",
    "Cloud Infrastructure",
    "Automation",
    "Technology",
  ],


  authors:[
    {
      name:"ANOX",
    },
  ],


  creator:"ANOX",

  publisher:"ANOX",


  robots:{
    index:true,
    follow:true,
  },


  openGraph:{

    title:"ANOX",

    description:
      "Engineering the future through software, AI and digital innovation.",

    url:
      "https://anox-three.vercel.app",

    siteName:"ANOX",

    locale:"en_US",

    type:"website",

  },


  icons:{
    icon:"/favicon.ico",
  },

};







export default function RootLayout({

  children,

}:{

  children:React.ReactNode;

}) {


return (

<html

  lang="en"

  suppressHydrationWarning

  className={`
    ${geistSans.variable}
    ${geistMono.variable}
    ${vazirmatn.variable}
  `}

>


<body>


<AuthProvider>


<LangProvider>


{children}


</LangProvider>


</AuthProvider>


</body>


</html>

);


}