"use client";

import { catalogCategories } from "@/constants/catalog/catalogCategories"; // Assuming TypeScript interface exists
import Image from "next/image";
import countertop_ccatalog from "/public/contentImages/countertop_catalog.jpg";
import countertop_in_modern_mobile from "/public/contentImages/countertop_in_modern.jpg";
import { Button } from "@/components/Button/Button";
import Link from "next/link";
import { catalogOptionsHero } from "@/constants/catalog/catalogOptions";
import { usePathname } from "next/navigation";

interface Product {
	id: string;
	title: string;
	url: string;
	text: string;
}

export const CatalogHero: React.FC = () => {
	const pathname = usePathname();

	const filterSelection = pathname.split("/");
	filterSelection.shift();
	const filterOption = filterSelection[1];
	const selectedCategory = catalogOptionsHero[filterOption];

	return (
		<section className="first-component container mx-auto mt-[40px] inside-mb relative z-10">
			<ul className=" gap-5 cursor-pointer flex mx-auto overflow-x-auto overflow-y-hidden no-scrollbar text-title text-main-yellow inside-mb">
				{catalogCategories.map((service: Product) => (
					<li
						key={service.id}
						className={`small-button ${
							service.id === filterOption
								? "catalog-button-active"
								: ""
						}`}
						//onClick={() => {setClickedService(service.text) }}
						style={{ whiteSpace: "nowrap" }}
					>
						<Link href={`/catalog/${service.url}`}>
							{service.title}
						</Link>
					</li>
				))}
			</ul>

			<div className="relative bottom-[3px] mx-auto w-full flex flex-col lg:flex-row   inside-mb items-center">
				<Image
					src={countertop_ccatalog}
					className="max-xl:w-full max-xl:h-auto max-sm:hidden rounded-r-xl"
					alt="countertop image"
				/>
				<Image
					src={countertop_in_modern_mobile}
					className="w-full h-auto sm:hidden"
					alt="countertop image"
				/>
				<div className="lg:ml-[82px] max-w-full max-lg:mt-[20px] lg:max-w-[312px] text-white ">
					<p className="mb-2 text-main-yellow items-center">
						Price is from{" "}
						<span className="font-black text-xl ">$9.00</span> / sq.
						m.
					</p>
					<p className="text-title mb-2">
						WE INSTALL IT IN YOUR KITCHEN
					</p>
					<p className="mb-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Itaque, perferendis.
					</p>
					<Button
						variant="secondary"
						className="hover:bg-white max-lg:mt-[20px] hover:text-black transition duration-100"
					>
						Get a consultation
					</Button>
				</div>
			</div>

			{/* search hero buttons */}
			<div className="lg:flex lg:flex-wrap lg:justify-center overflow-x-auto overflow-y-hidden no-scrollbar grid grid-flow-col grid-rows-2 gap-5 inside-mb">
				{selectedCategory &&
					selectedCategory.map((link) => (
						<Link
							key={link.url}
							className={`catalog-button ${
								link.url === pathname
									? "catalog-button-active"
									: ""
							}`}
							href={link.url}
						>
							{link.text}
						</Link>
					))}
			</div>
		</section>
	);
};
