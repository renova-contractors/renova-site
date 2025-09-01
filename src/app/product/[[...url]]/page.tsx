import React from "react";
import ProductImage from "./components/ProductImage";
import { Characteristics } from "./components/Characteristics";
import { ProductImageSmallerScreens } from "./components/ProductImageSmallerScreens";
import { ImageSwiper } from "./components/ImageSwiper";
// import { MyMarkdown } from "@/components/MyMarkdown/MyMarkdown";

// Define types for product data structure
interface ProductData {
	category: string;
	data: { [key: string]: unknown }[]; // Assuming dynamic data structure within 'data'
	// Add specific properties based on your API response if known
}

type Props = {
	params: { url: string[] };
	searchParams: { [key: string]: string | string[] | undefined };
};

export interface Variant {
	url: string;
	image: string;
	color: string;
}

const product: React.FC<Props> = async ({ params, searchParams }) => {
	const [category, url] = params.url;
	async function getData(): Promise<ProductData> {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/get-product`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					category,
					url,
				}),
			},
		);

		if (!response.ok) {
			throw new Error("Failed to fetch data");
		}

		const data = await response.json();
		return data;
	}

	const productData = await getData();

	const product = productData[0];
	return (
		<main className="relative z-10">
			<h2 className="title-white inside-mb container">
				{productData.category}
			</h2>

			<section className="container flex gap-[110px] mt-[34px] mb-[100px] max-xl:hidden">
				<ImageSwiper images={product?.images as string[]} />
				<ProductImage params={params?.url} product={product} />
			</section>
			<ProductImageSmallerScreens
				style={product.style as string}
				category={product.category as string}
				color={product.color as string}
				images={product.images as string[]}
				variants={product.images as Variant[]}
				price={product.images as number}
				// Другие пропсы
			/>
			<Characteristics product={product} />

			{/* <MyMarkdown markdown={product.markdown as string} /> */}
			{/* <ServicesAbout /> */}
		</main>
	);
};

export default product;
