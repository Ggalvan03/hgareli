import type { Metadata } from "next";
import "./globals.css";
import { spaceGrotesk } from "@/app/lib/fonts";

import Header from "@/app/ui/header";
import { CartProvider } from "@/app/context/cart-context";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Hgareli",
  description: "Generated by create next app",
};


export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  // userScalable: 'no', // disable pinch-to-zoom (optional)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} flex flex-col antialiased md:px-[10vh] px-[2vh] h-screen`}
      >
        <CartProvider>
          <Header/>
          {children}
        </CartProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
