import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buildpcbs.com"),
  title: "buildPCBs.com",
  description: "From Concept to PCB in Minutes, Not Days",
  openGraph: {
    images: [
      {
        url: "/og-image.png?v=2",
        width: 1200,
        height: 630,
        alt: "buildPCBs.com - From Concept to PCB in Minutes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png?v=3"],
  },
  alternates: {
    canonical: "https://buildpcbs.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "google-site-verification": "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmMono.variable} ${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="pt-32 md:pt-0">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
