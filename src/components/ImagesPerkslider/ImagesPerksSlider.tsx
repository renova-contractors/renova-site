import Image from "next/image";
import React from "react";

const IMAGES = [
  "/perks/permits.png",
  "/perks/material-discount.png",
  "/perks/warranty.png",
  "/perks/communication.png",
];

export const ImagesPerksSlider = () => {
  return (
    <div className="w-full">
      {/* На мобилке скролл, на md+ без скролла и растягиваемся на всю ширину */}
      <div className="
        flex gap-3
        overflow-x-auto md:overflow-visible
        snap-x md:snap-none
        -mx-4 md:mx-0 px-4 md:px-0
      ">
        {IMAGES.map((src, i) => (
          <div
            key={i}
            className="
              relative
              shrink-0 md:shrink
              w-[280px] sm:w-[320px] md:w-auto
              md:flex-1
              aspect-[350/150]
              snap-start
            "
          >
            <Image
              src={src}
              alt="Perk"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 33vw, 25vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
