import { bottomButtons } from "@/constants/bottomButtons/buttomButtons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ServiceAreas = (): JSX.Element => {
	const selectedCategory = bottomButtons.countertops;

	return (
		<section className="container max-md:px-2 component-mb relative z-10">
			{selectedCategory?.material && (
				<>
					<h3 className="title-white text-title-large">MATERIAL</h3>
					<ul className="flex gap-5 mt-10 mb-10 overflow-x-auto overflow-y-hidden no-scrollbar">
						{selectedCategory &&
							selectedCategory.material.map((link: any) => (
								<li key={link.url} className="catalog-button">
									<Link href={link.url}>{link.text}</Link>
								</li>
							))}
					</ul>
				</>
			)}

			{selectedCategory?.styles && (
				<>
					<h3 className="title-white text-title-large">
						STYLES, TYPES AND COLORS
					</h3>
					<ul className="flex flex-wrap gap-5 mt-10 mb-10 max-md:overflow-x-auto overflow-y-hidden max-md:flex-nowrap no-scrollbar">
						{selectedCategory &&
							selectedCategory.styles.map((link: any) => (
								<li key={link.url}>
									<Link
										className="catalog-button"
										href={link.url}
									>
										{link.text}
									</Link>
								</li>
							))}
					</ul>
				</>
			)}

			{selectedCategory?.brands && (
				<>
					<h3 className="title-white text-title-large">BRANDS</h3>
					<ul className="flex gap-5 mt-10 overflow-x-auto overflow-y-hidden no-scrollbar">
						{selectedCategory &&
							selectedCategory.brands.map((link: any) => (
								<li key={link.url}>
									<Link href={link.url}>
										<div className="flex gap-4 items-center catalog-button">
											<Image
												alt="brand-log"
												src={link.logo}
												height={20}
												width={20}
											/>
											<p>{link.text}</p>
										</div>
									</Link>
								</li>
							))}
					</ul>
				</>
			)}
		</section>
	);
};
