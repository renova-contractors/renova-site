"use client";
import React, { useEffect, useState } from "react";
import { topProducts } from "@/constants/topProducts/topProducts";
import { ItemCard } from "../ItemCard/ItemCard";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Loading from "../ItemCard/Loading";
import { Button } from "../Button/Button";

interface Item {
	id: number;
	name: string;
	cover: string;
	url: string;
	style: string;
	color: string;
	price: string;
	variants: string;
	thickness: string;
	measurement: string;
	image: string;
	title: string;
	description: string;
	meta_title?: string; // Ensure these properties are included
	main_image?: string;
	item?: string;
	params?: string[];
}

interface Props {
	data: Item[];
}

export const TopProducts: React.FC = (): JSX.Element => {
	const [clickedService, setClickedService] = useState("tile");
	const [data, setData] = useState<Item[] | null>(null);

	useEffect(() => {
		const fetchData = async (): Promise<any> => {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/topproducts/${clickedService}`,
			);
			const data = await response.json();
			setData(data);
			return data;
		};

		fetchData();
	}, [clickedService, process.env.NEXT_PUBLIC_BACKEND_URL]);

	const handleCategoryClick = (categoryId: string): void => {
		if (categoryId !== clickedService) {
			setClickedService(categoryId);
			setData(null);
		}
	};

	return (
		<section
			id="top_products"
			className="w-full max-w-[1440px] px-[10px] mx-auto z-10 relative text-main-gray mb-[100px] max-xl:mb-[50px]"
		>
			<div className="flex flex-col items-center md:flex-row">
				<div className="md:text-center md:pr-8 w-full md:w-[35%] xl:w-[28%]">
					<h2 className="custom-heading max-lg:text-[40px] mb-5 sm:mb-10 leading-tight first-letter:text-main-yellow">
						Top
						<br /> Products
					</h2>
					<ul className="flex inside-mb overflow-x-auto overflow-y-hidden no-scrollbar md:flex-col items-center">
						{topProducts.map((topProduct) => (
							<li
								className={`small-button ${
									clickedService === topProduct.id
										? "small-button-active"
										: ""
								}`}
								key={topProduct.title}
								style={{ whiteSpace: "nowrap" }}
								onClick={() =>
									handleCategoryClick(topProduct.id)
								}
							>
								<div className="flex items-center gap-5">
									{topProduct.title}
								</div>
							</li>
						))}
					</ul>
					<Link
						href="/catalog"
						className="max-md:hidden w-[198px] h-[60px] p-[10px] content-center items-center
                        rounded-[40px] font-bold bg-main-yellow text-main-yellow border-[1px] border-solid border-main-yellow bg-transparent
                        gap-[10px]"
					>
						Go to catalog
					</Link>
				</div>
				<ul className="w-full inside-mb flex slider-gap md:w-[56%] xl:w-[72%] overflow-x-auto overflow-y-hidden no-scrollbar">
					{!data ? (
						<div className="flex slider-gap">
							<Loading />
							<Loading />
							<Loading />
						</div>
					) : data.length > 0 ? (
						data.map((item: Item, index: number) => (
							<li key={index}>
								<Link href={`/product/${item.url}`}>
									<ItemCard
										meta_title={item.meta_title}
										main_image={item.main_image}
										item={item.item}
										params={item.params}
										{...item}
									/>
								</Link>
							</li>
						))
					) : (
						<p>No products available.</p>
					)}
				</ul>
				<Button variant="secondary" className="sm:hidden">
					<Link href="/catalog">Go to catalog</Link>
				</Button>
			</div>
		</section>
	);
};
