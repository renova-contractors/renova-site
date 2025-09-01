"use client";

import React, { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

import calendar from "/public/icons/work/calendar.svg";
import { thumbsTextImages } from "@/constants/thumbsSwiper/thumbsSwiperTextImages";

type Slide = { src: string; alt?: string };
type AlbumData = {
  images: Slide[];
  title?: string;
  heading?: string;
  paragraph?: string;
  timeline?: string;
};

interface Props {
  data: AlbumData;
  category?: string;
}

export const ThumbsSwiper: FC<Props> = ({ data, category }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const slides = data?.images ?? [];

  // meta из БД + fallback из файла (иконка всегда из файла)
  const fallback = thumbsTextImages[category ?? "all"] ?? thumbsTextImages.all;
  const title = data?.title ?? fallback.heading;
  const paragraph = data?.paragraph ?? fallback.paragraph;
  const timeline = data?.timeline ?? fallback.timeline;
  const icon = fallback.icon;

  useEffect(() => {
    setAllImagesLoaded(Boolean(slides.length));
  }, [slides.length]);

  return (
    <section className="w-full lg:w-[40%] mx-auto">
      <h3 className="mb-5 max-sm:mb-2 text-white font-bold">
        {String(title || "").toUpperCase()}
      </h3>

      {!allImagesLoaded && (
        <div className="animate-pulse">
          <div className="h-[380px] bg-gray-300 rounded-lg mb-4" />
          <div className="flex gap-4 mb-4">
            <div className="h-[110px] w-[160px] bg-gray-300 rounded-lg" />
            <div className="h-[110px] w-[160px] bg-gray-300 rounded-lg" />
            <div className="h-[110px] w-[160px] bg-gray-300 rounded-lg" />
          </div>
        </div>
      )}

      {allImagesLoaded && (
        <>
          {/* MAIN */}
          <Swiper
            style={{ maxHeight: 380, borderRadius: 10, marginBottom: 10 }}
            spaceBetween={10}
            navigation
            loop
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[Navigation, Thumbs]}
          >
            {slides.map((slide, i) => (
              <SwiperSlide className="min-h-[380px] max-sm:min-h-[250px]" key={i}>
                <div className="relative w-full h-[380px] max-sm:h-[250px] rounded-xl overflow-hidden">
                  <Image
                    src={slide.src}
                    alt={slide.alt || `album image ${i + 1}`}
                    fill
                    quality={80}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* THUMBS */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode
            loop
            watchSlidesProgress
            modules={[Navigation, Thumbs]}
            style={{ borderRadius: 10 }}
          >
            {slides.map((slide, i) => (
              <SwiperSlide className="min-h-[110px] min-w-[160px] max-sm:min-w-[95px]" key={i}>
                <div className="relative h-[110px] w-full rounded-xl overflow-hidden">
                  <Image
                    src={slide.src}
                    alt={slide.alt || `thumb ${i + 1}`}
                    fill
                    quality={40}
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}

      <p className="relative max-w-1/3 text-main-yellow mt-5 max-sm:mt-2 font-light">
        {paragraph}
      </p>

      <div className="flex items-start mt-5">
        <div className="flex gap-4">
          <Image height={50} width={50} src={icon} alt={`${title} icon`} />
          <div>
            <p className="text-white font-bold">Area:</p>
            <p className="text-main-yellow font-light">{category ?? "general"}</p>
          </div>
        </div>

        <div className="flex gap-4 ml-10">
          <Image height={50} width={50} src={calendar} alt="calendar icon" />
          <div>
            <p className="font-bold text-white">Timeline:</p>
            <p className="font-light text-main-yellow ">{timeline}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
