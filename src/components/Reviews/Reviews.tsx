import { Slider } from "../Slider/Slider";

const topProducts = [
	{ title: "Countertops", id: "countertops" },
	{
		title: "Windows",
		id: "windows",
	},
	{
		title: "Tile",
		id: "tile",
	},
	{
		title: "Flooring",
		id: "flooring",
	},
	{
		title: "HVAC",
		id: "hvac",
	},
	{
		title: "Kitchen Cabinets",
		id: "kitchen_cabinets",
	},
	{
		title: "Vanities",
		id: "vanitites",
	},
];

export const Reviews: React.FC = () => {
	return (
		<section className="w-full max-w-[1440px] px-[10px] mx-auto z-10 relative text-main-gray mb-[100px] max-md:mb-[50px]">
			<div className="flex flex-col items-center md:flex-row">
				<div className="md:text-center md:pr-8 w-full md:w-[35%]">
					<h3 className="custom-heading mb-10 first-letter:text-main-yellow">
						Reviews
					</h3>
					<ul className="flex overflow-x-auto overflow-y-hidden no-scrollbar overflow-y-hidden md:flex-col items-center">
						{topProducts.map((topProduct) => (
							<li
								className="flex w-[200px] items-center justify-center mb-0 md:mb-[10px] p-[8px]! max-md:p-[9px] text-secondary small-button"
								key={topProduct.title}
								style={{ whiteSpace: "nowrap" }}
							>
								{topProduct.title}
							</li>
						))}
					</ul>
				</div>
				<div className="w-full md:w-[62%] max-md:mt-[40px]">
					<Slider id="reviews" />
				</div>
			</div>
		</section>
	);
};
