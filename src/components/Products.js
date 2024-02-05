import React from 'react';
import "./styles.css";

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Tobacco',
      description: 'A fine blend of quality tobacco leaves.',
      imageUrl: '/path-to-your-image-1.jpg', 
    },
    {
      id: 2,
      name: 'Classic Cigarettes',
      description: 'Traditional flavor with a smooth finish.',
      imageUrl: '/path-to-your-image-2.jpg', 
    },
    {
      id: 3,
      name: 'Exotic Mix',
      description: 'Unique and aromatic tobacco varieties.',
      imageUrl: '/path-to-your-image-3.jpg', 
    },
  ];

  return (
    <div className="cards-container">
      <h1 className="cards-title">
        Premium Quality Tobacco and Cigarettes
      </h1>
      <div className="cards-grid">
        {products.map((product) => (
          <div key={product.id} className="card-item-wrapper">
            <img className="w-full" src={product.imageUrl} alt={product.name} />
            <div className="px-6 py-4">
              <div className="card-item-title">{product.name}</div>
              <p className="card-item-description">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
