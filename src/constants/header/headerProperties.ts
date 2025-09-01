import header_liked from "/public/logo/header_liked.svg";
import header_cart from "/public/logo/header_cart.svg";
import type { HeaderData, HeaderIcons } from "@/types/header/headerData";

export const ICON_SIZE = 26;

export const headerData: HeaderData[] = [
	/* {
		id: "products",
		title: "Products",
		href: "/catalog",
		dropdown: true,
	}, */
	{
		id: "services",
		title: "Services",
		href: "/services",
		dropdown: true,
	},
	{
		id: "about",
		title: "About Us",
		href: "/about",
		dropdown: false,
	},
	{
		id: "blog",
		title: "Blog",
		href: "/blog",
		dropdown: false,
	},
	{
		id: "contact",
		title: "Contact",
		href: "/contact",
		dropdown: false,
	},
];

export const headerIcons: HeaderIcons[] = [
	/* {
		id: 1,
		icon: header_liked,
		alt: "header_liked_icon",
		href: "/liked",
	},
	{
		id: 2,
		icon: header_cart,
		alt: "header_cart_icon",
		href: "/cart",
	} */ /* ,
	{
		id: 3,
		icon: header_user,
		alt: "header_user_icon",
		href: "/",
	} */,
];

interface PopularService {
	name: string;
	link: string;
}

interface Type {
	name: string;
	link: string;
	popularServices?: PopularService[];
}

export interface Service {
	link: string;
	text: string;
	id?: string;
	types: Type[];
}

