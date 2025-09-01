"use state";

import Image from "next/image";
import { useEffect, useState, type FC } from "react";
import type { SwiperContent } from "@/types/swiper/swiper";

export const HeroSlide: FC<SwiperContent> = ({
	heroImage,
	heroImageTab,
	heroImageMob,
}) => {
	const [currentImage, setCurrentImage] = useState("");
	const [isLoading, setIsLoading] = useState(true); // Track loading state

	const updateImage = (): void => {
		if (window.innerWidth < 640) {
			setCurrentImage(heroImageMob);
		} else if (window.innerWidth < 1024) {
			setCurrentImage(heroImageTab);
		} else {
			setCurrentImage(heroImage);
		}
	};

	useEffect(() => {
		updateImage();
		window.addEventListener("resize", updateImage);

		return () => window.removeEventListener("resize", updateImage);
	}, []);

	const handleImageLoad = () => {
		setIsLoading(false);
	};

	return (
		<div className="first-component min-w-full w-full flex relative  mx-auto justify-center items-center">
			<div
				className="relative w-full max-md:min-h-[380px]"
				style={{ height: "" }}
			>
				{isLoading && <SkeletonLoader />}
				<Image
					alt="banner-image-seattle-remodel"
					className={`w-full rounded-3xl max-md:rounded-xl ${isLoading ? 'hidden' : 'block'}`}
					src={currentImage}
					quality={60}
					layout="responsive"
					objectFit="contain"
					width={1440}
					height={480}
					onLoadingComplete={handleImageLoad} // Callback when image is loaded
				/>
			</div>
		</div>
	);
};

function SkeletonLoader() {
	return (
		<div className="w-full h-[480px] bg-gray-300 animate-pulse rounded-3xl flex flex-col justify-end p-5">
  {/* Placeholder for Heading */}
  <div className="h-6 w-3/4 bg-gray-400 rounded mb-4"></div>

  {/* Placeholder for Paragraph */}
  <div className="space-y-3 mb-4">
    <div className="h-4 w-full bg-gray-400 rounded"></div>
    <div className="h-4 w-10/12 bg-gray-400 rounded"></div>
    <div className="h-4 w-8/12 bg-gray-400 rounded"></div>
  </div>

  {/* Placeholder for Buttons */}
  <div className="flex space-x-4">
    <div className="h-10 w-1/3 bg-gray-400 rounded"></div>
    <div className="h-10 w-1/3 bg-gray-400 rounded"></div>
  </div>
</div>

	);

}
