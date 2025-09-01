import { ImageBaseUrl } from "../../../../utils/ImageBaseUrl";
import Image from "next/image";
import add from "/public/logo/add.svg";
import Link from "next/link";

export interface Product {
	inStock: boolean;
	price?: number;
	measurement?: string;
	meta_title?: string;
	color?: string;
	stock?: number;
	variants?: Variant[];
}

export interface Variant {
	url: string;
	main_image: string;
	color: string;
	model?: string;
}

export type ProductImageProps = {
	variants?: Variant[];
	product: Product;
	params: string[]; // Added `params` to the props type
};

export const ProductImage: React.FC<ProductImageProps> = async ({
	variants,
	product,
	params,
}) => {
	async function getVariantsData(): Promise<any> {
		if (product?.variants?.map((item) => item.model).length !== 0) {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/get-variants`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						category: params[0],
						modelsList: product?.variants?.map(
							(item) => item.model,
						),
					}),
				},
			);

			if (!response.ok) {
				throw new Error("Failed to fetch data");
			}

			const data = await response.json();
			return data;
		} else {
			return [];
		}
	}

	const allVariants = await getVariantsData();

	return (
		<div className="flex flex-col justify-between">
			<p className="text-white font-medium text-xl">
				{product.meta_title}
			</p>
			<p className="text-white pb-5">{product.color}</p>

			{product.stock !== 0 ? (
				<p className="text-lg text-red-500">
					{" "}
					{product.stock} In stock
				</p>
			) : (
				<p className="text-main-gray">Special Order</p>
			)}
			{product.price && (
				<p>
					<span className="text-title text-main-yellow">
						${product.price}
					</span>{" "}
					<span className="text-title text-main-gray">
						{product.measurement}
					</span>
				</p>
			)}

			{allVariants?.length !== 0 && (
				<div className="flex w-full gap-5 items-center mb-5 overflow-x-auto">
					<h3 className="text-main-gray">Select Color</h3>
					<ul className="flex gap-2 no-scrollbar">
						{allVariants?.map((variant, index) => (
							<li key={index} className="flex-shrink-0">
								<Link
									href={`/product/${params[0]}/${variant.url}`}
								>
									<Image
										className="rounded-3xl object-cover"
										src={`${ImageBaseUrl}${variant.main_image}`}
										height={40} // Assuming consistent image dimensions
										width={40}
										alt={`Color ${variant.color}`} // Providing alt text for accessibility
									/>
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
			<div className="flex mt-[40px] items-center gap-20 pb-5">
				<div className="flex gap-5 items-center">
					<Image alt="" src={add} />
					<p className="text-white">1</p>
					<Image alt="" src={add} />
				</div>
				<button className="text-white font-bold">Add To Cart</button>
			</div>
			<p className="text-title text-white">
				We install it to your kitchen
			</p>
			<div className="flex items-center gap-5">
				<p className="text-main-gray">
					You will be able to add a service in order
				</p>
				<Link className="yellow-link" href="/services">
					More about service
				</Link>
			</div>
		</div>
	);
};

export default ProductImage;
