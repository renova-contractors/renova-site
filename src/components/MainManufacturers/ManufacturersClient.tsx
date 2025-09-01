// @ts-nocheck
/*eslint-disable*/

"use client";

import { manufacturersLogos } from "@/constants/manufacturersLogos/manufacturersLogos";
import { topProducts } from "@/constants/topProducts/topProducts";
import Image from "next/image";
import { useState } from "react";

export const ManufacturersClient = () => {
	const [clickedService, setClickedService] = useState("tile");

	return (
		<div className="flex flex-col md:flex-row inside-mb">
			<div className="w-full md:w-[15%]">
				<ul className="flex mb-5 sm:mb-10 max-md:overflow-x-auto overflow-y-hidden no-scrollbar max-md:overflow-y-hidden md:flex-col items-center">
					{topProducts.map((topProduct) => (
						<li
							className={`small-button ${
								clickedService === topProduct.id
									? "small-button-active"
									: ""
							}`}
							key={topProduct.title}
							style={{ whiteSpace: "nowrap" }}
							onClick={() => setClickedService(topProduct.id)}
						>
							<div className="flex items-center gap-5">
								{topProduct.title}
							</div>
						</li>
					))}
				</ul>
			</div>

			<div className=" w-full overflow-x-auto overflow-y-hidden md:w-[80%] grid grid-cols-3 gap-2 lg:grid-cols-4 xl:grid-cols-5 mx-auto gap-x-4 items-center ">
				{manufacturersLogos[
					clickedService as keyof typeof manufacturersLogos
				].map((logo, index) => (
					<Image
						key={index}
						src={logo.image}
						height={logo.height}
						width={logo.width}
						alt=""
						className="mx-auto"
					/>
				))}
			</div>
		</div>
	);
};
