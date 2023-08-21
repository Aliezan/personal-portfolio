'use client';

import { FC, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface HeroLayoutProps {
  children: React.ReactNode;
}

const HeroLayout: FC<HeroLayoutProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <section
      ref={ref}
      className='h-[600px] border border-white'
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </section>
  );
};
export default HeroLayout;
