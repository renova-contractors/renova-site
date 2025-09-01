import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import cardImage from "/public/contentImages/ourServices/cabinets.jpeg";

type Props = {
	heading: string;
	paragraph: string;
	url: string;
	price: string;
};

export const OurServicesSlide: React.FC<Props> = ({
	heading,
	paragraph,
	url,
	price,
}: any) => {
	const [isHovered, setHovered] = useState(false);

	return (
		<div
			className="justify-between min-w-[300px] min-h-[490px]
              md: md:max-h-[487px] sm:max-w-[300px]  lg:min-w-[350px] lg:max-w-[350px] lg:min-h-[516px]  border-solid border-[1px] hover:[border-black] border-white rounded-3xl font-light "
			key={heading}
		>
			<Image
				alt="service-image"
				className="rounded-t-xl mx-auto mb-5"
				src={cardImage}
				height={210}
			/>

			<h3 className="text-white min-h-[78px]  mb-5 font-light text-title px-2 pt-2 ">
				{heading}
			</h3>

			<p className="px-2 top-0 white-paragraph min-h-[111px] text-base mb-5">
				{paragraph}
			</p>

			<p className="relative  px-2">{price}</p>
			<Link className="catalog-button" href={url}>
				Browse
			</Link>
		</div>
	);
};
