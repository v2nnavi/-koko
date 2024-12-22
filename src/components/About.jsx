import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      title: "Community Driven",
      description: "Built by the community, for the community. Every holder has a voice in $KOKO's future."
    },
    {
      title: "Just a memecoin",
      description: "$KOKO is a meme token that has no real value (yet) we have plans but we'll see where this branch leads us"
    },
    {
      title: "Cardano Native",
      description: "Built on Cardano's one and only snek.fun, $KOKO is a Cardano native token."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary mb-4">
            About $KOKO
          </h2>
          <div className="mb-12">
            <img 
              src="assets/koko-about.png" 
              alt="KOKO Character" 
              className="mx-auto rounded-lg shadow-xl max-w-md"
            />
          </div>
          <p className="text-xl text-secondary-light">
            The sleepiest, most laid-back memecoin in the Cardano ecosystem
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-dark/10 p-8 rounded-xl hover:bg-primary-dark/20 transition-colors"
            >
              <h3 className="text-xl font-bold text-primary-light mb-4">{feature.title}</h3>
              <p className="text-secondary-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;