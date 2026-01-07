export const mockProducts = [
	{
		id: 1,
		meta_title: "Premium Quartz Countertop - Calacatta White",
		price: 125.99,
		main_image: "/contentImages/countertops/countertop1.jpg",
		url: "premium-quartz-countertop-calacatta-white",
		variants: [],
		category: "countertops",
	},
	{
		id: 2,
		meta_title: "Ceramic Tile - Modern Grey 12x24",
		price: 3.99,
		main_image: "/contentImages/countertops/countertop2.jpg",
		url: "ceramic-tile-modern-grey-12x24",
		variants: [],
		category: "tiles",
	},
	{
		id: 3,
		meta_title: "Granite Countertop - Black Galaxy",
		price: 89.50,
		main_image: "/contentImages/countertops/countertop3.jpg",
		url: "granite-countertop-black-galaxy",
		variants: [],
		category: "countertops",
	},
	{
		id: 4,
		meta_title: "Porcelain Tile - Marble Look 24x48",
		price: 5.99,
		main_image: "/contentImages/countertops/countertop4.jpg",
		url: "porcelain-tile-marble-look-24x48",
		variants: [],
		category: "tiles",
	},
	{
		id: 5,
		meta_title: "Marble Countertop - Carrara Classic",
		price: 199.99,
		main_image: "/contentImages/countertops/countertop5.jpg",
		url: "marble-countertop-carrara-classic",
		variants: [],
		category: "countertops",
	},
	{
		id: 6,
		meta_title: "Stainless Steel Sink - Single Bowl",
		price: 249.99,
		main_image: "/contentImages/countertops/countertop6.jpg",
		url: "stainless-steel-sink-single-bowl",
		variants: [],
		category: "sinks",
	},
	{
		id: 7,
		meta_title: "Hardwood Flooring - Oak Natural",
		price: 8.99,
		main_image: "/contentImages/countertops/countertop7.jpg",
		url: "hardwood-flooring-oak-natural",
		variants: [],
		category: "hardwoods",
	},
	{
		id: 8,
		meta_title: "Quartz Countertop - Statuario White",
		price: 145.00,
		main_image: "/contentImages/countertops/countertop8.jpg",
		url: "quartz-countertop-statuario-white",
		variants: [],
		category: "countertops",
	},
	{
		id: 9,
		meta_title: "Ceramic Tile - Subway White 3x6",
		price: 2.49,
		main_image: "/contentImages/countertops/countertop9.jpg",
		url: "ceramic-tile-subway-white-3x6",
		variants: [],
		category: "tiles",
	},
	{
		id: 10,
		meta_title: "Granite Countertop - Ubatuba Green",
		price: 95.75,
		main_image: "/contentImages/countertops/countertop10.jpg",
		url: "granite-countertop-ubatuba-green",
		variants: [],
		category: "countertops",
	},
];

export const getMockProducts = (category?: string) => {
	if (category) {
		return mockProducts.filter((product) => product.category === category);
	}
	return mockProducts;
};

