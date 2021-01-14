import React from 'react';

import { TestimonialItems } from '../../data/dummy-data';

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <h1>BLOG</h1>
      <div className="testi-content">
        {TestimonialItems.map((item) => (
          <img className="testi-img" src={item.url} alt={item.title} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
