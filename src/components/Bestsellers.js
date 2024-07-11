import React, { useState } from 'react';

// Sample data for bestsellers
const bestsellers = [
  {
    id: 1,
    img: 'path-to-image-1.jpg',
    price: '$19.99',
    description: 'A great tobacco product',
  },
  {
    id: 2,
    img: 'path-to-image-2.jpg',
    price: '$24.99',
    description: 'Another great tobacco product',
  },
  {
    id: 3,
    img: 'path-to-image-3.jpg',
    price: '$29.99',
    description: 'Another great tobacco product',
  },
  {
    id: 4,
    img: 'path-to-image-4.jpg',
    price: '$34.99',
    description: 'Another great tobacco product',
  },
  {
    id: 5,
    img: 'path-to-image-5.jpg',
    price: '$39.99',
    description: 'Another great tobacco product',
  },
  {
    id: 6,
    img: 'path-to-image-6.jpg',
    price: '$44.99',
    description: 'Another great tobacco product',
  },
  {
    id: 7,
    img: 'path-to-image-7.jpg',
    price: '$49.99',
    description: 'Another great tobacco product',
  },
];

const Bestsellers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index * 3);
  };

  return (
    <div className="bg-gray-100 py-12 mb-8">
      <div className="w-full max-w-screen-lg mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">Bestsellers</h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            {bestsellers.map((item, index) => (
              <div
                key={item.id}
                className={`w-1/3 flex-shrink-0 p-4 transition-transform transform ${
                  index >= currentIndex && index < currentIndex + 3
                    ? 'translate-x-0'
                    : 'translate-x-full hidden'
                }`}
              >
                <div className="bg-white rounded shadow-md p-4">
                  <img
                    src={item.img}
                    alt={item.description}
                    className="mb-4 w-full h-48 object-cover rounded"
                  />
                  <p className="text-lg font-bold">{item.price}</p>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-4">
            {Array.from({ length: Math.ceil(bestsellers.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 w-3 rounded-full mx-1 focus:outline-none ${
                  currentIndex / 3 === index ? 'bg-gray-800' : 'bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
