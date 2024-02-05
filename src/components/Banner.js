import React from 'react';
import "./styles.css";

const PromoBanner = () => {
  return (
    <div className="banner-container">
      <div className="banner-overlay"></div> 
      <div className="banner-text">
        <h1 className="banner-title">Havana Club</h1>
        <p className="promo">Your promo slogan here</p>
        <div className="mt-8">
          <button className="banner-button">
            Button 1
          </button>
          <button className="banner-button">
            Button 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
