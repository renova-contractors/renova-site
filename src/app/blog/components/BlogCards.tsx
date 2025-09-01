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
			<ul className="flex flex-col gap-y-10">
				{cards.map((card) => (
					<BlogCard key={card.url} {...card} />
				))}
			</ul>
		</section>
	);
};
