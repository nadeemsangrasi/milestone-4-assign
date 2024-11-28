import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";

import SessionWrapper from "@/context/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EliteEcom",
  description: "elite ecommerce site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-primary-black text-white relative ${inter.className}`}
      >
        <SessionWrapper>
          <Header />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
