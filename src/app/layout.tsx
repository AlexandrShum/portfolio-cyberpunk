import type { Metadata } from "next";
import Head from "next/head";

import "./globals.css";


export const metadata: Metadata = {
  title: "Portfolio-cyberpunk",
  description: "Portfolio-cyberpunk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" sizes="auto"/>
      </Head>
      <body className=" font-chakra max-w-[1920px] m-auto">{children}</body>
    </html>
  );
}
