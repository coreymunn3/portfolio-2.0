import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hi, I'm Corey | Full Stack Developer",
    template: "%s | Corey Munn",
  },
  description:
    "Hi, I'm Corey Munn, a Full Stack Developer specializing in React, Next.js, and modern web technologies. Let's build something amazing together.",
  keywords: [
    "Corey Munn",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "JavaScript Developer",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Corey Munn" }],
  creator: "Corey Munn",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coreymunn.com",
    title: "Hi, I'm Corey | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies. Let's build something amazing together.",
    siteName: "Corey Munn",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hi, I'm Corey | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies. Let's build something amazing together.",
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
