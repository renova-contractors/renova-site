import golden_home from "/public/contentImages/manufacturersLogos/golden_home.svg";
import pcc from "/public/contentImages/manufacturersLogos/pcc.svg";
import ann_sacks from "/public/contentImages/manufacturersLogos/ann_sacks.jpeg";
import arto from "/public/contentImages/manufacturersLogos/arto.png";
import bedrosians from "/public/contentImages/manufacturersLogos/bedrosians.webp";
import crosville from "/public/contentImages/manufacturersLogos/crosville.jpeg";
import daltile from "/public/contentImages/manufacturersLogos/daltile.jpeg";
import emser from "/public/contentImages/manufacturersLogos/emser.png";
import florida from "/public/contentImages/manufacturersLogos/florida_tile.jpeg";
import marrazi from "/public/contentImages/manufacturersLogos/marazzi.webp";
import msi from "/public/contentImages/manufacturersLogos/msi.png";
import architectual_surfaces from "/public/contentImages/manufacturersLogos/architectual_surfaces.svg";
import cosmos from "/public/contentImages/manufacturersLogos/cosmos.jpeg";
import bellmont from "/public/contentImages/manufacturersLogos/bellmont.webp";
import huntwood from "/public/contentImages/manufacturersLogos/huntwood.png";
import kraftmaid from "/public/contentImages/manufacturersLogos/kraftmaid.webp";
/* import leicht from "/public/contentImages/manufacturersLogos/leicht.png";
 */ import cambria from "/public/contentImages/manufacturersLogos/cambria.png";
import pioneer_cabinets from "/public/contentImages/manufacturersLogos/pioneer_cabinets.jpeg";
import milgard from "/public/contentImages/manufacturersLogos/milgard.svg";
import simonton from "/public/contentImages/manufacturersLogos/simonton.webp";

import marvin from "/public/contentImages/manufacturersLogos/marvin.webp";
import simpson from "/public/contentImages/manufacturersLogos/simpson-door-company.png";
import therma_tru from "/public/contentImages/manufacturersLogos/therma-tru.jpeg";

import coreluxe from "/public/contentImages/manufacturersLogos/coreluxe.png";
import bellawood from "/public/contentImages/manufacturersLogos/bellawood_hardwood.jpeg";
import rl_colston from "/public/contentImages/manufacturersLogos/rl_colston.jpeg";
import shaw from "/public/contentImages/manufacturersLogos/shaw.jpeg";
import mohawk from "/public/contentImages/manufacturersLogos/mohawk.png";

import fiberon from "/public/contentImages/manufacturersLogos/fiberon.webp";
import type { StaticImageData } from "next/image";

interface ManufacturerLogo {
	id: number;
	height: number;
	width: number;
	image: StaticImageData;
	url: string;
	alt: string;
}

interface ManufacturersLogos {
	tile: ManufacturerLogo[];
	countertops: ManufacturerLogo[];
	cabinets: ManufacturerLogo[];
	windows: ManufacturerLogo[];
	doors: ManufacturerLogo[];
	flooring: ManufacturerLogo[];
	decking: ManufacturerLogo[];
}

