import { Button } from "@/components/Button/Button";

export const CartSummary: React.FC = (): any => {
	return (
		<section className="w-full h-full lg:w-[360px] pb-[120px] lg:pb-[200px]">
			<p className="custom-heading max-lg:text-[50px] pb-[40px] lg:pb-20">
				Summary
			</p>

			<div className="lg:pb-20 pb-[40px]">
				<p className="title-white">PRODUCTS</p>
				<div className=" flex justify-between items-center">
					<p className="white-paragraph">Products Price</p>
					<p className="text-white text-title">$150</p>
				</div>
				<div className=" flex justify-between items-center">
					<p className="white-paragraph">Products Price</p>
					<p className="text-white text-title">$150</p>
				</div>
			</div>
			<div className="lg:pb-20 pb-[40px]">
				<p className="title-white">PRODUCTS</p>
				<div className=" flex justify-between items-center">
					<p className="white-paragraph">Products Price</p>
					<p className="text-white text-title">$150</p>
				</div>
				<div className=" flex justify-between items-center">
					<p className="white-paragraph">Products Price</p>
					<p className="text-white text-title">$150</p>
				</div>
				<p className="gray-paragraph py-[40px] lg:py-20">
					Calculating the cost of this service requires consultation.
					Installation is paid on location
				</p>
			</div>
			<div className=" flex justify-between items-center pb-[40px] lg:pb-20">
				<p className="text-white text-title">TOTAL PRICE</p>
				<p className="text-white text-title">$150</p>
			</div>
			<div className="max-lg:text-center">
				<Button variant="secondary">Buy</Button>
			</div>
		</section>
	);
};
