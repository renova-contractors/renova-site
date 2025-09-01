import React from "react";
// Define the type for specifications and product
interface SpecificationTable {
	heading: string;
	table: { [key: string]: string };
}

interface Product {
	details: string;
	specifications?: SpecificationTable[];
}

// Define the props interface
interface CharacteristicsProps {
	product: Product;
}
export const Characteristics: React.FC<CharacteristicsProps> = ({
	product,
}) => {
	return (
		<div className="container mx-auto p-4">
			{/* <h1 className="text-2xl font-bold mb-4">Product Details</h1> */}
			<div className="flex flex-wrap">
				<div className="w-full sm:w-2/3 p-2">
					<div className="bg-gray-200 p-4 rounded-lg">
						{/* Main div content */}
						<h2 className="text-2xl font-semibold mb-2">Details</h2>
						<div
							dangerouslySetInnerHTML={{
								__html: product?.details,
							}}
						></div>
					</div>
				</div>
				<div className="w-full sm:w-1/3 p-2">
					<div className="bg-gray-200 p-4 rounded-lg">
						<h2 className="text-2xl font-semibold mb-2">
							Specifications
						</h2>
						{product?.specifications?.map((table) => {
							return (
								<div>
									<p className="tb-heading">
										{table?.heading}
									</p>
									<tbody>
										{Object.entries(table?.table).map(
											([key, value]) => (
												<tr key={key}>
													<td className="border px-4 py-2">
														{key}
													</td>
													<td className="border px-4 py-2">
														{value}
													</td>
												</tr>
											),
										)}
									</tbody>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
