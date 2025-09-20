import Link from "next/link";

const blogFilter = [
	{
		id: "all",
		name: "All Topics",
		link: "/blog",
	},
	{
		id: "bathroom",
		name: "Bathroom",
		link: "/blog/category/bathroom",
	},
	{
		id: "kitchen",
		name: "Kitchen",
		link: "/blog/category/kitchen",
	},
	{
		id: "basement",
		name: "Basement",
		link: "/blog/category/basement",
	},
	{
		id: "attic",
		name: "Attic",
		link: "/blog/category/attic",
	},
	
	{
		id: "deck",
		name: "Deck",
		link: "/blog/category/deck",
	},

	{
		id: "tile",
		name: "Tiles & Flooring",
		link: "/blog/category/tile",
	},
	{
		id: "cabinets",
		name: "Cabinets",
		link: "/blog/category/cabinets",
	},
	
	{
		id: "architecture",
		name: "Architecture",
		link: "/blog/category/architecture",
	},{
		id: "countertops",
		name: "Countertops",
		link: "/blog/category/countertops",
	},
	
	
];

export const BlogFilter: React.FC = () => (
	<section className="first-component relative max-w-[1440px] mx-auto w-full px-[10px] z-10  mb-10">
		<div className="flex justify-between flex-col md:flex-row inside-mb">
			<ul className="w-full h-max max-w-[1000px] overflow-x-auto overflow-y-hidden no-scrollbar slider-gap flex justify-between">
				{blogFilter.map((item) => (
					<li key={item.id}>
						<Link
							href={item.link}
							className="small-button h-max"
							style={{ whiteSpace: "nowrap" }}
						>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
			<input className="max-md:mx-[10px] max-w-[173px] w-full" />
		</div>
	</section>
);
