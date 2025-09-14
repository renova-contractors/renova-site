"use client";

import React from "react";
import Markdown from "react-markdown";
import ReadMore from "@/components/ReadMore/ReadMore";

interface ServicesHeroClientProps {
	heroP: string;
}

export const ServicesHeroClient: React.FC<ServicesHeroClientProps> = ({
	heroP,
}) => {
	return (
		<div className="lg:ml-[82px] max-xl:mt-[15px] w-full xl:w-1/3] text-white">
			<ReadMore maxLength={150} className="markdown">
				<Markdown>{heroP}</Markdown>
			</ReadMore>
		</div>
	);
};

export default ServicesHeroClient;