export const manufacturersLogos: ManufacturersLogos = {
	tile: [
		{
			id: 1,
			height: 88,
			width: 166,
			image: ann_sacks,
			url: "",
			alt: "Ann Sacks",
		},
		{ id: 2, height: 88, width: 166, image: arto, url: "", alt: "Arto" },
		{
			id: 3,
			height: 88,
			width: 166,
			image: bedrosians,
			url: "",
			alt: "Bedrosians Tile",
		},
		{
			id: 4,
			height: 88,
			width: 166,
			image: crosville,
			url: "",
			alt: "Crosville",
		},
		{
			id: 5,
			height: 88,
			width: 166,
			image: daltile,
			url: "",
			alt: "Daltile",
		},
		{ id: 6, height: 88, width: 166, image: emser, url: "", alt: "Emser" },
		{
			id: 7,
			height: 88,
			width: 166,
			image: florida,
			url: "",
			alt: "Florida Tile",
		},
		{
			id: 8,
			height: 88,
			width: 166,
			image: marrazi,
			url: "",
			alt: "Marrazi",
		},
		{ id: 9, height: 88, width: 166, image: msi, url: "", alt: "MSI Tile" },
	],
	countertops: [
		{
			id: 1,
			height: 88,
			width: 166,
			image: bedrosians,
			url: "",
			alt: "Bedrosians",
		},
		{
			id: 2,
			height: 88,
			width: 166,
			image: daltile,
			url: "",
			alt: "Daltile",
		},
		{
			id: 3,
			height: 88,
			width: 166,
			image: msi,
			url: "",
			alt: "MSI Countertops",
		},
		{
			id: 4,
			height: 88,
			width: 166,
			image: architectual_surfaces,
			url: "",
			alt: "Architectual Surfaces Countertops",
		},
		{
			id: 5,
			height: 88,
			width: 166,
			image: cambria,
			url: "",
			alt: "Cambria Countertops",
		},
		{
			id: 6,
			height: 88,
			width: 166,
			image: cosmos,
			url: "",
			alt: "Cosmos Countertops",
		},
	],
	cabinets: [
		{
			id: 1,
			height: 88,
			width: 166,
			image: pcc,
			url: "",
			alt: "Procraft Cabinets",
		},
		{
			id: 2,
			height: 88,
			width: 166,
			image: bellmont,
			url: "",
			alt: "Bellmont Cabinets",
		},
		{
			id: 3,
			height: 88,
			width: 166,
			image: golden_home,
			url: "",
			alt: "Golden Home Cabinets",
		},
		{
			id: 4,
			height: 88,
			width: 166,
			image: huntwood,
			url: "",
			alt: "Huntwood",
		},
		{
			id: 5,
			height: 88,
			width: 166,
			image: kraftmaid,
			url: "",
			alt: "Kraftmaid",
		},
		/* {
			id: 6,
			height: 88,
			width: 166,
			image: leicht,
			url: "",
			alt: "Leicht",
		}, */
		{
			id: 7,
			height: 88,
			width: 166,
			image: pioneer_cabinets,
			url: "",
			alt: "Pioneer Cabinets",
		},
	],
	windows: [
		{
			id: 1,
			height: 88,
			width: 166,
			image: milgard,
			url: "",
			alt: "Milgard",
		},
		{
			id: 2,
			height: 88,
			width: 166,
			image: simonton,
			url: "",
			alt: "Simonton",
		},
		{
			id: 3,
			height: 88,
			width: 166,
			image: marvin,
			url: "",
			alt: "Marvin",
		},
	],
	doors: [
		{
			id: 1,
			height: 88,
			width: 166,
			image: simpson,
			url: "",
			alt: "Simpson",
		},
		{
			id: 2,
			height: 88,
			width: 166,
			image: simonton,
			url: "",
			alt: "Simonton",
		},
		{
			id: 3,
			height: 88,
			width: 166,
			image: marvin,
			url: "",
			alt: "Marvin",
		},
		{
			id: 4,
			height: 88,
			width: 166,
			image: therma_tru,
			url: "",
			alt: "Therma Tru",
		},
	],
	flooring: [
		{
			id: 1,
			height: 88,
			width: 166,
			image: coreluxe,
			url: "",
			alt: "Coreluxe",
		},
		{
			id: 2,
			height: 88,
			width: 166,
			image: bellawood,
			url: "",
			alt: "Bellawood",
		},
		{
			id: 3,
			height: 88,
			width: 166,
			image: rl_colston,
			url: "",
			alt: "RL Colston",
		},
		{ id: 4, height: 88, width: 166, image: shaw, url: "", alt: "Shaw" },
		{
			id: 5,
			height: 88,
			width: 166,
			image: mohawk,
			url: "",
			alt: "Mohawk",
		},
	],
	decking: [
		{
			id: 1,
			height: 88,
			width: 166,
			image: fiberon,
			url: "",
			alt: "Coreluxe",
		},
	],
};

export const butttonManufacturersLogos = {
	golden_home,
	pcc,
	ann_sacks,
	arto,
	bedrosians,
	crosville,
	daltile,
	emser,
	florida,
	fiberon,
	marrazi,
	msi,
	architectual_surfaces,
	cosmos,
	bellmont,
	huntwood,
	kraftmaid,
	/* leicht, */
	cambria,
	pioneer_cabinets,
	milgard,
	simonton,
	marvin,
	simpson,
	therma_tru,
	coreluxe,
	bellawood,
	rl_colston,
	shaw,
	mohawk,
};
