"use client";

import ReactMarkdown from "react-markdown";
import { useState } from "react";
import {
	ourServices,
	serviceHeadings,
} from "@/constants/ourServices/ourServices";
import { ourServicesCardsData } from "@/constants/ourServices/ourServicesCardsData";
import { ServicesCard } from "../ServicesCard/ServicesCard";
import { ourServicesLocalLinks } from "@/constants/ourServices/ourServicesLoccalLinks";
import { locationNames } from "@/constants/costKeywords/costKeywords";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface OurServicesProps {
	h2: string;
	paragraph: string;
	ourServicesMarkdown: string;
	category?: string;
	location?: string;
}

export const OurServices: React.FC<OurServicesProps> = ({
	h2,
	paragraph,
	ourServicesMarkdown,
	category = 'all' ,
	location = 'seattle',
}) => {
	const [clickedService, setClickedService] = useState(category);

	let urlLink = ourServicesLocalLinks[location] || {};
	let link = urlLink[clickedService] || "";
	return (
		<section className="border-white rounded-3xl container w-full component-mb text-white relative z-20">
			<h2 className="container custom-heading sm:text-left first-letter:text-main-yellow">
				{serviceHeadings[clickedService]}{" "}
				{location
					? `${" in " + locationNames[location]} by RENOVA`
					: ""}
			</h2>
			{/* {location === "seattle" && (
				<p className="max-sm:hidden text-left text-main-gray inside-mb w-2/3">
					{paragraph}
				</p>
			)} */}

			{/* Services Menu */}
			<div className="container mx-auto overflow-hidden">
				<Swiper
					spaceBetween={10}
					slidesPerView="auto"
					className="inside-mb w-full cursor-pointer"
					style={{ maxWidth: "100%", overflow: "visible" }} // Keep Swiper within container width
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

			{/* Services Cards */}
			<div className="container mx-auto overflow-hidden">
				<Swiper
					spaceBetween={10}
					slidesPerView="auto"
					className="container inside-mb slider-gap w-full"
					style={{ maxWidth: "100%", overflow: "visible" }} // Keep Swiper within container width
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

			<ReactMarkdown className="markdown sm:w-2/3 sm:text-left max-sm:hidden relative z-10">
				{ourServicesMarkdown}
			</ReactMarkdown>
		</section>
	);
};
