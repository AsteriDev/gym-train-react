import React from 'react';

import { TestimonialItems } from '../../data/dummy-data';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonial">
      <h1>TESTIMONIALS</h1>
      <div className="testi-content">
        {TestimonialItems.map((item) => (
          <img className="testi-img" src={item.url} alt={item.title} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
