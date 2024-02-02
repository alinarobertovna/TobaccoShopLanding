import React from 'react';

const PromoBanner = () => {
  return (
    <div className="bg-cover bg-center h-96 relative text-white" style={{ backgroundImage: `url('./guy2.jpg')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl md:text-6xl font-bold uppercase">Havana Club</h1>
        <p className="mt-4 text-xl md:text-2xl">Your promo slogan here</p>
        <div className="mt-8">
          <button className="bg-transparent hover:bg-white text-white hover:text-black font-semibold py-2 px-4 border border-white hover:border-transparent rounded mr-4">
            Button 1
          </button>
          <button className="bg-transparent hover:bg-white text-white hover:text-black font-semibold py-2 px-4 border border-white hover:border-transparent rounded">
            Button 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
