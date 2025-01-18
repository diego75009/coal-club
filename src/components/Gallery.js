import React from 'react';

const Gallery = () => {
  return (
    <section className="py-20 bg-black" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-gold text-center mb-12">Notre Galerie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1470337458703-46ad1756a187"
              alt="Cocktail 1"
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1551024709-8f23befc6f87"
              alt="Cocktail 2"
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"
              alt="Ambiance"
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
