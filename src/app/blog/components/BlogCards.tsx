'use client';

import { useIsMobileClient } from "@/lib/hooks/useIsMobileClient";
import { BlogCard } from "./BlogCard";
import { CatalogBanner } from "@/app/catalog/[[...slug]]/components/CatalogBanner";
import { FormMain } from "@/components/FormMain/FormMain";

interface BlogCardProps {
	markdown: string;
	url: string;
	createdAt: string;
	cardTitle: string;
	cardDescription: string;
	category?: string;
}

type BlogCardsProps = {
	cards: BlogCardProps[];
};

export const BlogCards: React.FC<BlogCardsProps> = ({ cards }) => {
	const isMobile = useIsMobileClient();

	// Filter out invalid cards
	const validCards = (cards || []).filter((card) => 
		card && 
		card.url && 
		card.cardTitle && 
		card.createdAt
	);

	if (validCards.length === 0) {
		return (
			<section className="container relative component-mb z-20">
				<FormMain>
					<CatalogBanner isMobile={isMobile} />
				</FormMain>
				<div className="text-center py-12 text-white">
					<p className="text-lg">No blog posts found.</p>
				</div>
			</section>
		);
	}

	return (
		<section className="container relative component-mb z-20">
			<FormMain>
				<CatalogBanner isMobile={isMobile} />
			</FormMain>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ gridAutoRows: '224px' }}>
				{validCards.map((card) => (
					<BlogCard key={card.url} {...card} />
				))}
			</div>
		</section>
	);
};
