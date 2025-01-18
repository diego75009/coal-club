import React from 'react';
import { FaFacebook, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-gold text-xl mb-4">Horaires d'ouverture</h3>
            <ul className="text-gray-400">
              <li>Lundi - Jeudi: 17h - 1h</li>
              <li>Vendredi - Samedi: 17h - 3h</li>
              <li>Dimanche: 17h - 00h</li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-gold text-2xl font-playfair mb-4">Lounge Bar</h2>
            <p className="text-gray-400">
              Un espace élégant pour vos soirées raffinées
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://www.facebook.com/p/The-Coal-Club-61556772265421/?locale=fr_CA" className="text-gold hover:text-yellow-600">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/thecoal.club/?hl=fr" className="text-gold hover:text-yellow-600">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-gold text-xl mb-4">Newsletter</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Votre email"
                className="p-2 bg-gray-900 text-white border border-gray-800 rounded"
              />
              <button
                type="submit"
                className="bg-gold text-black px-6 py-2 rounded hover:bg-yellow-600 transition duration-300"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lounge Bar. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
