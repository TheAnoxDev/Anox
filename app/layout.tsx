import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anox-2wmo.vercel.app"),

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
    "Cyber Security",
    "Software Engineering",
    "Technology",
    "Cloud",
    "Automation",
    "Innovation",
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
    url: "https://anox-2wmo.vercel.app",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-[#06080d] text-white antialiased">
        {children}
      </body>
    </html>
  );
}