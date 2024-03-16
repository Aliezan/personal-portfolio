import React, { FC } from "react";
import HeadMetaData from "@/components/HeadMetaData";
import About from "./_sections/About";
import Hero from "./_sections/Hero";
import Footer from "./_sections/Footer";
import Works from "./_sections/Works";
import ContactMe from "./_sections/ContactMe";

const Home: FC = () => (
  <>
    <HeadMetaData
      title="Muhammad Alieza Nuriman - Portfolio"
      metaDescription="Personal Portfolio of Muhammad Alieza Nuriman, Web Developer and Undergraduate Student at Politeknik Negeri Jakarta. Currently learning JavaScript modern web frameworks"
    />
    <Hero />
    <About />
    <Works />
    <ContactMe />
    <Footer />
  </>
);

export default Home;
