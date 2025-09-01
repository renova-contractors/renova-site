import React from "react";
import { CardProductCard } from "./CartProductCard";
import { CartSummary } from "./CartSummary";

export const CartProductList: React.FC = (): any => {
	return (
		<section className="w-full max-w-[1440px] mx-auto flex flex-col px-[10px] lg:flex-row lg:items-start lg:justify-between">
			<CardProductCard />
			<CartSummary />
		</section>
	);
};
