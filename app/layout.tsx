import "./globals.css";

import type { Metadata } from "next";
import { Inter, Space_Grotesk, Work_Sans } from "next/font/google";
import { AnimatePresence } from "motion/react";

import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const PRODUCTION_URL = process.env.NEXT_PUBLIC_PRODUCTION_URL;

const interSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"]
});

const spaceGrostek = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"]
});

const workSans = Work_Sans({
  variable: "--font-label",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "The Grease Pro | Mobile Oil Change & Home Automotive Services",
  description: "Expert home service automotive care. We bring the shop to you for oil changes, parts replacement, and vehicle inspections. Professional, clean, and convenient.",
  keywords: ["mobile oil change", "home car service", "automotive repair at home", "The Grease Pro", "on-site car maintenance"],

  // Open Graph Configuration
  openGraph: {
    title: "The Grease Pro | Professional Home Automotive Service",
    description: "Skip the shop. We bring expert oil changes and car repairs directly to your home or office.",
    url: PRODUCTION_URL, // Replace with your actual domain
    siteName: "The Grease Pro",
    images: [
      {
        url: `${PRODUCTION_URL}/og-image.jpg`, // Path to your preview image
        width: 1200,
        height: 630,
        alt: "The Grease Pro mobile mechanic performing an oil change",
      },
    ],
    locale: "en_US", // Set to your target region (e.g., en_US or en_PH)
    type: "website",
  },

  // Twitter Specific (Optional but recommended)
  twitter: {
    card: "summary_large_image",
    title: "The Grease Pro | Mobile Auto Care",
    description: "Convenient on-site oil changes and parts replacement.",
    images: [`${PRODUCTION_URL}/og-image.jpg`],
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
      className={`${interSans.variable} ${spaceGrostek.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <AnimatePresence>
          {children}
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
