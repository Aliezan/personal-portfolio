import React, { FC } from 'react';
import { Metadata } from 'next';
import About from './_sections/About';
import Hero from './_sections/Hero';
import Footer from './_sections/Footer';
import Works from './_sections/Works';

export const metadata: Metadata = {
  title: "Alieza's Portfolio",
};

const Home: FC = () => (
  <main>
    <Hero />
    <About />
    <Works />
    <Footer />
  </main>
);

export default Home;
