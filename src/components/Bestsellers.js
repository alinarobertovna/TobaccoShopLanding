import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Sample data for bestsellers
const bestsellers = [
  {
    id: 1,
    img: '/best1.jpg',
    price: '$19.99',
    description: 'Havana Club Cigar',
  },
  {
    id: 2,
    img: '/best2.jpeg',
    price: '$45.99',
    description: 'Cuban Cigar Gift Set',
  },
  {
    id: 3,
    img: '/best3.jpg',
    price: '$129.99',
    description: 'Cuban Style Cigar Accessories Gift Set',
  },
  {
    id: 4,
    img: '/best4.jpg',
    price: '$599.99',
    description: 'Cigar Humidor',
  },
  {
    id: 5,
    img: '/best5.jpg',
    price: '$39.99',
    description: 'Vintage Cigar Chopper',
  },
  {
    id: 6,
    img: '/best6.png',
    price: '$24.99',
    description: 'Presbyterian Pipe Tobacco Mix',
  },
  {
    id: 7,
    img: '/best7.jpg',
    price: '$59.99',
    description: 'Vintage Tobacco Pipe',
  },
  {
    id: 8,
    img: '/best8.jpg',
    price: '$255.99',
    description: 'Dad Gift Set',
  },
  {
    id: 9,
    img: '/best9.jpg',
    price: '$99.99',
    description: 'Cigar Lighter Stainless Steel',
  },
];

const Bestsellers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= bestsellers.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? bestsellers.length - 3 : prevIndex - 3
    );
  };

  return (
    <div className="bg-gray-100 py-12 mb-8 mt-8">
      <div className="w-full max-w-screen-lg mx-auto relative">
        <h2 className="text-center text-3xl font-bold mb-8">Our Bestsellers</h2>
        <div className="relative flex items-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 transform -translate-y-1/2 text-gray-800 hover:text-gray-600 focus:outline-none z-10"
            style={{ marginLeft: '-2rem', top: '50%' }}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </button>
          <div className="flex overflow-hidden w-full">
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
                    className="mb-4 w-full h-64 object-cover rounded"
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
          <button
            onClick={nextSlide}
            className="absolute right-0 transform -translate-y-1/2 text-gray-800 hover:text-gray-600 focus:outline-none z-10"
            style={{ marginRight: '-2rem', top: '50%' }}
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
