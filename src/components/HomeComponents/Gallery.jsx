import React from 'react';

import { GalleryItems } from '../../data/dummy-data';

const Gallery = () => {
  return (
    <section className="gallery">
      <h1>GALLERY</h1>
      <div className="gallery-content">
        {GalleryItems.map((item, index) => (
          <img
            className={`gallery-img item-${index + 1}`}
            alt={item.title}
            src={item.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
