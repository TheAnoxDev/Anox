import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";

import "./globals.css";

import { LangProvider } from "@/components/LangContext";
import AuthProvider from "@/components/AuthProvider";
import AppWrapper from "@/components/AppWrapper";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: true,
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anox-three.vercel.app"),

  title: {
    default: "ANOX",
    template: "%s | ANOX",
  },

  description:
    "ANOX builds next-generation software, artificial intelligence, cybersecurity, cloud infrastructure and digital products.",

  keywords: [
    "ANOX",
    "Artificial Intelligence",
    "AI",
    "Cybersecurity",
    "Software Engineering",
    "Cloud Infrastructure",
    "Automation",
    "Technology",
    "Digital Innovation",
  ],

  authors: [
    {
      name: "ANOX",
    },
  ],

  creator: "ANOX",
  publisher: "ANOX",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "ANOX",
    description:
      "Engineering the future through software, AI and digital innovation.",
    url: "https://anox-three.vercel.app",
    siteName: "ANOX",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ANOX",
    description:
      "Engineering the future through software, AI and digital innovation.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
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
            <AppWrapper>
              {children}
            </AppWrapper>
          </LangProvider>
        </AuthProvider>
      </body>
    </html>
  );
}