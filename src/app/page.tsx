import React, { FC } from "react";
import { Metadata } from "next";
import About from "./_sections/About";
import Hero from "./_sections/Hero";
import Footer from "./_sections/Footer";
import Works from "./_sections/Works";
import ContactMe from "./_sections/ContactMe";

export const metadata: Metadata = {
  openGraph: {
    title: "Muhammad Alieza Nuriman - Portfolio",
    description:
      "Personal Portfolio of Muhammad Alieza Nuriman, Web Developer and Undergraduate Student at Politeknik Negeri Jakarta. Currently learning JavaScript modern web frameworks",
    siteName: "Muhammad Alieza Nuriman - Portfolio",
    locale: "en_US",
    type: "website",
    images: "https://aliezan.is-a.dev/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Alieza Nuriman - Portfolio",
    description:
      "Personal Portfolio of Muhammad Alieza Nuriman, Web Developer and Undergraduate Student at Politeknik Negeri Jakarta. Currently learning JavaScript modern web frameworks",
    images: ["https://aliezan.is-a.dev/opengraph-image.png"],
  },
};

const Home: FC = () => (
  <>
    <Hero />
    <About />
    <Works />
    <ContactMe />
    <Footer />
  </>
);

export default Home;
