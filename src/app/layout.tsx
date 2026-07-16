import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: 'Portfolio-cyberpunk',
  description: 'Portfolio-cyberpunk',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" font-chakra max-w-[1920px] max-h-[1080px] m-auto">{children}</body>
    </html>
  );
}
