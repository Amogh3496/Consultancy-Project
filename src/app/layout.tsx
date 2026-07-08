import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Strategic AI-Driven Fraud Detection & Financial Crime Prevention | BNY",
  description:
    "Executive proposal for implementing AI-driven fraud detection and financial crime prevention at BNY. A consulting-style strategic roadmap covering AI use cases, governance, implementation, and ROI analysis.",
  keywords: [
    "BNY",
    "fraud detection",
    "AI",
    "financial crime prevention",
    "consulting",
    "strategy",
  ],
  authors: [{ name: "Student Research Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-surface text-charcoal">
        {children}
      </body>
    </html>
  );
}
