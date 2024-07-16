import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const customerReviews = [
  {
    id: 1,
    citation: 'This is the best tobacco product I have ever tried! The richness and smoothness of the flavors are unparalleled. I will definitely be buying more.',
    name: 'John Doe',
    photoUrl: '/customer1.jpg',
  },
  {
    id: 2,
    citation: 'A rich and satisfying flavor that I highly recommend. The blend of tobacco leaves is just perfect, providing a delightful smoking experience every time.',
    name: 'James Smith',
    photoUrl: '/customer2.jpg',
  },
  {
    id: 3,
    citation: 'An exceptional product with great taste and aroma. The quality of the tobacco is evident from the first puff, making it a truly luxurious experience.',
    name: 'Alice Johnson',
    photoUrl: '/customer3.jpg',
  },
];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= customerReviews.length ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? customerReviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-100 py-12 mb-8 mt-12">
      <div className="w-full max-w-screen-md mx-auto relative">
        <h2 className="text-center text-3xl font-bold mb-8">Customer Reviews</h2>
        <div className="relative flex items-center justify-center">
          <button
            onClick={prevReview}
            className="absolute left-0 transform -translate-y-1/2 text-gray-800 hover:text-gray-600 focus:outline-none z-10"
            style={{ marginLeft: '-2rem', top: '50%' }}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </button>
          <div className="w-full flex justify-center">
            {customerReviews.map((review, index) => (
              <div
                key={review.id}
                className={`w-full transition-transform transform ${
                  index === currentIndex ? 'translate-x-0' : 'translate-x-full hidden'
                } flex flex-col items-center text-center`}
              >
                <img
                  src={review.photoUrl}
                  alt={review.name}
                  className="mb-4 w-20 h-20 object-cover rounded-full"
                />
                <p className="mb-4 italic">"{review.citation}"</p>
                <p className="font-bold">{review.name}</p>
              </div>
            ))}
          </div>
          <button
            onClick={nextReview}
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

export default CustomerReviews;
