import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anox.tech"),

  title: {
    default: "ANOX",
    template: "%s | ANOX",
  },

  description:
    "ANOX is a technology company focused on AI, software engineering, automation, and future systems.",

  applicationName: "ANOX",

  keywords: [
    "ANOX",
    "Artificial Intelligence",
    "Software",
    "Technology",
    "Automation",
    "Engineering",
    "Startup",
    "Future Systems",
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
    url: "https://anox.tech",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}