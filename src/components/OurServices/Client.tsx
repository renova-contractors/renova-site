"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
	const [clickedService, setClickedService] = useState(category);

	let urlLink = ourServicesLocalLinks[location] || {};
	let link = urlLink[clickedService] || "";

	return (
		<>
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

			{/* Markdown Content */}
			<ReadMore maxLength={200} className="markdown relative z-10">
				<ReactMarkdown>{ourServicesMarkdown}</ReactMarkdown>
			</ReadMore>
		</>
	);
};

export default OurServicesClient;