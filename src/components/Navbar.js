import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Menu', path: '/menu' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full h-20 bg-black/90 backdrop-blur-sm z-50"
    >
      <div className="max-w-[1640px] mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={Logo}
              alt="Logo"
              className="h-12 md:h-16"
            />
          </NavLink>
        </div>

        <div className="hidden md:flex items-center">
          <ul className="flex gap-8">
            {menuItems.map(({ title, path }, index) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="py-2"
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-gold font-bold border-b-2 border-gold pb-1 transition-all duration-300"
                      : "text-white hover:text-gold hover:border-b-2 hover:border-gold pb-1 transition-all duration-300"
                  }
                >
                  {title}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer text-white hover:text-gold transition-colors duration-300"
            onClick={() => setNav(!nav)}
          >
            {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 w-full bg-black/95"
          >
            <ul className="px-4 py-6 space-y-6">
              {menuItems.map(({ title, path }, index) => (
                <motion.li
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-600 pb-2"
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-gold font-bold block transition-all duration-300"
                        : "text-white hover:text-gold block transition-all duration-300"
                    }
                    onClick={() => setNav(false)}
                  >
                    {title}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
