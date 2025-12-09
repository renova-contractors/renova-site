import { type FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
	markdown: string;
	url: string;
	createdAt: string;
	cardTitle: string;
	cardDescription: string;
}

// Function to extract first image from markdown
const extractFirstImage = (markdown: string): string | null => {
	const imageRegex = /!\[.*?\]\((.*?)\)/;
	const match = markdown.match(imageRegex);
	return match ? match[1] : null;
};

export const BlogCard: FC<BlogCardProps> = ({ markdown, url, createdAt, cardTitle, cardDescription }) => {
	const dateObj = new Date(createdAt);
	const options = { year: "numeric", month: "long", day: "numeric" };

	const americanFormat = dateObj.toLocaleDateString("en-US", options as any);
	const imageUrl = extractFirstImage(markdown);

	return (
		<article 
			className="group flex flex-col border border-white/20 hover:border-main-yellow/60 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-main-yellow/10 hover:-translate-y-1 h-full"
			style={{ height: '224px' }}
		>
			<Link 
				href={`/blog/${url}`}
				className="flex flex-col h-full"
				aria-label={`Read article: ${cardTitle}`}
			>
				{/* Header with Date */}
				<div className="flex justify-between items-center px-4 pt-3 pb-2">
					<time 
						dateTime={createdAt}
						className="text-xs text-gray-400 font-medium uppercase tracking-wide"
					>
						{americanFormat}
					</time>
				</div>

				{/* Content and Image Section */}
				<div className="flex flex-1 px-4 pb-4 gap-4 min-h-0">
					{/* Content Section */}
					<div className="flex-1 flex flex-col min-h-0 justify-between">
						<div className="flex-1 flex flex-col min-h-0">
							<h2 className="text-base font-semibold line-clamp-2 text-white mb-2 group-hover:text-main-yellow transition-colors duration-300 leading-tight">
								{cardTitle}
							</h2>
							<p className="text-gray-400 text-sm line-clamp-3 flex-1 overflow-hidden leading-relaxed">
								{cardDescription}
							</p>
						</div>
						{/* Read more indicator */}
						<span className="text-main-yellow text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							Read more →
						</span>
					</div>

					{/* Image Section - Right Side */}
					{imageUrl && (
						<div className="relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-800/50">
							<Image 
								src={imageUrl} 
								alt={cardTitle}
								fill
								sizes="(max-width: 768px) 112px, 128px"
								className="object-cover group-hover:scale-110 transition-transform duration-500"
								loading="lazy"
							/>
						</div>
					)}
				</div>
			</Link>
		</article>
	);
};
