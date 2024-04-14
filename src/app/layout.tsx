import {Sora} from "next/font/google";
import "./globals.css";
import LayoutTransition from "@/components/LayoutTransition";
import {METADATA} from "@/helper/metadata";
import {Metadata} from "next";
import React from "react";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});
export const metadata: Metadata = METADATA;
export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
    <body className={`page bg-site text-white bg-cover bg-no-repeat  ${sora.variable} font-sora relative`}>
    <LayoutTransition>{children}</LayoutTransition>
    </body>
    </html>
  );
};