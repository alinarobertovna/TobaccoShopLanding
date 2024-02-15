import React, { useState } from 'react';
import "./styles.css";

const PromoBanner = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative banner-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="banner-overlay"></div> 
          <div className="banner-text">
            <h1 className="banner-title">Havana Club</h1>
            <p className="promo">{slide.text}</p>
            <div className="mt-8">
              <button className="banner-button">
                Discover More
              </button>
              <button className="banner-button">
                Shop now
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full mx-1 ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PromoBanner;
