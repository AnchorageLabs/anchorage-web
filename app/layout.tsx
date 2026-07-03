import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { BackToTopButton } from "@/components/back-to-top-button";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Anchorage Labs | The state layer of AI software engineering",
  description:
    "Anchorage Labs builds Cartographer, a deterministic map of every repository, and Anchorage, a protocol-driven runtime that sequences coding agents from issue to merged, deployed change.",
  icons: { icon: "/anchoragelabs-icon-gradient-512.png" },
  metadataBase: new URL("https://github.com/AnchorageLabs"),
  openGraph: {
    title: "Anchorage Labs",
    description: "The state layer of AI software engineering — Cartographer and Anchorage.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${inter.variable} ${jetBrains.variable} bg-[var(--page-bg)] font-sans text-ink antialiased`}>
        {children}
        <BackToTopButton />
      </body>
    </html>
  );
}
