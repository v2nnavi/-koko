import React from 'react';
import { motion } from 'framer-motion';

const Tokenomics = () => {
  const tokenomics = [
    { label: 'Total Supply', value: '1,000,000,000', subtitle: '$KOKO' },
    { label: 'Development', value: '2%', subtitle: 'Growth & Marketing' },
    { label: 'Burn', value: '5%', subtitle: 'For the hype and glory' },
  ];

  return (
    <section id="tokenomics" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary mb-4">
            Tokenomics
          </h2>
          <p className="text-xl text-secondary-light mb-8">
            Fair distribution, transparent allocation
          </p>
          <div className="mb-12">
            <img 
              src="assets/koko-tokenomics.png" 
              alt="KOKO Tokenomics" 
              className="mx-auto rounded-lg shadow-xl max-w-md"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tokenomics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-dark/10 p-8 rounded-xl text-center hover:bg-primary-dark/20 transition-colors"
            >
              <h3 className="text-3xl font-bold text-primary-light mb-2">{item.value}</h3>
              <p className="text-secondary-light mb-2">{item.subtitle}</p>
              <p className="text-gray-300 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;