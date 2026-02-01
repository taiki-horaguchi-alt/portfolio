import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Taiki Horaguchi | Portfolio",
  description:
    "Bridging Agriculture & Technology with Business Logic. 現場の課題を、自らの手で実装し解決する。",
  keywords: [
    "Portfolio",
    "Frontend Engineer",
    "Agriculture",
    "Technology",
    "Business",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Taiki Horaguchi" }],
  openGraph: {
    title: "Taiki Horaguchi | Portfolio",
    description:
      "Bridging Agriculture & Technology with Business Logic. 現場の課題を、自らの手で実装し解決する。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
