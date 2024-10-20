import React, { FC } from "react";
import { Metadata } from "next";
import About from "./_sections/About";
import Hero from "./_sections/Hero";
import Works from "./_sections/Works";
import ContactMe from "./_sections/ContactMe";

export const metadata: Metadata = {
  title: "Home",
};

const Home: FC = () => (
  <>
    <Hero />
    <About />
    <Works />
    <ContactMe />
  </>
);

export default Home;
