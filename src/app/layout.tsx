import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sohham Choudhary — Data Science × AI × Software",
  description:
    "Personal portfolio of Sohham Choudhary, a Data Science & AI student at IIM Sambalpur building software, data and AI-powered products.",
  keywords: [
    "Sohham Choudhary",
    "Data Science",
    "Artificial Intelligence",
    "IIM Sambalpur",
    "Software Engineering",
    "SalesMindAI",
    "Machine Learning",
    "Python",
    "React",
    "FastAPI",
  ],
  authors: [{ name: "Sohham Choudhary" }],
  openGraph: {
    title: "Sohham Choudhary — Data Science × AI × Software",
    description:
      "Personal portfolio of Sohham Choudhary, a Data Science & AI student at IIM Sambalpur building software, data and AI-powered products.",
    type: "website",
    locale: "en_US",
    siteName: "Sohham Choudhary Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-[#08090B] text-[#F3F4F6] antialiased font-sans selection:bg-accent/35 selection:text-white">
        {children}
      </body>
    </html>
  );
}
