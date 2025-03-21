import React from "react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans"})

export const metadata: Metadata = {
  title: "Mantradocs",
  description: "A realime live document collaboration app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
