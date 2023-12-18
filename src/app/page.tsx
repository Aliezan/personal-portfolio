import React, { FC } from 'react';
import About from './_sections/About';
import Hero from './_sections/Hero';
import Footer from './_sections/Footer';
import Works from './_sections/Works';

const Home: FC = () => (
  <main>
    <Hero />
    <About />
    <Works />
    <Footer />
  </main>
);

export default Home;
