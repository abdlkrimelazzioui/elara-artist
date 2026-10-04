import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import AudioAtmosphere from "../components/AudioAtmosphere";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAIROS VOSS — Contemporary Vocalist, Composer & Sound Architect",
  description:
    "Official portfolio and archive of Kairos Voss. Contemporary vocal soloist, orchestral composer, and spatial acoustic artist based in Zurich and Berlin.",
  keywords: [
    "Kairos Voss",
    "contemporary vocalist",
    "extended vocal techniques",
    "multiphonics",
    "orchestral composer",
    "spatial sound installation",
    "avant-garde vocal music",
    "Tonhalle Zurich",
    "ECM Records"
  ],
  openGraph: {
    title: "KAIROS VOSS — Vocal Architecture & Spatial Sound",
    description:
      "Sculpting the human vocal tract as a living symphonic instrument. Orchestral compositions, solo vocal multiphonics, and spatial installations.",
    url: "https://kairosvoss.com",
    siteName: "Kairos Voss Official Archive",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Kairos Voss Portrait"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "KAIROS VOSS — Contemporary Vocalist & Composer",
    description: "Official portfolio, tour calendar, discography, and commissions archive."
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#F4F2ED]">
        <CustomCursor />
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <AudioAtmosphere />
        <Footer />
      </body>
    </html>
  );
}
