import React from 'react';
import { FaPhone,FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-20 bg-black" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-gold text-center mb-12">Contactez-nous</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhone className="text-gold text-2xl" />
              <div>
                <h3 className="text-white text-xl">Téléphone</h3>
                <p className="text-gray-400">07 75 75 75 53</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-gold text-2xl" />
              <div>
                <h3 className="text-white text-xl">Adresse</h3>
                <p className="text-gray-400">25 Rue du Colisée , 75008</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full p-3 bg-gray-900 text-white border border-gray-800 rounded"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full p-3 bg-gray-900 text-white border border-gray-800 rounded"
              />
            </div>
            <div>
              <textarea
                placeholder="Votre message"
                rows="4"
                className="w-full p-3 bg-gray-900 text-white border border-gray-800 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gold text-black px-8 py-3 rounded hover:bg-yellow-600 transition duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
