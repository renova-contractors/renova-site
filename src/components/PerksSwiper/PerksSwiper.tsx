"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface PerksSliderProps {
    items: { heading: string; paragraph: string }[];
    colorMap: { [key: string]: string };
}

export const PerksSlider: React.FC<PerksSliderProps> = ({ items, colorMap }) => {
    return (
        <Swiper
            spaceBetween={10} // Adjust spacing as needed
            slidesPerView="auto"
            className="inside-mb slider-gap w-full no-scrollbar container"
            style={{ overflow: "hidden" }} // Ensures partial slides are visible
        >
            {items.map((item, index) => {
                const colorKeys = Object.keys(colorMap);
                const backgroundColor = colorMap[colorKeys[index % colorKeys.length]];

                return (
                    <SwiperSlide key={item.heading}  style={{ width: "auto" }}>
                        <div
                            style={{ backgroundColor }}
                            className=" w-[350px] h-[170px] text-white font-light py-2 px-4 rounded-2xl cursor-pointer"
                        >
                            <div className="mb-5 flex items-center">
                                <h3 className="text-white font-normal text-title relative">
                                    {item.heading}
                                </h3>
                            </div>
                            <p className="white-paragraph text-base min-h-[67px]">
                                {item.paragraph}
                            </p>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

