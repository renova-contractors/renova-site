// @ts-nocheck

'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'photoswipe-react';
import 'photoswipe/style.css';

const images = [
  { src: '/docs/license.png', width: 800, height: 600, alt: 'Construction License' },
  { src: '/docs/business_license.png', width: 800, height: 600, alt: 'Business License' },
  { src: '/docs/insurance.png', width: 800, height: 600, alt: 'Insurance Certificate' },
  { src: '/docs/bond.png', width: 800, height: 600, alt: 'Bond Certificate' },
];

const Licensing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <section id='licensing' className="scroll-anchor container w-full component-mb">
      <h2 className="custom-heading  first-letter:text-main-yellow">
        Licensed, Bonded, Insured
      </h2>
      <div className="grid max-sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="cursor-pointer" onClick={() => openLightbox(index)}>
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="rounded-md"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images.map((img) => ({
            src: img.src,
            width: img.width,
            height: img.height,
          }))}
          index={currentIndex}
        />
      )}
    </section>
  );
};

export default Licensing;
