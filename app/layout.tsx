import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClickAutomate - Digital Marketing & AI Automation Services",
  description: "Transform your business with cutting-edge digital marketing, SEO optimization, and AI-powered automation solutions. Drive growth and efficiency with ClickAutomate.",
  keywords: "digital marketing, SEO, AI automation, marketing automation, social media marketing, content marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
