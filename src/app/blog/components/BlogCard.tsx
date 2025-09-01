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
		<article className="markdown h-max hover:h-max max-h-[250px] overflow-y-hidden  border-solid border-[1px] hover:border-black border-white small-button text-white font-light text-title">
			<div className="flex justify-between pb-5">
				<Link href={`/blog/${url}`}>Browse</Link>
				<h4>{americanFormat}</h4>
			</div>

			<h2>{cardTitle}</h2>
			<p>{cardDescription}</p>
		</article>
	);
};
