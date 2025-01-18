import { motion } from 'framer-motion';
import { fadeIn } from '../animations/motions';

const Hero = () => {
  return (
    <section className="h-screen relative flex items-center">
      <div className="container mx-auto px-4">
        <motion.h1
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          animate="show"
          className="text-6xl font-bold mb-4"
        >
          Bienvenue au Coal Club
        </motion.h1>
        <motion.p
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          className="text-xl mb-8"
        >
          Experience the finest dining
        </motion.p>
        <motion.button
          variants={fadeIn('up', 0.7)}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gold text-black rounded-lg"
        >
          Reserve Now
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
