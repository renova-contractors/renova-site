import { catalogOptionsBottom } from "@/constants/catalog/catalogOptions";
import Image from "next/image";
import Link from "next/link";

interface CatalogLink {
	url: string;
	text: string;
	logo?: string;
}

interface CatalogOption {
	material?: CatalogLink[];
	styles?: CatalogLink[];
	brands?: CatalogLink[];
}

const SearchButtons: React.FC<{ params: string[] }> = ({ params }) => {
	const filterOption = params[0];
	const selectedCategory = catalogOptionsBottom[filterOption];

	return (
		<section className="container mb-[100px] max-md:mb-[50px] px-5">
			{selectedCategory?.material && (
				<>
					<h3 className="title-white text-title-large mb-5">
						MATERIAL
					</h3>
					<div className="flex flex-wrap gap-5  mb-10 max-md:overflow-x-auto overflow-y-hidden max-md:flex-nowrap no-scrollbar">
						{selectedCategory &&
							selectedCategory.material.map((link: any) => (
								<Link
									key={link.url}
									className="catalog-button"
									href={link.url}
								>
									{link.text}
								</Link>
							))}
					</div>
				</>
			)}

			{selectedCategory?.styles && (
				<>
					<h3 className="title-white text-title-large mb-5">
						STYLES, TYPES AND COLORS
					</h3>
					<div className="flex flex-wrap gap-5  mb-10 max-md:overflow-x-auto overflow-y-hidden max-md:flex-nowrap no-scrollbar">
						{selectedCategory &&
							selectedCategory.styles.map((link: any) => (
								<Link
									key={link.url}
									className="catalog-button"
									href={link.url}
								>
									{link.text}
								</Link>
							))}
					</div>
				</>
			)}

			{selectedCategory?.brands && (
				<>
					<h3 className="title-white text-title-large mb-5">
						BRANDS
					</h3>
					<div className="flex gap-5  mb-10 overflow-x-auto overflow-y-hidden no-scrollbar">
						{selectedCategory &&
							selectedCategory.brands.map((link: any) => (
								<Link href={link.url} key={link.url}>
									<div className="flex gap-4 items-center catalog-button">
										<Image
											alt="brand-logo"
											src={link.logo}
											height={20}
											width={20}
										/>
										<p>{link.text}</p>
									</div>
								</Link>
							))}
					</div>
				</>
			)}
		</section>
	);
};

export default SearchButtons;
