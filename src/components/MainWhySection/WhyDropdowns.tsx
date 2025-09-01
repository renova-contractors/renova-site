"use client";

import Image from "next/image";
import React, { useState } from "react";
import right from "/public/logo/hero_right_arrow.svg";
import down from "/public/arrow/arrow_dropdown_down.svg";

// Define the type for each item in the whyArray
interface WhyItem {
	title: string;
	description: string;
}

// Define the type for the props
interface WhyDropdownsProps {
	whyArray: WhyItem[];
}

export const WhyDropdowns: React.FC<WhyDropdownsProps> = ({ whyArray }) => {
	const [clickedItems, setClickedItems] = useState(Array(4).fill(false));

	// Function to handle item click and toggle visibility
	const handleItemClick = (index: number): void => {
		setClickedItems((prevClickedItems) => {
			const newClickedItems = [...prevClickedItems];
			newClickedItems[index] = !newClickedItems[index];

			return newClickedItems;
		});
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
							src={clickedItems[index] ? down : right}
							height={25}
							width={25}
							alt=""
						/>
					</div>

					<p
						className={`my-5 text-main-gray ${
							clickedItems[index] ? "block" : "hidden"
						}`}
					>
						{step.description}
					</p>
				</li>
			))}
		</ul>
	);
};
