"use client";
import { NextPage } from "next";
import Link from "next/link";

const HomePage: NextPage = () => {
	const products = [
		{
			category: "carpets",
			endpoint: "",
			url: "https://shawfloors.com/flooring/carpet",
		},
		{
			category: "hardwoods",
			endpoint: "",
			url: "https://shawfloors.com/flooring/hardwood",
		},
		{
			category: "vinyls",
			endpoint: "",
			url: "https://shawfloors.com/flooring/vinyl",
		},
		{
			category: "tiles",
			endpoint: "",
			url: "https://www.build.com/tile/c116927",
		},
		{
			category: "sinks",
			endpoint: "",
			url: "https://shawfloors.com/flooring/sink",
		},
		{
			category: "faucets",
			endpoint: true,
			url: "https://www.build.com/kitchen-sink-faucets/c133159",
		},
		{
			category: "vanities",
			endpoint: "",
			url: "https://www.build.com/shop-all-vanities/c113572",
		},
		{
			category: "doors",
			endpoint: "",
			url: "https://www.thermatru.com/explore-products/advanced-search",
		},
		{
			category: "laminates",
			endpoint: "",
			url: "https://www.llflooring.com/",
		},
		{
			category: "countertops",
			endpoint: "",
			url: "https://www.bedrosians.com/en/product/list/slabs/",
		},
	];

	function capitalizeWords(str: string) {
		return str.replace(/\b\w/g, function (char) {
			return char.toUpperCase();
		});
	}
	return (
		<div
			className="min-h-screen bg-gray-100 flex justify-center items-center "
			style={{ marginTop: "220px" }}
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full p-4">
				{products?.map((item) => (
					<Link
						key={item?.category}
						href={`/admin/products`}
						onClick={() => {
							localStorage.setItem("item", JSON.stringify(item));
						}}
					>
						<div
							key={item?.category}
							className="bg-main-dark shadow-lg rounded-lg flex text-white justify-center items-center h-64 hover:bg-gray-200 transition duration-300 cursor-pointer hover:text-main-dark "
						>
							<h2 className="text-xl font-semibold">
								{capitalizeWords(item?.category)}
							</h2>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default HomePage;
