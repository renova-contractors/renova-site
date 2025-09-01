import type { StaticImageData } from "next/image";
import { butttonManufacturersLogos } from "../manufacturersLogos/manufacturersLogos";

type ServiceItem = {
	text: string;
	url: string;
	logo?: StaticImageData;
};

type ServiceSection = {
	heading: string;
	description: string;
	items: ServiceItem[];
};

export type ServicesOptionsBottom = {
	[key: string]: ServiceSection[];
};

export const servicesOptionsBottom: ServicesOptionsBottom = {
	bathrooms: [
		{
			heading: "🔥 LAST CHANCE SAVINGS 🔥",
			description: "Don't miss out on saving big!",
			items: [
				{
					text: "QUARTZ COUNTERTOPS",
					url: "/catalog/countertops/material/quartz",
				},

				{
					text: "GRANITE COUNTERTOPS",
					url: "/catalog/countertops/material/granite",
				},
				{
					text: "PORCELAIN TILE",
					url: "/catalog/cabinets/material/wood",
				},
				{ text: "CERAMIC TILE", url: "/catalog/cabinets/material/mdf" },
			],
		},
	],
	kitchens: [
		{
			heading: "Final Call for Savings! 👀",
			description:
				"Don't let the opportunity for substantial savings slip away!",
			items: [
				{
					text: "INTERIOR DOORS",
					url: "/catalog/doors/use/interior",
				},
				{
					text: "SOLID HARDWOOD",
					url: "/catalog/hardwood/material/solid",
				},
				{
					text: "DALTILE",
					url: "/catalog/tile/manufacturer/daltile",
					logo: butttonManufacturersLogos.daltile,
				},
			],
		},
	],
};
