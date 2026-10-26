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
  title: "Sohham Choudhary — Building useful intelligence",
  description:
    "The portfolio of Sohham Choudhary: a Data Science & AI student building useful products with data, software and thoughtful systems.",
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
    title: "Sohham Choudhary — Building useful intelligence",
    description:
      "A portfolio of experiments, products and analytical tools built with data, AI and software.",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
