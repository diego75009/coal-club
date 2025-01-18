import { motion } from 'framer-motion';

const MenuItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900 p-6 rounded-lg"
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <motion.h3 className="text-xl font-bold mt-4">{item.name}</motion.h3>
      <p className="text-gray-400">{item.description}</p>
      <p className="text-gold mt-2">${item.price}</p>
    </motion.div>
  );
};

const Menu = () => {
  const menuItems = [
    {
      name: "Plat 1",
      description: "Description du plat 1",
      price: "19.99",
      image: "/images/food1.jpg"
    },
    {
      name: "Plat 2",
      description: "Description du plat 2",
      price: "24.99",
      image: "/images/food2.jpg"
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Notre Menu
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;