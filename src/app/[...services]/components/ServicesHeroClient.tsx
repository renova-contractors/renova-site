"use client";

import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import ReadMore from "@/components/ReadMore/ReadMore";
import { useIsMobileClient } from "@/lib/hooks/useIsMobileClient";

interface ServicesHeroClientProps {
	heroP: string;
}

export const ServicesHeroClient: React.FC<ServicesHeroClientProps> = ({
	heroP,
}) => {
	const isMobile = useIsMobileClient();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<>
			{mounted && (
				<>
					<div className="lg:ml-[82px] max-xl:mt-[15px] w-full xl:w-1/3] text-white csr-markdown">
						{isMobile ? (
							<ReadMore maxLength={150} className="markdown">
								<Markdown>{heroP}</Markdown>
							</ReadMore>
						) : (
							<Markdown className="markdown">{heroP}</Markdown>
						)}
					</div>
					<style jsx global>{`
						.ssr-markdown { display: none; }
						.csr-markdown { display: block; }
					`}</style>
				</>
			)}
		</>
	);
};

export default ServicesHeroClient;
