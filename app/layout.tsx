import type { Metadata } from "next";
import "./globals.css";
import { spaceGrotesk } from "@/app/lib/fonts";
import Head from "next/head";
import Header from "@/app/ui/header";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Hgareli",
  description: "Generated by create next app",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} flex flex-col antialiased md:px-[10vh] px-[2vh] h-screen`}
      >
        <Header/>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
