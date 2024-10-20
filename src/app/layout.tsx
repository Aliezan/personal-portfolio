import { FC } from "react";
import { GeistSans } from "geist/font/sans";
import ThemeProvider from "@/utils/theme-provider";
import UIProvider from "@/utils/UIProvider";
import "@/styles/globals.css";
import Navibar from "@/components/navbar/Navibar";
import Footer from "@/app/_sections/Footer";
import { Metadata } from "next";
import Script from "next/script";
import { env } from "@/env/server";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: "%s | aliezn",
    default: "aliezn",
  },
  description:
    "Explore Alieza's web development portfolio featuring innovative projects and insightful blog posts about coding and the developer life. Discover a passionate web developer's journey and expertise.",
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <Script
      defer
      src="https://analytics.aliezan.me/script.js"
      data-website-id="b15f8f63-2d78-4b77-931d-4943520bc63e"
    />
    <body className={GeistSans.className}>
      <UIProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navibar />
          {children}
          <Footer />
        </ThemeProvider>
      </UIProvider>
    </body>
  </html>
);

export default RootLayout;
