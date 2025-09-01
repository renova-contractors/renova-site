"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import CatalogSearch from "./components/CatalogSearch";
import { ItemCard } from "../../../components/ItemCard/ItemCard";

interface CatalogCardsProps {
	params: any; // Add any specific types as needed
	products: any[]; // Specify the type for products if possible
	apiEndpoint: string; // Endpoint for fetching the data
}

export const CatalogCards: React.FC<CatalogCardsProps> = ({ params }) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [products, setProducts] = useState([]);
	const [isSearch, setIsSearch] = useState(false);

	const [searchString, setSearchString] = useState({
		search: params[2],
		color: "",
		material: "",
		style: "",
	});
	const [sortBy, setSortBy] = useState("price");
	const [sortOrder, setSortOrder] = useState("desc");

	function combineValues(obj) {
		// Extract the values from the object
		const values = Object.values(obj);

		// Join the values into a single string, separated by a space (or any separator you prefer)
		const combinedString = values.join(" ");

		return combinedString;
	}

	const combinedString = combineValues(searchString);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.post(
					`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/quries`,
					{
						category: params[0],
						searchString: combinedString,
						sortBy,
						sortOrder,
					},
					{
						headers: {
							"Content-Type": "application/json",
						},
					},
				);

				const result = response.data;
				setProducts(result);
				setLoading(false);
			} catch (error) {
				console.error("POST request error:", error.message);
				setError("Failed to fetch data. Please try again later.");
				setLoading(false);
			}
		};

		fetchProducts();
	}, [isSearch, sortOrder]);

	if (loading)
		return (
			<div className="flex justify-center items-center mb-9">
				loading...
			</div>
		);
	if (error) return <p>Error: {error}</p>;

	return (
		<section className="container mx-auto py-4 px-4">
			<p className="text-main-gray text-center mb-9">
				Found{" "}
				<span className="text-white font-bold">{products?.length}</span>{" "}
				items
			</p>
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
				<div className="hidden lg:block lg:col-span-1">
					<CatalogSearch
						params={params.slug}
						products={products?.length}
						setProduct={setProducts}
						setSearchString={setSearchString}
						searchString={searchString}
						setIsSearch={setIsSearch}
						isSearch={isSearch}
						setSortBy={setSortBy}
						setSortOrder={setSortOrder}
					/>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:col-span-3">
					{products?.map((item: any) => (
						<div className="flex justify-center" key={item.id}>
							<ItemCard
								className="col-span-1"
								{...item}
								item={item}
								params={params}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
