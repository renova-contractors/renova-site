import useIsMobile from "@/lib/hooks/useIsMobile";
import { BlogCard } from "./BlogCard";
import { CatalogBanner } from "@/app/catalog/[[...slug]]/components/CatalogBanner";
import { FormMain } from "@/components/FormMain/FormMain";

interface BlogCardProps {
	markdown: string;
	url: string;
	createdAt: string;
	cardTitle: string;
	cardDescription: string;
}

type BlogCard = {
	cards: BlogCardProps[];
};

export const BlogCards: React.FC<BlogCard> = ({ cards }) => {
	const isMobile = useIsMobile();

	return (
		<section className="container relative component-mb z-20">
			<FormMain>
				<CatalogBanner isMobile={isMobile} />
			</FormMain>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ gridAutoRows: '224px' }}>
				{cards.map((card) => (
					<BlogCard key={card.url} {...card} />
				))}
			</div>
		</section>
	);
};
