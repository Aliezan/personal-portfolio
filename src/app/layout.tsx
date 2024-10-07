import { FC } from "react";
import { GeistSans } from "geist/font/sans";
import ThemeProvider from "@/utils/theme-provider";
import UIProvider from "@/utils/UIProvider";
import "@/styles/globals.css";
import Navibar from "@/components/navbar/Navibar";
import { ApolloWrapper } from "@/lib/apollo-provider";
import Footer from "@/app/_sections/Footer";
import { Metadata } from "next";
import Script from "next/script";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL("https://aliezan.me"),
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <Script
      defer
      src="https://analytics.aliezan.me/script.js"
      data-website-id="b15f8f63-2d78-4b77-931d-4943520bc63e"
    />
    <body className={GeistSans.className}>
      <ApolloWrapper>
        <UIProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navibar />
            {children}
            <Footer />
          </ThemeProvider>
        </UIProvider>
      </ApolloWrapper>
    </body>
  </html>
);

export default RootLayout;
