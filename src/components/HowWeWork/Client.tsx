"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReadMore from "@/components/ReadMore/ReadMore";

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

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        loop={true}
        aria-roledescription="carousel"
        className="inside-mb slider-gap w-full"
      >
        {array.map((step: HowWeWorkObj) => (
          <SwiperSlide
            key={step.id}
            role="group"
            aria-label={`Step ${step.id}: ${step.title}`}
            className="py-5 px-4 rounded-2xl border-solid border-[0.5px] border-white min-w-[350px] max-w-[350px] lg:min-w-[450px] lg:max-w-[450px] min-h-[250px]"
          >
            <div>
              <div className="mb-5 flex items-center">
                <h3 className="text-white font-light text-title">{step.title}</h3>
              </div>

              <ul aria-label={`${step.title} details`}>
                {Object.values(step.description).map((desc, i) => (
                  <li
                    key={i}
                    className="relative left-4 white-paragraph text-base flex items-start gap-2 min-h-[50px]"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Extra descriptive markdown */}
      {howWeWorkMarkdown && (
        <ReadMore maxLength={180} className="markdown" aria-label="Additional description of how we work">
          <ReactMarkdown>{howWeWorkMarkdown}</ReactMarkdown>
        </ReadMore>
      )}
    </>
  );
};

export default HowWeWorkClient;
