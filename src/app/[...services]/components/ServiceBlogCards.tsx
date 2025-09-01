import { getBlogData } from "@/lib/getBlogData/getBlogData";
import { BlogCard } from "@/app/blog/components/BlogCard";
import { CatalogBanner } from "@/app/catalog/[[...slug]]/components/CatalogBanner";
import useIsMobile from "@/lib/hooks/useIsMobile";
import { FormMain } from "@/components/FormMain/FormMain";

interface Props {
	category?: string;
}

export const ServicesBlogCards: React.FC<Props> = async ({ category = "" }) => {
	let blogData;

	if (category) {
		blogData = await getBlogData(`category/${category}`);
	} else {
		blogData = await getBlogData("");
	}

	const isMobile = useIsMobile();

	return (
		<section className="container relative component-mb z-20">
			<FormMain>
				<CatalogBanner isMobile={isMobile} />
			</FormMain>
			<ul className="flex flex-col gap-y-10">
				{blogData.map((card) => (
					<BlogCard key={card.url} {...card} />
				))}
			</ul>
		</section>
	);
};
