import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Anchorage Labs | Developer tools and software infrastructure",
  description:
    "Anchorage Labs builds developer-first tooling, open source automation, protocols, CLIs, and infrastructure for modern software teams.",
  metadataBase: new URL("https://github.com/AnchorageLabs"),
  openGraph: {
    title: "Anchorage Labs",
    description: "Developer-first tools, infrastructure, automation, and open source systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetBrains.variable} bg-[var(--page-bg)] font-sans text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
