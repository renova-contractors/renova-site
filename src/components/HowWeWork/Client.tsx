"use client";

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ReadMore from "@/components/ReadMore/ReadMore";
import { useIsMobileClient } from "@/lib/hooks/useIsMobileClient";

interface DescriptionObject {
  p1: string;
  p2: string;
  p3: string;
}

interface HowWeWorkObj {
  id: number;
  title: string;
  description: DescriptionObject;
  imagePath?: string | undefined;
}

type Props = {
  array: HowWeWorkObj[];
  howWeWorkMarkdown: string;
};

export const HowWeWorkClient: React.FC<Props> = ({ array, howWeWorkMarkdown }) => {
  const isMobile = useIsMobileClient();
  // State for slider scroll position
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  // Handle slider scroll state
  useEffect(() => {
    if (swiperInstance) {
      const updateScrollButtons = () => {
        setCanScrollLeft(!swiperInstance.isBeginning);
        setCanScrollRight(!swiperInstance.isEnd);
      };

      swiperInstance.on("slideChange", updateScrollButtons);
      swiperInstance.on("reachBeginning", () => setCanScrollLeft(false));
      swiperInstance.on("reachEnd", () => setCanScrollRight(false));
      swiperInstance.on("init", updateScrollButtons);
      updateScrollButtons();

      return () => {
        swiperInstance.off("slideChange", updateScrollButtons);
        swiperInstance.off("reachBeginning");
        swiperInstance.off("reachEnd");
        swiperInstance.off("init");
      };
    }
  }, [swiperInstance]);

  return (
    <>
      <div className="mx-auto overflow-hidden w-full max-w-full relative rounded-3xl">
        {/* Fade gradients - matching card height (250px) */}
        <div
          className={`absolute left-0 top-0 h-[250px] w-12 md:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 rounded-l-3xl ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 h-[250px] w-12 md:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 rounded-r-3xl ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Scroll hint text - shows only on desktop when scrollable */}
        {canScrollRight && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none hidden md:block">
            <p className="text-sm text-gray-500 flex items-center gap-2 animate-pulse">
              <span className="text-lg">←</span>
              <span>Swipe to see more</span>
              <span className="text-lg">→</span>
            </p>
          </div>
        )}

        <div className="w-full max-w-full overflow-hidden rounded-3xl">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView="auto"
            loop={true}
            navigation={{
              prevEl: ".how-we-work-button-prev",
              nextEl: ".how-we-work-button-next",
            }}
            onSwiper={setSwiperInstance}
            aria-roledescription="carousel"
            className="slider-gap w-full rounded-3xl"
            style={{ paddingBottom: "40px" }}
          >
        {array.map((step: HowWeWorkObj) => (
          <SwiperSlide
            key={step.id}
            role="group"
            aria-label={`Step ${step.id}: ${step.title}`}
            className="py-5 px-4 rounded-2xl border-solid border-[0.5px] border-white min-w-[350px] max-w-[350px] lg:min-w-[450px] lg:max-w-[450px] h-[250px] flex flex-col"
          >
            <div className="flex-1 flex flex-col">
              <div className="mb-3 flex items-center">
                <h3 className="text-white font-light text-title line-clamp-2">{step.title}</h3>
              </div>

              <ul aria-label={`${step.title} details`} className="flex-1">
                {Object.values(step.description).map((desc, i) => (
                  <li
                    key={i}
                    className="relative left-4 white-paragraph text-base flex items-start gap-2 min-h-[40px]"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
          </Swiper>
        </div>

        {/* Navigation arrows - visible on desktop */}
        <button
          type="button"
          className={`how-we-work-button-prev absolute left-0 top-[125px] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 max-md:hidden ${
            canScrollLeft
              ? "opacity-100 cursor-pointer"
              : "opacity-0 pointer-events-none"
          }`}
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          type="button"
          className={`how-we-work-button-next absolute right-0 top-[125px] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 max-md:hidden ${
            canScrollRight
              ? "opacity-100 cursor-pointer"
              : "opacity-0 pointer-events-none"
          }`}
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Extra descriptive markdown */}
      {isMobile && howWeWorkMarkdown && (
        <ReadMore maxLength={180} className="markdownComponent" aria-label="Additional description of how we work">
          <ReactMarkdown className="markdownComponent">{howWeWorkMarkdown}</ReactMarkdown>
        </ReadMore>
      )}
    </>
  );
};

export default HowWeWorkClient;
