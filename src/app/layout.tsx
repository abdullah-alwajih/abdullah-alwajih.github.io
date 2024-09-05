import type {Metadata} from "next";
import "./globals.css";
import Script from "next/script";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";


export const metadata: Metadata = {
  title: "Wajih | وجيه",
  description: "Full Stack Developer",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (<html lang="en">

  <body>
  <div id="particles-js">
    <canvas className="particles-js-canvas-el" width="3320" height="1808"
            style={{width: "100%", height: "100%"}}></canvas>
  </div>

  <main>
    <Sidebar/>
    <div className="main-content">
      <Navbar/>
      {children}
    </div>
  </main>

  <Script src="/assets/js/particles.js" strategy="lazyOnload"></Script>
  </body>
  </html>);
}
