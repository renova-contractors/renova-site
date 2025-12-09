"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import styles from "./PerksSwiper.module.css";

interface PerksSliderProps {
	items: { heading: string; paragraph: string }[];
	colorMap: { [key: string]: string };
}

export const PerksSlider: React.FC<PerksSliderProps> = ({ items, colorMap }) => {
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);
	const [swiperInstance, setSwiperInstance] = useState<any>(null);

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
			
			// Initial check
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
		<div className={`${styles.perksSwiper} inside-mb w-full max-w-full relative group overflow-hidden rounded-3xl`}>
			{/* Fade gradients to indicate scrollability - matching card height (170px) */}
			<div
				className={`absolute left-0 top-0 h-[170px] w-12 md:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 rounded-l-3xl ${
					canScrollLeft ? "opacity-100" : "opacity-0"
				}`}
			/>
			<div
				className={`absolute right-0 top-0 h-[170px] w-12 md:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 rounded-r-3xl ${
					canScrollRight ? "opacity-100" : "opacity-0"
				}`}
			/>

			{/* Scroll hint text - shows only on desktop when scrollable */}
			{canScrollRight && (
				<div className={`${styles.scrollHint} hidden md:block`}>
					<p className="text-sm text-gray-500 flex items-center gap-2 animate-pulse">
						<span className="text-lg">←</span>
						<span>Swipe to see more</span>
						<span className="text-lg">→</span>
					</p>
				</div>
			)}

			<div className="w-full max-w-full overflow-hidden">
				<Swiper
					modules={[Navigation, Scrollbar, FreeMode]}
					spaceBetween={16}
					slidesPerView="auto"
					freeMode={{
						enabled: true,
						sticky: false,
						momentumRatio: 0.5,
					}}
					scrollbar={{
						hide: false,
						draggable: true,
						dragSize: 100,
					}}
					navigation={{
						prevEl: ".perks-swiper-button-prev",
						nextEl: ".perks-swiper-button-next",
					}}
					onSwiper={setSwiperInstance}
					className="w-full"
					style={{
						paddingBottom: "40px",
					}}
				breakpoints={{
					320: {
						spaceBetween: 12,
					},
					768: {
						spaceBetween: 16,
					},
				}}
				>
					{items.map((item, index) => {
						const colorKeys = Object.keys(colorMap);
						const backgroundColor = colorMap[colorKeys[index % colorKeys.length]];

						return (
							<SwiperSlide
								key={`${item.heading}-${index}`}
								style={{ width: "auto" }}
								className="!transition-transform !duration-300"
							>
								<div
									style={{ backgroundColor }}
									className={`${styles.card} w-[320px] md:w-[350px] h-[170px] text-white font-light py-4 px-5 rounded-2xl cursor-pointer shadow-md hover:shadow-xl hover:shadow-black/20`}
								>
									<div className="mb-4 flex items-center">
										<h3 className="text-white font-normal text-title relative">
											{item.heading}
										</h3>
									</div>
									<p className="white-paragraph text-base min-h-[67px] leading-relaxed">
										{item.paragraph}
									</p>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>

			{/* Navigation arrows - visible on desktop */}
			<button
				type="button"
				className={`perks-swiper-button-prev absolute left-0 top-[85px] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 max-md:hidden ${
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
				className={`perks-swiper-button-next absolute right-0 top-[85px] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 max-md:hidden ${
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
	);
};

