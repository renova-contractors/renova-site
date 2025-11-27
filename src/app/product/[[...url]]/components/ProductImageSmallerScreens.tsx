import Image from "next/image";
import { productItems } from "@/constants/itemCards/itemCards";
import favorite from "/public/logo/ph_heart-thin.svg";
import add from "/public/logo/add.svg";
import remove from "/public/logo/remove.svg";
import Link from "next/link";
import { ImageSwiper } from "./ImageSwiper";

// Define types for props and product data
interface Product {
	inStock: boolean;
	price?: number;
	measurement?: string;
	// Add other properties based on 'productItems' structure
}

interface Variant {
	url: string;
	image: string;
	color: string;
}

type ProductImageSmallerScreensProps = {
	style: string;
	variants?: Variant[]; // Optional array of variants data
	category: string;
	cover?: boolean; // Optional flag for cover image
	price?: number;
	collection?: string;
	color: string;
	width?: string; // Optional width information
	images: string[]; // Optional array of image URLs (if not using variants)
};

export const ProductImageSmallerScreens: React.FC<
	ProductImageSmallerScreensProps
> = ({
	style,
	variants,
	category,
	cover,
	price,
	collection,
	color,
	width,
	images,
}) => {
	const product = productItems[0];

	return (
		<section className="container w-full component-mb  md:gap-10 mt-[25px] xl:hidden">
			<div className="flex items-center justify-between mb-5">
				<Image
					alt="add-to-favorite"
					className="sm:hidden "
					src={favorite}
					height={50}
					width={50}
				/>
			</div>
			<div className="flex gap-5 items-center inside-mb">
				<Image
					alt="add-to-favorite"
					className="max-sm:hidden"
					src={favorite}
					height={50}
					width={50}
				/>
				<h1 className="max-md:text-[40px] text-title-large font-black text-white leading-tight">
					{style}
				</h1>
			</div>

			<div className="mx-auto">
				<ImageSwiper images={images} />
			</div>

			<div className="w-full mt-10">
				<h2 className="text-white pb-5 mx-sm:pb-2">{color}</h2>

				{product.inStock ? (
					<h2 className="text-main-gray ">In stock</h2>
				) : (
					<h2 className="text-main-gray ">Special Order</h2>
				)}
				{/* {product.price && (
					<h3 className="pb-5">
						<span className="text-title text-main-yellow">
							${price}
						</span>{" "}
						<span className="text-title text-main-gray">
							{product.measurement}
						</span>
					</h3>
				)} */}

				{/* {variants && (
					<div className="flex w-full gap-5 items-center mb-5 overflow-x-auto">
						<h3 className="text-main-gray">Select Color</h3>
						<ul className="flex gap-2 no-scrollbar">
							{variants.map((variant, index) => (
								<li key={index} className="flex-shrink-0">
									<Link href={`/product/${variant.url}`}>
										<Image
											className="rounded-3xl object-cover"
											src={variant.image}
											height={40} // Assuming consistent image dimensions
											width={40}
											alt={`Color ${variant.color}`} // Providing alt text for accessibility
										/>
									</Link>
								</li>
							))}
						</ul>
					</div>
				)} */}

				{width && (
					<div className="flex mb-5 gap-5 items-center">
						<p className="text-main-gray">Size</p>
						<button className="small-button border-solid border-[1px] border-white hover:border-black">
							{width}
						</button>
					</div>
				)}
				<div className="flex mb-10 items-center gap-20 ">
					<div className="flex gap-5 items-center">
						<Image alt="remove-button" src={remove} />
						<p>1</p>
						<Image alt="add-button" src={add} />
					</div>
					<button>Add To Cart</button>
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
		</section>
	);
};
