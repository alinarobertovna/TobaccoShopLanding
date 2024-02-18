import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="bg-gray-100 py-20 mb-8"> {/* Add mb-8 for bottom margin */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-16 text-center">What We Offer</h2>
        <div className="flex flex-wrap -mx-4 justify-center">
          <div className="w-full md:w-1/3 px-4 mb-8">
          <div class="flex items-center justify-center mb-4">
          <img src="./leaves.png" alt="Leaf" className="w-12 h-12 text-gray-700" />
          </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Premium Quality Tobacco Leaves</h3>
            <p className="text-gray-700 text-center">Handpicked from the finest tobacco fields worldwide, our premium 
            leaves are cultivated, ensuring quality and flavor in every harvest</p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex items-center justify-center mb-4">
              <img src="./cigar.png" alt="Icon 2" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Exquisite Cigars and Cigarettes</h3>
            <p className="text-gray-700 text-center">Explore a vast selection of the world's finest cigars and cigarettes, 
            meticulously curated to satisfy even the most discerning tastes</p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex items-center justify-center mb-4">
              <img src="./lighter.png" alt="Icon 3" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Premier Tobacconist Accessories</h3>
            <p className="text-gray-700 text-center">Explore an exceptional selection of top-tier tobacconist accessories, 
            tailored for aficionados with discerning tastes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
