import React from "react";
import { serviceHeadings } from "@/constants/ourServices/ourServices";
import { locationNames } from "@/constants/costKeywords/costKeywords";
import OurServicesClient from "./Client";
import ReactMarkdown from "react-markdown";

interface OurServicesProps {
	h2: string;
	paragraph: string;
	ourServicesMarkdown: string;
	category?: string;
	location?: string;
	mobile?: boolean;
}

export const OurServices: React.FC<OurServicesProps> = ({
	h2,
	paragraph,
	ourServicesMarkdown,
	category = 'all',
	location = 'seattle',
	mobile
}) => {
	return (
		<section className="border-white rounded-3xl container w-full component-mb text-white relative z-20">
			<h2 className="container custom-heading sm:text-left first-letter:text-main-yellow">
				{serviceHeadings[category]}{" "}
				{location
					? `${" in " + locationNames[location]} by RENOVA`
					: ""}
			</h2>
		

			<OurServicesClient
				h2={h2}
				paragraph={paragraph}
				ourServicesMarkdown={ourServicesMarkdown}
				category={category}
				location={location}
		/>
		<div className="ssr-markdown">
			<ReactMarkdown className="markdownComponent">{ourServicesMarkdown}</ReactMarkdown>
		</div>
	</section>
	);
};
