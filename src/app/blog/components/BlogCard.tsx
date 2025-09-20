import { type FC } from "react";

import Link from "next/link";


interface BlogCardProps {
	markdown: string;
	url: string;
	createdAt: string;
	cardTitle: string;
	cardDescription: string;
}

export const BlogCard: FC<BlogCardProps> = ({ markdown, url, createdAt, cardTitle, cardDescription }) => {
	const dateObj = new Date(createdAt);
	const options = { year: "numeric", month: "long", day: "numeric" };

	const americanFormat = dateObj.toLocaleDateString("en-US", options as any);

	return (
		<article className="markdown h-56 flex flex-col border-solid border-[1px] hover:border-main-yellow border-white small-button text-white font-light text-title bg-white/5 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-white/10">
			<div className="flex justify-between pb-5 mb-4">
				<Link href={`/blog/${url}`} className="text-main-yellow hover:text-yellow-400 font-medium">Browse</Link>
				<h4 className="text-sm text-gray-300">{americanFormat}</h4>
			</div>

			<div className="flex-1 flex flex-col">
				<h2 className="text-xl font-semibold mb-2 line-clamp-2">{cardTitle}</h2>
				<p className="text-gray-300 text-sm line-clamp-3 flex-1">{cardDescription}</p>
			</div>
		</article>
	);
};
