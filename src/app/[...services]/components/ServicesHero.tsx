
import { FormMain } from "@/components/FormMain/FormMain";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";
import { HeroSwiperServices } from "./HeroSwiperServices";
import { ImagesPerksSlider } from "@/components/ImagesPerkslider/ImagesPerksSlider";
import Markdown from "react-markdown";

interface ServicesHeroProps {
	h1: string;
	heroPhrase: string;
	imageBottom: string;
	heroP: string;
	category: string;
}

export const ServicesHero: React.FC<ServicesHeroProps> = ({
	h1,
	heroPhrase,
	heroP,
	category
}) => {

	return (
		<header className="mt-[180px] max-md:mt-[190px] container h-full relative pr-[10px]   sm:pt-[70px] mb-10">
			<h1 className="custom-heading first-letter:text-main-yellow">
				{h1}
			</h1>

			<div className="flex flex-col gap-10 justify-between lg:flex-row mt-[42px] xl:mt-[20px] lg:mt-[10px] inside-mb">
				<HeroSwiperServices category={category}/>
				{/* <div style={{ width: "100%", height: "250px" }}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172256.2177155241!2d-122.43434183531849!3d47.57744981927824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xace89cdae412ae93%3A0x40ae051c2253149b!2sRenova%20Contractors%20LLC!5e0!3m2!1sen!2sus!4v1729034189552!5m2!1sen!2sus"
						width="100%"
						height="100%"
						style={{ borderRadius: 10 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div> */}

				<div className="lg:ml-[82px] max-xl:mt-[15px] w-full xl:w-1/3] text-white">

					<Markdown className="max-sm:hidden markdown">{heroP}</Markdown>

				</div>

			</div>
			<ImagesPerksSlider />

		</header>
	);
};
