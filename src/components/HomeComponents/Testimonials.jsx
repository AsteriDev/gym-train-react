import React from 'react';
import { TestimonialItems } from '../../data/dummy-data';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>TESTIMONIALS</h1>
      <div className="testi-content">
        {/* <ScrollContainer className="scroll-container" vertical={false}> */}
        {TestimonialItems.map((item) => (
          <img className="testi-img" src={item.url} alt={item.title} />
        ))}
        {/* </ScrollContainer> */}
      </div>
    </section>
  );
};

export default Testimonials;
