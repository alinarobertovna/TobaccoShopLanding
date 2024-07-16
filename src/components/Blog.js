import React from 'react';
import "./styles.css"; 

const blogPosts = [
  {
    id: 1,
    img: './blog1.jpg',
    title: 'Exploring New Flavors',
    text: 'Discover the latest trends in tobacco flavors and blends that are captivating enthusiasts around the world.',
  },
  {
    id: 2,
    img: './blog2.jpg',
    title: 'History of Tobacco',
    text: 'A deep dive into the rich history of tobacco, from its origins to its cultural significance across various regions.',
  },
  {
    id: 3,
    img: './blog3.jpg',
    title: 'Health Considerations',
    text: 'Understanding the health implications and safety measures to consider when enjoying tobacco products responsibly.',
  },
];

const Blog = () => {
  return (
    <div className="cards-container">
      <h2 className="cards-title">Latest Blog Posts</h2>
      <div className="cards-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="card-item-wrapper">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="px-6 py-4">
              <h3 className="card-item-title">{post.title}</h3>
              <p className="card-item-description">{post.text}</p>
              <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 mt-4">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
