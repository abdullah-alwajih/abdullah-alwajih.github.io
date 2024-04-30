import "./globals.css";
import LayoutTransition from "@/components/LayoutTransition";
import {METADATA} from "@/helpers/metadata";
import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = METADATA;
export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (<html lang="en">
  <body>
  <LayoutTransition>{children}</LayoutTransition>
  </body>
  </html>);
};