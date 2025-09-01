interface CatalogCategory {
	title: string;
	id: string;
	url: string;
	text: string;
}

export const catalogCategories: CatalogCategory[] = [
	{
		title: "all products",
		id: "all_products",
		url: "",
		text: "Browse All Products",
	},
	{
		title: "countertops",
		id: "countertops",
		url: "countertops",
		text: "Browse Countertops",
	},
	{
		title: "laminates",
		id: "laminates",
		url: "laminates",
		text: "Browse Laminates",
	},
	{
		title: "vanities",
		id: "vanities",
		url: "vanities",
		text: "Browse All Vanities",
	},
	{ title: "doors", id: "doors", url: "doors", text: "Browse Doors" },
	{ title: "tiles", id: "tiles", url: "tiles", text: "Browse Tiles" },

	{ title: "sinks", id: "sinks", url: "sinks", text: "Browse Sinks" },
	{ title: "faucets", id: "faucets", url: "faucets", text: "Browse Sinks" },

	// {
	// 	title: "kitchen cabinets",
	// 	id: "cabinets",
	// 	url: "cabinets",
	// 	text: "Browse Kitchen Cabinets",
	// },
	{
		title: "hardwoods",
		id: "hardwoods",
		url: "hardwoods",
		text: "Browse Hardwood",
	},
	{
		title: "carpets",
		id: "carpets",
		url: "carpets",
		text: "Browse Carpet",
	},
	{
		title: "vinyls",
		id: "vinyls",
		url: "vinyls",
		text: "Browse Vinyl",
	},
];
