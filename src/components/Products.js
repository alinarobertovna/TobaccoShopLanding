import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Tobacco',
      description: 'A fine blend of quality tobacco leaves.',
      imageUrl: '/path-to-your-image-1.jpg', // Replace with your image path
    },
    {
      id: 2,
      name: 'Classic Cigarettes',
      description: 'Traditional flavor with a smooth finish.',
      imageUrl: '/path-to-your-image-2.jpg', // Replace with your image path
    },
    {
      id: 3,
      name: 'Exotic Mix',
      description: 'Unique and aromatic tobacco varieties.',
      imageUrl: '/path-to-your-image-3.jpg', // Replace with your image path
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-3xl font-bold my-8">
        Premium Quality Tobacco and Cigarettes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={product.imageUrl} alt={product.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <p className="text-gray-700 text-base">
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