export const dropdowns:   { [key: string]: Service[] } = {
	services: [
		{
			id: "tile",
			link: "/tile-installation-seattle",
			text: "Tile Installation",
			types: [
				{ name: "Floor Tile", link: "/tile-installation/floor-tile" },
				{
					name: "Bathroom Tile",
					link: "/tile-installation/bathroom-tile",
				},
				{ name: "Shower Tile", link: "/tile-installation/shower-tile" },
				{
					name: "Backsplash Tile",
					link: "/tile-installation/backsplash-tile",
				},
				{
					name: "Ceramic Tile",
					link: "/tile-installation/ceramic-tile",
				},
				{
					name: "Porcelain Tile",
					link: "/tile-installation/porcelain-tile",
				},
				{ name: "Mosaic Tile", link: "/tile-installation/mosaic-tile" },
				{
					name: "Heated Tile Floor",
					link: "/tile-installation/heated-tile-floor",
				},
				{
					name: "Basement Floor Tile",
					link: "/tile-installation/basement-floor-tile",
				},
				{ name: "Subway Tile", link: "/service/subway-tile" },
				{
					name: "Grout Cleaning",
					link: "/tile-installation/grout-tile-cleaning",
				},
				{
					name: "Fireplace Tile",
					link: "/tile-installation/fireplace-tile",
				},
				{
					name: "Outdoor Tile",
					link: "/tile-installation/outdoor-tile",
				},
			],
		},
		{
			id: "countertops",
			link: "/countertop-installation-seattle",
			text: "Countertops",
			types: [
				{
					name: "Quartz Countertops",
					link: "/countertop-installation/quartz-countertops",
				},
				{
					name: "Granite Countertops",
					link: "/countertop-installation/granite-countertops",
				},
				{
					name: "Laminate Countertops",
					link: "/countertop-installation/laminate-countertops",
				},
				{
					name: "Soapstone Countertops",
					link: "/countertop-installation/soapstone-countertops",
				},
				{
					name: "Butcher Block",
					link: "/countertop-installation/butcher-block",
				},
				{
					name: "Concrete Countertop",
					link: "/countertop-installation/concrete-countertops",
				},
				{
					name: "Stainless Steel Countertops",
					link: "/countertop-installation/stainless-steel-countertops",
				},
				{
					name: "Porcelain Countertop",
					link: "/countertop-installation/porcelain-countertops",
				},
				{
					name: "Countertop Repair",
					link: "/countertop-installation/countertop-repair",
				},
			],
		},
		{
			id: "cabinets",
			link: "/cabinet-installation-seattle",
			text: "Cabinet Installation",
			types: [
				{
					name: "Cabinet Design",
					link: "/cabinet-installation/cabinet-design",
				},
				{
					name: "Bathroom Cabinets",
					link: "/cabinet-installation/bathroom-cabinets",
				},
				{
					name: "Kitchen Cabinets",
					link: "/cabinet-installation/kitchen-cabinets",
				},
				{
					name: "Cabinet Refinishing",
					link: "/cabinet-installation/cabinet-refinishing",
				},
				{
					name: "Built-in Cabinets",
					link: "/cabinet-installation/built-in-cabinets",
				},
				{
					name: "Cabinet Door Replacement",
					link: "/cabinet-installation/cabinet-door-replacement",
				},
				{
					name: "Cabinet Repair",
					link: "/cabinet-installation/cabinet-repair",
				},
				{
					name: "Cabinet Painting",
					link: "/painting/cabinet-painting",
				},
				{
					name: "Storage Cabinets",
					link: "/cabinet-installation/storage-cabinets",
				},
			],
		},
		/* {
			id: "electrical",
			link: "/electrical",
			text: "Electrical Installation",
			types: [
				{
					name: "Electrical Panel",
					link: "/electrical/electrical-panel",
				},
				{
					name: "Knob and Tube",
					link: "/electrical/knob-and-tube",
				},
				{
					name: "House Rewire",
					link: "/electrical/house-rewire",
				},
				{
					name: "Electrical Floor Heating",
					link: "/electrical/electrical-floor-heating",
				},
				{
					name: "Lighting Service",
					link: "/electrical/lighting-service",
				},
				{
					name: "Ceiling Fans Installation",
					link: "/electrical/ceiling-fans",
				},
				{
					name: "Under Cabinet Lighting",
					link: "/electrical/under-cabinet-lighting",
				},
				{
					name: "Landscape Lighting",
					link: "/electrical/landscape-lighting",
				},
			],
		}, */
		/* {
			id: "landscaping",
			link: "/landscaping",
			text: "Landscaping Services",
			types: [
				{
					name: "Landscape Design",
					link: "/landscaping/landscape-design",
				},
				{ name: "Grading", link: "/landscaping/grading" },
				{ name: "Planting", link: "/landscaping/planting" },
				{ name: "Tree Removal", link: "/landscaping/tree-removal" },
				{
					name: "Patio Installation",
					link: "/landscaping/patio-installation",
				},
				{
					name: "Sod Installation",
					link: "/landscaping/sod-installation",
				},
				{
					name: "Fence Installation",
					link: "/landscaping/fence-installation",
				},
				{
					name: "Retaining Walls",
					link: "/landscaping/retaining-walls",
				},
				{ name: "Fountain", link: "/landscaping/fountain" },
				{ name: "Fire Pits", link: "/landscaping/fire-pits" },
				{
					name: "Path Installation",
					link: "/landscaping/path-installation",
				},
				{
					name: "Irrigation Installation",
					link: "/landscaping/irrigation-installation",
				},
				{ name: "Power Washing", link: "/landscaping/power-washing" },
				{ name: "Weed Control", link: "/landscaping/weed-control" },
				{
					name: "Landscape Lighting",
					link: "/electrical/landscape-lighting",
				},
			],
		}, */
		{
			id: "flooring",
			link: "/seattle-flooring-installation",
			text: "Flooring",
			types: [
				{
					name: "Hardwood Flooring",
					link: "/flooring/hardwood-flooring",
				},
				{
					name: "Laminate Flooring",
					link: "/flooring/laminate-flooring",
				},
				{ name: "Carpet", link: "/flooring/carpet" },
				{ name: "LVT Flooring", link: "/flooring/lvt-flooring" },
			],
		},
		{
			id: "roofing",
			link: "/roofing-seattle",
			text: "Roofing",
			types: [
				{
					name: "Roof Repair",
					link: "/roofing/roof-repair",
				},
				{
					name: "Metal Roofing",
					link: "/roofing/metal-roofing",
				},
				{
					name: "Roof Replacement",
					link: "/roofing/roof-replacement",
				},
				{
					name: "Commercial Roofing",
					link: "/roofing/commercial-roofing",
				},
				{
					name: "Flat Roofing",
					link: "/roofing/flat-roofing",
				},
				{
					name: "Skylights",
					link: "/roofing/skylights",
				},
				{
					name: "Shingles Roof",
					link: "/roofing/shingles-roof",
				},
				{
					name: "Asphalt Roofing",
					link: "/roofing/asphalt-roofing",
				},
				{
					name: "Gutter Repair",
					link: "/roofing/gutter-repair",
				},
				{
					name: "Gutter Cleaning",
					link: "/roofing/gutter-cleaning",
				},
			],
		},
		/* {
			id: "doors",
			link: "/door-installation",
			text: "Doors",
			types: [
				{
					name: "Interior Doors",
					link: "/door-installation/interior-doors",
				},
				{
					name: "Exterior Doors",
					link: "/door-installation/exterior-doors",
				},
				{
					name: "Garage Doors",
					link: "/door-installation/garage-doors",
				},
				{
					name: "Sliding Doors",
					link: "/door-installation/sliding-doors",
				},
				{ name: "Door Repair", link: "/door-installation/door-repair" },
				{
					name: "Door Replacement",
					link: "/door-installation/door-replacement",
				},
				{ name: "Entry Door", link: "/door-installation/entry-door" },
			],
		}, */
		{
			id: "bathrooms",
			link: "/bathroom-remodel-seattle",
			text: "Bathroom Remodel",
			types: [
				{
					name: "Bathroom Tile",
					link: "/bathroom-remode/bathroom-tile",
				},
				{
					name: "Bathroom Cabinetry",
					link: "/cabinet-installation/bathroom-cabinetry",
				},
				{
					name: "Bathroom Plumbing",
					link: "/bathroom-remode/bathroom-plumbing",
				},
				{
					name: "Bathroom Fixture",
					link: "/bathroom-remode/bathroom-fixtures",
				},
				{
					name: "Bathroom Shower",
					link: "/bathroom-remode/bathroom-shower",
				},
			],
		},
		/* {
			id: "plumbing",
			link: "/plumbing-services",
			text: "Plumbing Services",
			types: [
				{
					name: "Kitchen Plumbing",
					link: "/plumbing-services/kitchen-plumbing",
				},
				{
					name: "Bathroom Plumbing",
					link: "/plumbing-services/bathroom-plumbing",
				},
				{
					name: "Jacuzzi Installation",
					link: "/plumbing-services/jacuzzi-installation",
				},
				{
					name: "Toilet Installation",
					link: "/plumbing-services/toilet-installation",
				},
				{
					name: "Home Repiping",
					link: "/service/home-repiping",
				},
				{
					name: "Drain Cleaning",
					link: "/service/drain-cleaning",
				},
				{
					name: "Gas Line Installation",
					link: "/service/gas-line-installation",
				},
				{
					name: "Sewer Line Repair",
					link: "/service/sewer-line-repair",
				},
			],
		}, */
		{
			id: "masonry",
			link: "/masonry-contractors-seattle",
			text: "Masonry Services",
			types: [
				{
					name: "Brick Laying and Repair",
					link: "/masonry-contractors/brick-laying-and-repair",
				},
				{
					name: "Stone Masonry",
					link: "/masonry-contractors/stone-masonry",
				},
				{
					name: "Seismic Retrofitting",
					link: "/masonry-contractors/seismic-retrofitting",
				},
				{
					name: "Chimney Masonry",
					link: "/masonry-contractors/chimney-masonry",
				},
				{
					name: "Concrete Block",
					link: "/masonry-contractors/concrete-block",
				},
				{
					name: "Masonry Restoration",
					link: "/masonry-contractors/masonry-restoration",
				},
				{
					name: "Stone Veneer",
					link: "/masonry-contractors/stone-veneer",
				},
				{
					name: "Commercial Masonry",
					link: "/masonry-contractors/commercial-masonry",
				},
			],
		},
		{
			id: "attic",
			link: "/attic-finishing-seattle",
			text: "Attic Finishing",
			types: [
				{
					name: "Attic Insulation",
					link: "/attic-finishing/attic-insulation",
				},
				{
					name: "Attic Drywall",
					link: "/attic-finishing/attic-drywall",
				},
				{
					name: "Attic Windows and Skylights",
					link: "/attic-finishing/attic-windows-and-skylights",
				},
				{
					name: "Attic Storage Solutions",
					link: "/attic-finishing/attic-storage-solutions",
				},
				{
					name: "Attic Ventilation",
					link: "/attic-finishing/attic-ventilation",
				},
				{
					name: "Attic Lighting",
					link: "/attic-finishing/attic-lighting",
				},
				{
					name: "Attic Heating and Cooling",
					link: "/attic-finishing/attic-heating-and-cooling",
				},
				{
					name: "Attic Bathroom Addition",
					link: "/attic-finishing/attic-bathroom-addition",
				},
			],
		},
		/* {
			id: "architecture",
			link: "/architectural-service",
			text: "Architecture",
			types: [
				{
					name: "Home Design",
					link: "/architectural-service/home-design",
				},
				{
					name: "Structural Engineering",
					link: "/architectural-service/structural-engineering",
				},
				{
					name: "Civil Engineering",
					link: "/architectural-service/civil-engineering",
				},
				{
					name: "Interior Design",
					link: "/architectural-service/interior-design",
				},
				{
					name: "Landscape Architect",
					link: "/architectural-service/landscape-design",
				},
				{
					name: "GeoTech Engineering",
					link: "/architectural-service/geotech-engineering",
				},
				{
					name: "3-D Rendering",
					link: "/architectural-service/3d-rendering",
				},
				{
					name: "Seismic Retrofitting",
					link: "/masonry-contractors/seismic-retrofitting",
				},
				{
					name: "Foundation Repair",
					link: "/architectural-service/foundation-repair",
				},
			],
		}, */
		{
			id: "basement",
			link: "/basement-finishing-seattle",
			text: "Basement Finishing",
			types: [
				{
					name: "Basement Flooring",
					link: "/flooring/basement-flooring",
				},
				{
					name: "Basement Remodel",
					link: "/basement-finishing/basement-remodel",
				},
				{
					name: "Basement Entertainment Center",
					link: "/basement-finishing/basement-entertainment-center",
				},
				{
					name: "Basement Bathroom",
					link: "/basement-finishing/basement-bathroom",
				},
				{
					name: "Basement Waterproofing",
					link: "/basement-finishing/basement-waterproofing",
				},
				{
					name: "Basement Insulation",
					link: "/basement-finishing/basement-insulation",
				},
				{
					name: "Basement Bar",
					link: "/basement-finishing/basement-bar",
				},
				{
					name: "Basement Windows",
					link: "/basement-finishing/basement-windows",
				},
			],
		},
		/* {
			id: "hvac",
			link: "/hvac-installation",
			text: "HVAC Installation",
			types: [
				{ name: "HVAC Repair", link: "/hvac-installation/hvac-repair" },
				{
					name: "HVAC Cleaning",
					link: "/hvac-installation/hvac-cleaning",
				},
				{
					name: "Split System Installation",
					link: "/hvac-installation/split-system-installation",
				},
			],
		}, */
		/* {
			id: "excavation",
			link: "/excavation-contractors",
			text: "Excavation Service",
			types: [
				{
					name: "Site Preparation",
					link: "/excavation-contractors/site-preparation",
				},
				{
					name: "Earthworks",
					link: "/excavation-contractors/earthworks",
				},
				{ name: "Grading", link: "/excavation-contractors/grading" },
				{
					name: "Land Clearing",
					link: "/excavation-contractors/land-clearing",
				},
				{
					name: "Dirt Removal",
					link: "/excavation-contractors/dirt-removal",
				},
			],
		}, */
		{
			id: "kitchen",
			link: "/kitchen-remodel-seattle",
			text: "Kitchen Remodel",
			types: [
				{
					name: "Kitchen Cabinets",
					link: "/cabinet-installation/kitchen-cabinets",
				},
				{
					name: "Kitchen Countertops",
					link: "/countertop-installation/kitchen-countertops",
				},
				{
					name: "Kitchen Flooring",
					link: "/flooring/kitchen-flooring",
				},
				{
					name: "Kitchen Appliances",
					link: "/service/kitchen-appliances",
				},
				{
					name: "Kitchen Lighting",
					link: "/kitchen-remodel/kitchen-lighting",
				},
				{
					name: "Kitchen Plumbing",
					link: "/kitchen-remodel/kitchen-plumbing",
				},
				{ name: "Patio Kitchen", link: "/landscaping/patio-kitchen" },
			],
		},
		/* {
			id: "windows",
			link: "/window-installation",
			text: "Window Services",
			types: [
				{
					name: "Window Replacement",
					link: "/window-installation/window-replacement",
				},
				{
					name: "Egress Window",
					link: "/window-installation/egress-window",
				},
				{
					name: "Energy-Efficient Windows",
					link: "/window-installation/energy-efficient-windows",
				},
				{
					name: "Skylight Installation",
					link: "/serwindow-installationvice/skylight-installation",
				},
				{
					name: "Commercial Windows",
					link: "/window-installation/commercial-windows",
				},
			],
		}, */
		{
			id: "decking",
			link: "/deck-building-seattle",
			text: "Deck Building",
			types: [
				{ name: "Trex Deck", link: "/deck-building/trex-decking" },
				{
					name: "Composite Deck",
					link: "/deck-building/composite-deck",
				},
				{ name: "Custom Deck", link: "/deck-building/custom-deck" },
				{
					name: "Pool Deck Construction",
					link: "/deck-building/pool-deck-construction",
				},
				{
					name: "Rooftop Deck Building",
					link: "/deck-building/rooftop-deck-building",
				},
				{ name: "Deck Repair", link: "/deck-building/deck-repair" },
				{
					name: "Deck Restoration",
					link: "/deck-building/deck-restoration",
				},
				{
					name: "Deck Railing Installation",
					link: "/deck-building/deck-railing",
				},
				{
					name: "Building Deck Stairs and Steps",
					link: "/deck-building/building-deck-stairs-and-steps",
				},
				{
					name: "Deck Replacement",
					link: "/deck-building/deck-replacement",
				},
				{
					name: "Timber Decking",
					link: "/deck-building/timber-decking",
				},
			],
		},
		{
			id: "siding",
			link: "/siding-installation-seattle",
			text: "Siding",
			types: [
				{
					name: "Siding Repair",
					link: "/siding-installation/siding-repair",
				},
				{
					name: "Vinyl Siding",
					link: "/siding-installation/vinyl-siding",
				},
				{
					name: "Hardie Siding",
					link: "/siding-installation/hardie-siding",
				},
				{
					name: "Cedar Siding",
					link: "/siding-installation/cedar-siding",
				},
				{
					name: "Aluminum Siding",
					link: "/siding-installation/aluminum-siding",
				},
				{
					name: "Stone Veneer",
					link: "/masonry-contractors/stone-veneer",
				},
				{
					name: "Composite Siding",
					link: "/siding-installation/composite-siding",
				},
			],
		},
		/* {
			id: "painting",
			link: "/painters",
			text: "Painting Services",
			types: [
				{
					name: "Interior Painting",
					link: "/painters/interior-painting",
				},
				{
					name: "Exterior Painting",
					link: "/painters/exterior-painting",
				},
				{
					name: "Cabinet Painting",
					link: "/painters/cabinet-painting",
				},
				{
					name: "Trim Painting",
					link: "/painters/trim-painting",
				},
				{
					name: "Room Painting",
					link: "/painters/room-painting",
				},
				{
					name: "Ceiling Painting",
					link: "/painters/ceiling-painting",
				},
				{
					name: "Deck Painting",
					link: "/painters/deck-painting",
				},
				{
					name: "Siding Painting",
					link: "/painters/siding-painting",
				},
				{
					name: "Fence Painting",
					link: "/painters/fence-painting",
				},
				{
					name: "Varnishing",
					link: "/painters/varnishing",
				},
				{
					name: "Stucco",
					link: "/painters/stucco",
				},
			],
		}, */
	],
	products: [
		{
			link: "/countertop-installation-near-me",
			text: "Countertop Installation",
			types: [
				{
					name: "Quartz Countertops",
					link: "/quartz_countertops",
				},
				{
					name: "Marble Countertops",
					link: "/marble_countertops",
				},
				{
					name: "Granite Countertops",
					link: "/granite_countertops",
				},
				{
					name: "Onyx Countertops",
					link: "/onyx_countertops",
				},
				{
					name: "Remnants",
					link: "/remnants",
				},
				{
					name: "Travertine Countertops",
					link: "/travertine_countertops",
				},
				{
					name: "Limestone Countertops",
					link: "/limestone_countertops",
				},
				{
					name: "Soapstone Countertops",
					link: "/soapstone_countertops",
				},
			],
		},
		{
			link: "/flooring",
			text: "Flooring",
			types: [
				{
					name: "Hardwood Flooring",
					link: "/hardwood_flooring",
					popularServices: [
						{
							name: "Hardwood Floor Installation",
							link: "/hardwood_floor_installation",
						},
						{
							name: "Hardwood Floor Refinishing",
							link: "/hardwood_floor_refinishing",
						},
						{
							name: "Custom Staining",
							link: "/hardwood_custom_staining",
						},
						{
							name: "Wood Floor Repair",
							link: "/hardwood_floor_repair",
						},
						{
							name: "Patterned Wood Flooring",
							link: "/hardwood_patterned_flooring",
						},
					],
				},
				{
					name: "Laminate Flooring",
					link: "/laminate_flooring",
					popularServices: [
						{
							name: "Laminate Floor Installation",
							link: "/laminate_floor_installation",
						},
						{
							name: "Laminate Floor Repair",
							link: "/laminate_floor_repair",
						},
						{
							name: "Moisture-Resistant Laminate",
							link: "/laminate_moisture_resistant",
						},
						{
							name: "Embossed Laminate Designs",
							link: "/laminate_embossed_designs",
						},
						{
							name: "Laminate Floor Removal",
							link: "/laminate_floor_removal",
						},
					],
				},
				{
					name: "Tile Flooring",
					link: "/tile_flooring",
					popularServices: [
						{
							name: "Tile Floor Installation",
							link: "/tile_floor_installation",
						},
						{
							name: "Tile Floor Repair",
							link: "/tile_floor_repair",
						},
						{
							name: "Grout Cleaning",
							link: "/tile_grout_cleaning",
						},
						{
							name: "Porcelain Tile Options",
							link: "/tile_porcelain_options",
						},
						{
							name: "Custom Tile Patterns",
							link: "/tile_custom_patterns",
						},
					],
				},
			],
		},
	],
};
