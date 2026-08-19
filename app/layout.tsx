import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import "./theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.demmphotobooths.com"),
  title: "Atlanta Photo Booth Rental | DEMM Photo Booths Atlanta",
  description:
    "Create an unforgettable guest experience with DEMM Photo Booths Atlanta. Professional photo booth service for weddings, parties, corporate events, schools, and celebrations across Metro Atlanta.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.demmphotobooths.com",
    siteName: "DEMM Photo Booths Atlanta",
    locale: "en_US",
    title: "Atlanta Photo Booth Rental | DEMM Photo Booths Atlanta",
    description:
      "Luxury mirror photo booth experiences for weddings, corporate events, quinceañeras, and celebrations across Metro Atlanta. 135 five-star Google reviews.",
    images: [
      {
        url: "/images/hero-energy.png",
        width: 1200,
        height: 630,
        alt: "DEMM Photo Booths — luxury photo booth experience in Atlanta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlanta Photo Booth Rental | DEMM Photo Booths Atlanta",
    description:
      "Luxury mirror photo booth experiences for weddings, corporate events, quinceañeras, and celebrations across Metro Atlanta. 135 five-star Google reviews.",
    images: ["/images/hero-energy.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="AW-17515840387" />
    </html>
  );
}
