import { type FC } from "react";
import Link from "next/link";

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

	return (
		<article className="flex flex-col border-solid border-[1px] hover:border-main-yellow border-white small-button text-white font-light text-title bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/10" style={{ height: '224px' }}>
			{/* Header with Browse link and Date */}
			<div className="flex justify-between items-baseline p-2 pb-3">
				<Link 
					href={`/blog/${url}`} 
					className="text-main-yellow hover:text-yellow-400 font-medium text-sm"
				>
					Browse
				</Link>
				<time 
					dateTime={createdAt}
					className="text-xs text-gray-300"
				>
					{americanFormat}
				</time>
			</div>

			{/* Content and Image Section */}
			<div className="flex flex-1 px-2 pb-6 min-h-0">
				{/* Content Section - Left Side */}
				<div className="flex-1 flex flex-col min-h-0">
					<h2 className="text-lg font-semibold line-clamp-2 text-white mb-2">
						{cardTitle}
					</h2>
					<p className="text-gray-300 text-sm line-clamp-3 flex-1 overflow-hidden text-left">
						{cardDescription}
					</p>
				</div>

				{/* Image Section - Right Side */}
				{extractFirstImage(markdown) && (
					<div className="relative w-32 h-32 ml-4 flex-shrink-0">
						<img 
							src={extractFirstImage(markdown)!} 
							alt={cardTitle}
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>
				)}
			</div>
		</article>
	);
};
