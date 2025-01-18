const About = () => {
    return (
      <div className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-playfair text-center mb-16">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300">
                Welcome to Luxe Lounge, where sophistication meets comfort. Our
                premium lounge offers an unforgettable experience with carefully
                crafted cocktails and an ambiance that speaks luxury.
              </p>
              <p className="text-gray-300">
                Whether you're looking for a quiet evening or a vibrant night out,
                our space adapts to your needs while maintaining its elegant charm.
              </p>
            </div>
            <div className="h-[400px] bg-[url('/src/assets/about-img.jpg')] bg-cover bg-center rounded-lg" />
          </div>
        </div>
      </div>
    );
  };
  export default About;