// @ts-nocheck
/* eslint-disable */

import { CatalogHero } from "./components/CatalogHero";
// import { FAQ } from "@/components/FAQ/FAQ";
import { CatalogCards } from "./CatalogCards";
import { getData } from "@/lib/getData/getData";
import SearchButtons from "./components/SearchButtons";
import { notFound } from "next/navigation";
/* import { Manufacturers } from "@/components/MainManufacturers/Manufacturers"; */
import Pagination from "./components/Pagination";

type Props = {
	params: { slug: string[] }; // Corrected type for 'slug' to be an array of strings
	searchParams: { [key: string]: string | string[] | undefined };
};

const page: React.FC<Props> = async ({ params, searchParams }) => {
	let productItems;
	try {
		productItems = await getData(params, searchParams);
	} catch (error) {
		notFound();
	}

	if (!productItems || typeof productItems !== 'object') {
		notFound();
	}

	const slug = params.slug || [];
	const currentPage = parseInt(searchParams.page?.[0] || "1");

	return (
		<main className="">
			<CatalogHero />

			<CatalogCards
				products={productItems.data}
				params={params?.slug}
				apiEndpoint="/api/products"
			/>

			<Pagination
				totalPages={Math.ceil(productItems.totalCount / 16)}
				currentPage={currentPage}
				basePath={slug.join("/")}
			/>

			<SearchButtons params={params.slug} />
			{/* <Manufacturers /> */}
			{/* <FAQ /> */}
		</main>
	);
};

export default page;
