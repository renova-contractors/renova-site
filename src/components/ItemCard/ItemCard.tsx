"use client";
import Image from "next/image";
import Link from "next/link";
import { ImageBaseUrl } from "../../utils/ImageBaseUrl";
import axios from "axios";
import { useEffect, useState } from "react";

type ItemCardProps = {
	meta_title: string;
	price: any;
	main_image: string;
	variants?: any; // Making variants optional
	item: any;
	params: any;
};

export const ItemCard: React.FC<ItemCardProps> = ({
	price,
	main_image,
	variants,
	meta_title,
	item,
	params,
}) => {
	const [allVariants, setAllVariants] = useState([]);
	useEffect(() => {
		const getVariantsData = async () => {
			try {
				const response = await axios.post(
					`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/get-variants`,
					{
						category: params[0],
						modelsList: variants?.map((item) => item.model),
					},
					{
						headers: {
							"Content-Type": "application/json",
						},
					},
				);
				if (response.data.length > 0) {
					setAllVariants(response.data);
				} else {
					setAllVariants([]);
				}
			} catch (error) {
				console.error("POST request error:", error.message);
			}
		};

		if (variants && variants.length > 0) {
			getVariantsData();
		}
	}, [params, variants]);

	return (
		<div className="flex flex-col justify-between w-full h-full p-4 border border-white rounded-3xl hover:border-black transition-all">
			<Link
				href={`/product/${
					params !== undefined ? params[0] : params
				}/${item?.url}`}
			>
				<div className="w-full h-[324px] xl:h-[316px] md:h-[216px] flex items-center justify-center overflow-hidden">
					<img
						src={`${ImageBaseUrl}${main_image}`}
						className="object-cover w-full h-full"
						alt="product-card-image"
						width={324}
						height={324}
					/>
				</div>
			</Link>
			<div className="px-4 py-5 flex flex-col flex-grow">
				<Link
					href={`/product/${
						params !== undefined ? params[0] : params
					}/${item?.url}`}
				>
					<h5 className="text-title pb-1 line-clamp-2 h-20 text-white">
						{meta_title}
					</h5>
				</Link>
				<p className="pb-1 text-white font-medium">{`$${price}`}</p>
				<div className="flex">
					{variants?.length !== 0 &&
						allVariants?.map((variant: any, index: number) => (
							<Link
								href={`/product/${
									params !== undefined ? params[0] : params
								}/${variant?.url}`}
								key={index}
							>
								<img
									src={`${ImageBaseUrl}${variant?.main_image}`}
									height={34}
									width={34}
									alt="product-card-variants"
									className={index !== 0 ? "mx-1" : "mr-1"}
								/>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
};
