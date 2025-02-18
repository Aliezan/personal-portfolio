import { FC } from "react";
import { GeistSans } from "geist/font/sans";
import ThemeProvider from "@/lib/theme-provider";
import UIProvider from "@/lib/UIProvider";
import "@/styles/globals.css";
import Navibar from "@/components/navbar/Navibar";
import Footer from "@/app/_sections/Footer";
import { Metadata } from "next";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
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
