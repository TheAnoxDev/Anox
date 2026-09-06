import type {
  Metadata,
  Viewport
} from "next";


import {
  Geist,
  Geist_Mono
} from "next/font/google";


import localFont from "next/font/local";


import "./globals.css";


import {
  LangProvider
} from "@/components/LangContext";


import AuthProvider from "@/components/AuthProvider";






/*
=====================================================
 FONTS
=====================================================
*/


const geistSans = Geist({

  subsets:[
    "latin"
  ],

  variable:
  "--font-geist",

  display:
  "swap",

  preload:true,

});




const geistMono = Geist_Mono({

  subsets:[
    "latin"
  ],

  variable:
  "--font-geist-mono",

  display:
  "swap",

  preload:true,

});







const vazirmatn = localFont({

  src:[


    {
      path:
      "../fonts/vazirmatn/Vazirmatn-Regular.woff2",

      weight:
      "400",

      style:
      "normal",
    },


    {
      path:
      "../fonts/vazirmatn/Vazirmatn-Medium.woff2",

      weight:
      "500",

      style:
      "normal",
    },


    {
      path:
      "../fonts/vazirmatn/Vazirmatn-Bold.woff2",

      weight:
      "700",

      style:
      "normal",
    },


    {
      path:
      "../fonts/vazirmatn/Vazirmatn-Black.woff2",

      weight:
      "900",

      style:
      "normal",
    },


  ],


  variable:
  "--font-vazir",


  display:
  "swap",


  preload:true,

});









/*
=====================================================
 METADATA
=====================================================
*/


export const metadata:Metadata = {


  metadataBase:
  new URL(
    "https://anox-three.vercel.app"
  ),



  title:{


    default:
    "ANOX | AI, Cybersecurity & Cloud Platform",


    template:
    "%s | ANOX",

  },





  description:


  "ANOX is a next-generation technology platform building artificial intelligence systems, cybersecurity solutions, cloud infrastructure and developer tools.",






  keywords:[


    "ANOX",

    "Artificial Intelligence",

    "AI Platform",

    "Cybersecurity",

    "Cloud Infrastructure",

    "Software Engineering",

    "Automation",

    "Developer Tools",

    "Machine Learning",


  ],





  authors:[

    {
      name:
      "ANOX"
    }

  ],




  creator:
  "ANOX",




  publisher:
  "ANOX",





  applicationName:
  "ANOX",






  openGraph:{


    type:
    "website",



    locale:
    "en_US",



    url:
    "https://anox-three.vercel.app",



    siteName:
    "ANOX",



    title:
    "ANOX | Engineering Intelligent Future",



    description:

    "Building AI, cybersecurity and cloud technology for the next generation.",



    images:[

      {
        url:
        "/og-image.png",

        width:
        1200,

        height:
        630,

        alt:
        "ANOX Platform",

      }

    ],


  },







  twitter:{


    card:
    "summary_large_image",


    title:
    "ANOX | AI Technology Platform",


    description:

    "Artificial intelligence, cybersecurity and cloud infrastructure.",



    images:[
      "/og-image.png"
    ],


  },








  robots:{


    index:true,


    follow:true,


  },







  icons:{


    icon:
    "/favicon.ico",


    apple:
    "/apple-touch-icon.png",


  },





};









export const viewport:Viewport = {


  themeColor:
  "#030712",


  colorScheme:
  "dark",


};









/*
=====================================================
 ROOT LAYOUT
=====================================================
*/


export default function RootLayout({

children,

}:{

children:
React.ReactNode;

}){



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