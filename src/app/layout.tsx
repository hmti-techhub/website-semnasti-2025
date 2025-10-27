import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./fonts.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SEMNASTI 2025 - Smart Living With AI",
  description: "Seminar Nasional Teknik Informatika 2025 by HMTI UDINUS - Smart Living With AI, Real Tech For Real Life",
  keywords: "Semnasti, Seminar Nasional, Teknik Informatika, UDINUS, AI, Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
