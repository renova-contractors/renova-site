import Link from "next/link";

const blogFilter = [
	{
		id: "all",
		name: "All Topics",
		link: "/blog",
	},
	{
		id: "countertops",
		name: "Countertops",
		link: "/blog/category/countertops",
	},
	{
		id: "tile",
		name: "Tiles & Flooring",
		link: "/blog/category/tile",
	},
	{
		id: "kitchen_cabinets",
		name: "Kitchen Cabinets",
		link: "/blog/category/cabinets",
	},
	{
		id: "outdoor",
		name: "Outdoors",
		link: "/blog/category/outdoor",
	},
	{
		id: "architecture",
		name: "Architecture",
		link: "/blog/category/architecture",
	},
	{
		id: "doors",
		name: "Doors",
		link: "/blog/category/doors",
	},
	{
		id: "windows",
		name: "Windows",
		link: "/blog/category/windows",
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
