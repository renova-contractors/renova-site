"use client";

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
	ourServices,
	serviceHeadings,
} from "@/constants/ourServices/ourServices";
import { ourServicesCardsData } from "@/constants/ourServices/ourServicesCardsData";
import { ServicesCard } from "../ServicesCard/ServicesCard";
import { ourServicesLocalLinks } from "@/constants/ourServices/ourServicesLoccalLinks";
import { locationNames } from "@/constants/costKeywords/costKeywords";
import ReadMore from "@/components/ReadMore/ReadMore";
import ReactMarkdown from "react-markdown";
import { useIsMobileClient } from "@/lib/hooks/useIsMobileClient";

interface OurServicesClientProps {
	h2: string;
	paragraph: string;
	ourServicesMarkdown: string;
	category?: string;
	location?: string;
}

const OurServicesClient: React.FC<OurServicesClientProps> = ({
	h2,
	paragraph,
	ourServicesMarkdown,
	category = 'all',
	location = 'seattle',
}) => {
	const isMobile = useIsMobileClient();
	const [clickedService, setClickedService] = useState(category);
	
	// State for menu slider scroll position
	const [menuCanScrollLeft, setMenuCanScrollLeft] = useState(false);
	const [menuCanScrollRight, setMenuCanScrollRight] = useState(true);
	const [menuSwiperInstance, setMenuSwiperInstance] = useState<any>(null);
	
	// State for cards slider scroll position
	const [cardsCanScrollLeft, setCardsCanScrollLeft] = useState(false);
	const [cardsCanScrollRight, setCardsCanScrollRight] = useState(true);
	const [cardsSwiperInstance, setCardsSwiperInstance] = useState<any>(null);

	let urlLink = ourServicesLocalLinks[location] || {};
	let link = urlLink[clickedService] || "";

	// Handle menu slider scroll state
	useEffect(() => {
		if (menuSwiperInstance) {
			const updateMenuScrollButtons = () => {
				setMenuCanScrollLeft(!menuSwiperInstance.isBeginning);
				setMenuCanScrollRight(!menuSwiperInstance.isEnd);
			};

			menuSwiperInstance.on("slideChange", updateMenuScrollButtons);
			menuSwiperInstance.on("reachBeginning", () => setMenuCanScrollLeft(false));
			menuSwiperInstance.on("reachEnd", () => setMenuCanScrollRight(false));
			menuSwiperInstance.on("init", updateMenuScrollButtons);
			updateMenuScrollButtons();

			return () => {
				menuSwiperInstance.off("slideChange", updateMenuScrollButtons);
				menuSwiperInstance.off("reachBeginning");
				menuSwiperInstance.off("reachEnd");
				menuSwiperInstance.off("init");
			};
		}
	}, [menuSwiperInstance]);

	// Handle cards slider scroll state
	useEffect(() => {
		if (cardsSwiperInstance) {
			const updateCardsScrollButtons = () => {
				setCardsCanScrollLeft(!cardsSwiperInstance.isBeginning);
				setCardsCanScrollRight(!cardsSwiperInstance.isEnd);
			};

			cardsSwiperInstance.on("slideChange", updateCardsScrollButtons);
			cardsSwiperInstance.on("reachBeginning", () => setCardsCanScrollLeft(false));
			cardsSwiperInstance.on("reachEnd", () => setCardsCanScrollRight(false));
			cardsSwiperInstance.on("init", updateCardsScrollButtons);
			updateCardsScrollButtons();

			return () => {
				cardsSwiperInstance.off("slideChange", updateCardsScrollButtons);
				cardsSwiperInstance.off("reachBeginning");
				cardsSwiperInstance.off("reachEnd");
				cardsSwiperInstance.off("init");
			};
		}
	}, [cardsSwiperInstance]);

	return (
		<>
			{/* Services Menu */}
			<div className="mx-auto overflow-hidden w-full max-w-full relative">
				{/* Fade gradients for menu - matching button height */}
				<div
					className={`absolute left-0 top-0 h-full w-12 md:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
						menuCanScrollLeft ? "opacity-100" : "opacity-0"
					}`}
				/>
				<div
					className={`absolute right-0 top-0 h-full w-12 md:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
						menuCanScrollRight ? "opacity-100" : "opacity-0"
					}`}
				/>

				<div className="w-full max-w-full overflow-hidden rounded-3xl">
					<Swiper
						modules={[Navigation]}
						spaceBetween={10}
						slidesPerView="auto"
						navigation={{
							prevEl: ".menu-swiper-button-prev",
							nextEl: ".menu-swiper-button-next",
						}}
						onSwiper={setMenuSwiperInstance}
						className="inside-mb w-full cursor-pointer"
						style={{ maxWidth: "100%" }}
					>
						{ourServices.map((service) => (
							<SwiperSlide
								key={service.id}
								className="flex-shrink-0"
								style={{ width: "auto" }}
							>
								<div
									className={`small-button ${
										clickedService === service.id
											? "small-button-active"
											: ""
									}`}
									onClick={() => setClickedService(service.id)}
									style={{ whiteSpace: "nowrap" }}
								>
									{service.title}
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* Navigation arrows for menu - visible on desktop */}
				<button
					type="button"
					className={`menu-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 max-md:hidden ${
						menuCanScrollLeft
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
					className={`menu-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 max-md:hidden ${
						menuCanScrollRight
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

			{/* Services Cards */}
			<div className="mx-auto overflow-hidden w-full max-w-full relative rounded-3xl">
				{/* Fade gradients for cards - matching card height (290px) */}
				<div
					className={`absolute left-0 top-0 h-[290px] w-12 md:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 rounded-l-3xl ${
						cardsCanScrollLeft ? "opacity-100" : "opacity-0"
					}`}
				/>
				<div
					className={`absolute right-0 top-0 h-[290px] w-12 md:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 rounded-r-3xl ${
						cardsCanScrollRight ? "opacity-100" : "opacity-0"
					}`}
				/>

				{/* Scroll hint text - shows only on desktop when scrollable */}
				{cardsCanScrollRight && (
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
						navigation={{
							prevEl: ".cards-swiper-button-prev",
							nextEl: ".cards-swiper-button-next",
						}}
						onSwiper={setCardsSwiperInstance}
						className="container slider-gap w-full rounded-3xl"
						style={{ maxWidth: "100%", paddingBottom: "40px" }}
					>
						{ourServicesCardsData[clickedService]?.map(
							(
								{
									heading,
									paragraph,
									price,
									defaultLink,
									image,
									category,
								},
								index,
							) => (
								<SwiperSlide
									key={index}
									className="flex-shrink-0"
									style={{ width: "auto" }}
								>
									<ServicesCard
										heading={heading}
										paragraph={paragraph}
										price={price}
										url={
											clickedService !== "all"
												? index === 0
													? `/${link}`
													: ""
												: location
												  ? `/${ourServicesLocalLinks[location][category]}`
												  : `/${defaultLink}`
										}
										image={image}
									/>
								</SwiperSlide>
							),
						)}
					</Swiper>
				</div>

				{/* Navigation arrows for cards - visible on desktop */}
				<button
					type="button"
					className={`cards-swiper-button-prev absolute left-0 top-[145px] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 max-md:hidden ${
						cardsCanScrollLeft
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
					className={`cards-swiper-button-next absolute right-0 top-[145px] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 max-md:hidden ${
						cardsCanScrollRight
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

			{isMobile && (
				<ReadMore maxLength={200} className="markdownComponent relative z-10">
					<ReactMarkdown>{ourServicesMarkdown}</ReactMarkdown>
				</ReadMore>
			)}
		</>
	);
};

export default OurServicesClient;