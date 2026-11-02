import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SalesMindAI Case Study — Sohham Choudhary",
  description:
    "A case study of SalesMindAI, a full-stack CRM with customer workflows, analytics and multi-provider AI integration.",
  openGraph: {
    title: "SalesMindAI Case Study — Sohham Choudhary",
    description:
      "A full-stack CRM case study covering customer workflows, analytics and multi-provider AI integration.",
    type: "article",
  },
};

export default function SalesMindAILayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
