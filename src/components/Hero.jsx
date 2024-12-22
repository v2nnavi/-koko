import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getRandomFunFact } from '../utils/funFacts';

const Hero = () => {
  const [funFact, setFunFact] = useState("");

  useEffect(() => {
    setFunFact(getRandomFunFact());
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-dark to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary">
            $KOKO
          </h1>
          <p className="text-2xl md:text-3xl text-secondary-light">
            {funFact}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Buy Now
            </a>
            <a
              href="#"
              className="px-8 py-3 border-2 border-primary text-primary rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;