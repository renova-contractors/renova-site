"use client";

import Image from "next/image";
import React, { useState } from "react";
import right from "/public/logo/hero_right_arrow.svg";
import down from "/public/arrow/arrow_dropdown_down.svg";

interface WhyItem {
	title: string;
	description: string;
}

// Define the type for the props
interface WhyDropdownsProps {
	whyArray: WhyItem[];
}

export const WhyDropdowns: React.FC<WhyDropdownsProps> = ({ whyArray }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleItemClick = (index: number): void => {
		// If clicking the same item, close it. Otherwise, open the clicked item
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<ul className="container inside-mb grid grid-cols-3 grid-flow-row gap-x-5 w-full mx-auto">
			{whyArray.map((step, index: number) => (
				<li key={`q${index + 1}`} id={`q${index + 1}`}>
					<div
						onClick={() => handleItemClick(index)}
						className="flex items-center text-main-gray font-medium text-title hover:cursor-pointer border-b-[0.5px] border-solid border-main-gray p-5 pl-0 text-left"
					>
						<p>{step.title}</p>
						<Image
							className="ml-auto"
							src={openIndex === index ? down : right}
							height={25}
							width={25}
							alt=""
						/>
					</div>

					<p
						className={`my-5 text-main-gray ${
							openIndex === index ? "block" : "hidden"
						}`}
					>
						{step.description}
					</p>
				</li>
			))}
		</ul>
	);
};
