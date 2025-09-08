'use client'

import React, { useState } from 'react'
import { thumbsData } from "@/constants/thumbsSwiper/thumbsSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Thumbs } from "swiper/modules";

interface HeroSwiperServicesProps {
  category: string;
  images?: {
    hero?: Array<{
      src: string;
      alt: string;
    }>;
  };
}

export const HeroSwiperServices = ({ category, images }: HeroSwiperServicesProps) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Use database images if available, otherwise fall back to thumbsData
  const slidesData = images?.hero?.length ? images.hero : thumbsData[category] || [];

  return (
	<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={10}
					slidesPerView='auto' // Default value for larger screens
					freeMode={true}
					loop={true}
					watchSlidesProgress={true}
					modules={[Navigation, Thumbs]}
					style={{ borderRadius: 10, height: 200, overflowX: "auto" }}
					className="w-full"
				>
					{slidesData.map((slide, index) => (
						<SwiperSlide
						style={{
							width: 350,
							height: 250,

						  }}
						key={index}>
							<Image
								className="rounded-xl min-h-[110px] min-w-[160px] "
								objectFit="cover"
								quality={80}
								fill
								src={slide.src}
								alt={slide.alt || `Home remodeling project image ${index + 1} by RENOVA Contractors`}
							/>
						</SwiperSlide>
					))}
				</Swiper>
  )
}

