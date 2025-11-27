"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ImageBaseUrl } from "../../../../utils/ImageBaseUrl";

type ImageSwiperProps = {
	images: string[];
	category?: string;
};

export const ImageSwiper: React.FC<ImageSwiperProps> = ({ images }) => {
	return (
		<div className="sm:max-w-[650px] max-sm:max-w-[350px] mx-auto inside-mb">
			<Carousel
				infiniteLoop={true}
				useKeyboardArrows={true}
				autoPlay={true}
				stopOnHover={true}
				emulateTouch={true}
				dynamicHeight={true}
				className="carousel"
			>
				{images?.map((image, index) => (
					<div
						key={index}
						className="rounded-3xl mb-10 sm:min-h-[450px] sm:min-w-[450px] max-sm:min-w-[350px] max-sm:min-h-[350px]"
					>
						<Image
							src={`${ImageBaseUrl}${image}`}
							className="rounded-3xl"
							alt="Gallery image"
							fill
							objectFit="cover"
						/>
					</div>
				))}
			</Carousel>
		</div>
	);
};
