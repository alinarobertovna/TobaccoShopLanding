import React from 'react';
import "./styles.css";

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Tobacco',
      description: 'Discover the ultimate in smoking pleasure with Premium Tobacco, a meticulously crafted blend of the finest tobacco leaves. Our expert tobacconists have selected only the highest quality leaves from renowned tobacco-growing regions around the world, ensuring a rich and satisfying flavor in every puff.',
      imageUrl: '/tobacco.jpg', 
    },
    {
      id: 2,
      name: 'Classic Cigarettes',
      description: 'Experience the timeless appeal of Classic Cigarettes, renowned for their traditional flavor and smooth finish. Our carefully curated blend of premium tobacco offers a rich, satisfying smoke that harks back to the golden age of cigarettes. Each puff delivers a consistent and balanced taste, perfect for those who appreciate the finer things in life.',
      imageUrl: '/cigarettes.jpg', 
    },
    {
      id: 3,
      name: 'Exotic Mix',
      description: 'Discover a world of unique flavors with Exotic Mix, a captivating blend of aromatic tobacco varieties. Our master blenders have carefully selected rare and distinct tobacco leaves from exotic locations, creating a smoking experience like no other. Each puff reveals a symphony of rich, complex notes and an enchanting aroma that will tantalize your senses.',
      imageUrl: '/exotic mix.jpg', 
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
