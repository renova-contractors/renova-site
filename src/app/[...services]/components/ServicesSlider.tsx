import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface Service {
	heading: string;
	paragraph: string;
	url: string;
	image: string;
	price: string;
}

type ServiceSlider = {
	array: Service[];
	h2: string;
	paragraph: string;
	ourServicesMarkdown: string;
};

const ServicesSlider: React.FC<ServiceSlider> = ({
	array,
	h2,
	paragraph,
	ourServicesMarkdown,
}) => {
	return (
		<section className="container">
			<h2 className="custom-heading sm:text-center first-letter:text-main-yellow">
				{h2}
			</h2>
			<p className="text-center text-main-gray inside-mb">{paragraph}</p>
			<div className="relative  flex inside-mb slider-gap w-full overflow-x-auto overflow-y-hidden no-scrollbar">
				{array &&
					array.map((card) => {
						return (
							<article
								className="justify-between min-w-[300px] min-h-[490px]
              md: md:max-h-[487px]  lg:min-w-[350px] lg:min-h-[516px]  border-solid border-[1px] hover:[border-black] border-white rounded-3xl font-light "
								key={card.heading}
							>
								{/* <Image
									className="rounded-t-xl mx-auto mb-5"
									src={cardImage}
									height={210}
									alt="service image"
								/> */}

								<h3 className="text-white min-h-[78px] mb-5 font-light text-title px-2 pt-2 ">
									{card.heading}
								</h3>

								<p className="px-2 top-0 white-paragraph min-h-[111px] text-base mb-5">
									{card.paragraph}
								</p>

								<div className="flex items-center justify-between px-2">
									<p className="relative   text-main-yellow">
										{card.price}
									</p>
									<Link
										className="catalog-button"
										href={card.url}
									>
										Browse
									</Link>
								</div>
							</article>
						);
					})}
			</div>
			<ReactMarkdown className="markdown">
				{ourServicesMarkdown}
			</ReactMarkdown>
		</section>
	);
};

export default ServicesSlider;
