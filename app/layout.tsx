import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { BackToTopButton } from "@/components/back-to-top-button";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Anchorage Labs",
  description:
    "Anchorage Labs builds Cartographer, a deterministic map of every repository, and Anchorage, a protocol-driven runtime that sequences coding agents from issue to merged, deployed change.",
  icons: { icon: "/anchoragelabs-icon-gradient-512.png" },
  metadataBase: new URL("https://github.com/AnchorageLabs"),
  openGraph: {
    title: "Anchorage Labs",
    description:
      "The state layer of AI software engineering — Cartographer and Anchorage.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('anchorage-theme');document.documentElement.dataset.theme=(t==='light'||t==='dark')?t:'dark';var l=localStorage.getItem('anchorage-lang');if(l==='es'||l==='en')document.documentElement.lang=l;}catch(e){document.documentElement.dataset.theme='dark';}})();",
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetBrains.variable} bg-[var(--page-bg)] font-sans text-ink antialiased`}
      >
        <LanguageProvider>
          {children}
          <BackToTopButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
