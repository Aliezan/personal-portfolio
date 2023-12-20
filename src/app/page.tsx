import React, { FC } from 'react';
import { Metadata } from 'next';
import About from './_sections/About';
import Hero from './_sections/Hero';
import Footer from './_sections/Footer';
import Works from './_sections/Works';
import ContactMe from './_sections/ContactMe';

export const metadata: Metadata = {
  title: 'Home',
};

const Home: FC = () => (
  <main>
    <Hero />
    <About />
    <Works />
    <ContactMe />
    <Footer />
  </main>
);

export default Home;
