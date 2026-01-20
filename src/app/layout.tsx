import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { BackgroundEffect } from "@/components/BackgroundEffect";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.ogDescription,
    type: "website",
    locale: siteConfig.meta.locale,
    siteName: siteConfig.meta.siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.ogDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="dark">
      <body
        className={`${inter.variable} ${merriweather.variable} font-sans antialiased bg-stone-950 text-stone-200 selection:bg-rose-500/30`}
      >
        <BackgroundEffect />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
