'use client';

import { useState } from "react";

const blogFilter = [
	{
		id: "all",
		name: "All Topics",
	},
	{
		id: "bathroom",
		name: "Bathroom",
	},
	{
		id: "kitchen",
		name: "Kitchen",
	},
	{
		id: "basement",
		name: "Basement",
	},
	{
		id: "attic",
		name: "Attic",
	},
	{
		id: "deck",
		name: "Deck",
	},
	{
		id: "tile",
		name: "Tiles & Flooring",
	},
	{
		id: "cabinets",
		name: "Cabinets",
	},
	{
		id: "architecture",
		name: "Architecture",
	},
	{
		id: "countertops",
		name: "Countertops",
	},
];

interface BlogFilterProps {
	allBlogData: any[];
	onFilterChange: (filteredData: any[]) => void;
}

export const BlogFilter: React.FC<BlogFilterProps> = ({ allBlogData, onFilterChange }) => {
	const [selectedCategory, setSelectedCategory] = useState<string>("all");

	const handleCategoryClick = (categoryId: string) => {
		setSelectedCategory(categoryId);
		
		if (categoryId === "all") {
			onFilterChange(allBlogData);
		} else {
			const filtered = allBlogData.filter((item: any) => {
				const itemCategory = item.category?.toLowerCase() || '';
				return itemCategory === categoryId.toLowerCase() ||
					item.cardTitle?.toLowerCase().includes(categoryId.toLowerCase()) ||
					item.cardDescription?.toLowerCase().includes(categoryId.toLowerCase());
			});
			onFilterChange(filtered);
		}
	};

	return (
		<section className="first-component relative max-w-[1440px] mx-auto w-full px-[10px] z-10  mb-10">
			<div className="flex justify-between flex-col md:flex-row inside-mb">
				<ul className="w-full h-max max-w-[1000px] overflow-x-auto overflow-y-hidden no-scrollbar slider-gap flex justify-between">
					{blogFilter.map((item) => (
						<li key={item.id}>
							<button
								onClick={() => handleCategoryClick(item.id)}
								className={`small-button h-max ${selectedCategory === item.id ? 'bg-main-yellow text-black' : ''}`}
								style={{ whiteSpace: "nowrap" }}
							>
								{item.name}
							</button>
						</li>
					))}
				</ul>
				<input className="max-md:mx-[10px] max-w-[173px] w-full" />
			</div>
		</section>
	);
};
