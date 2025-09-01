// @ts-nocheck
/*eslint-disable*/

import { butttonManufacturersLogos } from "@/constants/manufacturersLogos/manufacturersLogos";
import type { StaticImageData } from "next/image";

interface Button {
	text: string;
	url: string;
	logo?: StaticImageData; // Optional logo property
}

interface MaterialButton extends Button {
	// No additional properties needed for material buttons
}

interface StyleButton extends Button {
	// No additional properties needed for style buttons
}

interface BrandButton extends Button {
	logo: StaticImageData; // Required logo property for brand buttons
}

interface Category {
	material: (MaterialButton | undefined)[];
	styles: (StyleButton | undefined)[];
	brands: (BrandButton | undefined)[];
}

export const bottomButtons: { [key: string]: Category } = {
	countertops: {
		material: [
			{
				text: "QUARTZ COUNTERTOPS",
				url: "/catalog/countertops/material/quartz",
			},
			{
				text: "MARBLE COUNTERTOPS",
				url: "/catalog/tile/material/marble",
			},
			{
				text: "GRANITE COUNTERTOPS",
				url: "/catalog/countertops/material/granite",
			},
			{
				text: "NATURAL STONE",
				url: "/catalog/countertops/type/natural-stone",
			},
			{
				text: "PORCELAIN COUNTERTOPS",
				url: "/catalog/countertops/material/porcelain",
			},
			{
				text: "QUARTZITE COUNTERTOPS",
				url: "/catalog/countertops/material/quartzite",
			},
		],
		styles: [
			{
				text: "BLACK COUNTERTOPS",
				url: "/catalog/countertops/color/black",
			},
			,
			{
				text: "CARARRA QUARTZ",
				url: "/catalog/countertops/style/cararra-quartz",
			},
			{
				text: "2CM COUNTETOPS",
				url: "/catalog/countertops/thickness/2centimetres",
			},
			{
				text: "3CM COUNTETOPS",
				url: "/catalog/countertops/thickness/3centimetres",
			},
			{
				text: "HONED/MATTE FINISH",
				url: "/catalog/ccountertops/finish/matte",
			},
		],
		brands: [
			{
				text: "MSI QUARTZ COUNTETOPS",
				url: "/catalog/countertops/manufacturer/msi",
				logo: butttonManufacturersLogos.msi,
			},
			{
				text: "CAMBRIA QUARTZ COUNTETOPS",
				url: "/catalog/countertops/manufacturer/cambria",
				logo: butttonManufacturersLogos.cambria,
			},
			{
				text: "COSMOS QUARTZ COUNTETOPS",
				url: "/catalog/countertops/manufacturer/cosmos",
				logo: butttonManufacturersLogos.cosmos,
			},
			{
				text: "DALTILE QUARTZ COUNTETOPS",
				url: "/catalog/countertops/manufacturer/daltile",
				logo: butttonManufacturersLogos.daltile,
			},
			{
				text: "ARCHITECTUAL SURFACES COUNTETOPS",
				url: "/catalog/countertops/manufacturer/architectual-surfaces",
				logo: butttonManufacturersLogos.architectual_surfaces,
			},
		],
	},
	cabinets: {
		material: [
			{
				text: "SOLID WOOD CABINETS",
				url: "/catalog/cabinets/material/wood",
			},
			{ text: "MDF CABINETS", url: "/catalog/cabinets/material/mdf" },
			{
				text: "GLASS PANEL CABINETS",
				url: "/catalog/cabinets/material/glass",
			},
		],
		styles: [
			{
				text: "SHAKER CABINETS",
				url: "/catalog/cabinets/style/shaker",
			},
			,
			{
				text: "RAISED PANEL",
				url: "/catalog/cabinets/style/raised-panel",
			},
			{
				text: "FLAT PANEL",
				url: "/catalog/cabinets/style/flat-panel",
			},
			{
				text: "EUROPEAN STYLE CABINETS",
				url: "/catalog/cabinets/style/european",
			},
		],
		brands: [
			{
				text: "BELLMONT CABINETS",
				url: "/catalog/cabinets/manufacturer/bellmont",
				logo: butttonManufacturersLogos.bellmont,
			},
			{
				text: "GOLDEN HOME CABINETRY",
				url: "/catalog/cabinets/manufacturer/golden-home",
				logo: butttonManufacturersLogos.golden_home,
			},
			{
				text: "HUNTWOOD CABINETS",
				url: "/catalog/cabinets/manufacturer/huntwood",
				logo: butttonManufacturersLogos.huntwood,
			},
			{
				text: "PIONEER CABINETRY",
				url: "/catalog/cabinets/manufacturer/pioneer",
				logo: butttonManufacturersLogos.pioneer_cabinets,
			},
		],
	},
	tile: {
		material: [
			{
				text: "PORCELAIN TILE",
				url: "/catalog/cabinets/material/wood",
			},
			{ text: "CERAMIC TILE", url: "/catalog/cabinets/material/mdf" },
			{
				text: "GLASS TILE",
				url: "/catalog/cabinets/material/glass",
			},
			{
				text: "NTURAL STONE TILE",
				url: "/catalog/tile/style/natural-stone",
			},
		],
		styles: [
			{
				text: "SUBWAY TILE",
				url: "/catalog/tile/style/subway",
			},
			{
				text: "MOSAIC TILE",
				url: "/catalog/tile/style/mosaic",
			},
			,
			{
				text: "WOOD LOOK TILE",
				url: "/catalog/cabinets/style/wood-look",
			},

			{
				text: "GLOSSY TILE",
				url: "/catalog/cabinets/finish/glossy",
			},
			{
				text: "MATTE TILE",
				url: "/catalog/cabinets/finish/matte",
			},
		],

		format: [
			{
				text: "SQUARE TILE",
				url: "/catalog/tile/format/square",
			},
			,
			{
				text: "RAISED PANEL",
				url: "/catalog/tile/format/rectangular",
			},
			{
				text: "LARGE FORMAT TILE",
				url: "/catalog/tile/style/large-format",
			},
		],
		brands: [
			{
				text: "BEDROSIANS TILE",
				url: "/catalog/tile/manufacturer/bedrosians",
				logo: butttonManufacturersLogos.bedrosians,
			},
			{
				text: "DALTILE",
				url: "/catalog/tile/manufacturer/daltile",
				logo: butttonManufacturersLogos.daltile,
			},
			{
				text: "EMSER TILE",
				url: "/catalog/tile/manufacturer/emser",
				logo: butttonManufacturersLogos.emser,
			},
			{
				text: "FLORIDA TILE",
				url: "/catalog/tile/manufacturer/florida",
				logo: butttonManufacturersLogos.florida,
			},
			{
				text: "MARAZZI TILE ",
				url: "/catalog/tile/manufacturer/marazzi",
				logo: butttonManufacturersLogos.marrazi,
			},
			{
				text: "MSI TILE ",
				url: "/catalog/tile/manufacturer/msi",
				logo: butttonManufacturersLogos.msi,
			},
		],
	},
	windows: {
		material: [
			{
				text: "VINYL WINDOWS",
				url: "/catalog/windows/material/vinyl",
			},
			{
				text: "FIBERGLASS WINDOWS",
				url: "/catalog/windows/material/fiberglass",
			},
			{
				text: "ALUMINIUM WINDOWS",
				url: "/catalog/windows/material/aluminum",
			},
			{
				text: "WOOD WINDOWS",
				url: "/catalog/windows/material/wood",
			},
			{
				text: "HORISONTAL SLIDER",
				url: "/catalog/windows/style/horizontal-slider",
			},
			{
				text: "SINGLE HUNG",
				url: "/catalog/windows/style/single-hung",
			},
			,
			{
				text: "DOUBLE HUNG",
				url: "/catalog/windows/style/double-hung",
			},

			{
				text: "PICTURE WINDOWS",
				url: "/catalog/windows/style/picture",
			},
			{
				text: "CASEMENT",
				url: "/catalog/windows/style/casement",
			},
		],
		styles: [
			{
				text: "HORISONTAL SLIDER",
				url: "/catalog/windows/style/horizontal-slider",
			},
			{
				text: "SINGLE HUNG",
				url: "/catalog/windows/style/single-hung",
			},
			,
			{
				text: "DOUBLE HUNG",
				url: "/catalog/windows/style/double-hung",
			},

			{
				text: "PICTURE WINDOWS",
				url: "/catalog/windows/style/picture",
			},
			{
				text: "CASEMENT",
				url: "/catalog/windows/style/casement",
			},
		],

		brands: [
			{
				text: "MILGARD",
				url: "/catalog/window/manufacturer/milgard",
				logo: butttonManufacturersLogos.milgard,
			},
			{
				text: "MARVIN",
				url: "/catalog/tile/manufacturer/daltile",
				logo: butttonManufacturersLogos.marvin,
			},
			{
				text: "SIMONTON",
				url: "/catalog/window/manufacturer/simonton",
				logo: butttonManufacturersLogos.simonton,
			},
		],
	},
	doors: {
		material: [
			{
				text: "FIBERGLASS DOORS ",
				url: "/catalog/doors/material/fiberglass",
			},
			{
				text: "STEEL DOORS ",
				url: "/catalog/doors/material/steel",
			},
			{
				text: "WOODEN DOORS ",
				url: "/catalog/doors/material/wood",
			},
		],
		styles: [
			{
				text: "EXTERIOR DOORS",
				url: "/catalog/doors/use/exterior",
			},
			{
				text: "INTERIOR DOORS",
				url: "/catalog/doors/use/interior",
			},
			,
			{
				text: "PATIO SLIDING DOORS",
				url: "/catalog/doors/use/patio-sliding",
			},

			{
				text: "DOUBLE FRONT DOORS",
				url: "/catalog/doors/use/double-front",
			},
			{
				text: "ENTRY DOORS",
				url: "/catalog/windows/use/entry",
			},
			{
				text: "BATHROOM DOORS",
				url: "/catalog/doors/use/bathroom",
			},
			{
				text: "BEDROOM DOORS",
				url: "/catalog/use/bedroom",
			},
		],

		brands: [
			{
				text: "THERMA-TRU",
				url: "/catalog/doors/manufacturer/therma-tru",
				logo: butttonManufacturersLogos.therma_tru,
			},
			{
				text: "SIMPSON",
				url: "/catalog/doors/manufacturer/simpson",
				logo: butttonManufacturersLogos.simpson,
			},
			{
				text: "MILGARD",
				url: "/catalog/doors/manufacturer/therma-tru",
				logo: butttonManufacturersLogos.milgard,
			},
			{
				text: "SIMONTON",
				url: "/catalog/doors/manufacturer/simonton",
				logo: butttonManufacturersLogos.simonton,
			},
			{
				text: "SIMONTON",
				url: "/catalog/doors/manufacturer/marvin",
				logo: butttonManufacturersLogos.marvin,
			},
		],
	},
	hardwood: {
		material: [
			{
				text: "ENGINEERED HARDWOOD",
				url: "/catalog/hardwood/material/engineered",
			},
			{
				text: "SOLID HARDWOOD",
				url: "/catalog/hardwood/material/solid",
			},
			{
				text: "BAMBOO HARDWOOD",
				url: "/catalog/hardwood/material/bamboo",
			},
			{
				text: "UNFINISHED HARDWOOD",
				url: "/catalog/hardwood/material/unfinished",
			},
		],
		styles: [
			{
				text: "BROWN HARDWOOD",
				url: "/catalog/hardwood/color/brown",
			},
			{
				text: "BLONDE",
				url: "/catalog/hardwood/color/blonde",
			},
			,
			{
				text: "WHITE",
				url: "/catalog/hardwood/color/white",
			},

			{
				text: "GRAY",
				url: "/catalog/hardwood/color/gray",
			},
			{
				text: "RED",
				url: "/catalog/hardwood/color/red",
			},
		],

		brands: [
			{
				text: "BELLAWOOD",
				url: "/catalog/hardwood/manufacturer/bellawood",
				logo: butttonManufacturersLogos.bellawood,
			},
			{
				text: "R.L. COLSTON",
				url: "/catalog/hardwood/manufacturer/rl-colston",
				logo: butttonManufacturersLogos.rl_colston,
			},
			{
				text: "SHAW HARDWOOD",
				url: "/catalog/hardwood/manufacturer/shaw",
				logo: butttonManufacturersLogos.shaw,
			},
			{
				text: "MOHAWK HARDWOOD",
				url: "/catalog/hardwood/manufacturer/mohawk",
				logo: butttonManufacturersLogos.mohawk,
			},
		],
	},
	carpet: {
		material: [
			{
				text: "NYLON CARPET",
				url: "/catalog/carpet/material/nylon",
			},
			{
				text: "POLYESTER CARPET",
				url: "/catalog/carpet/material/polyester",
			},
		],
		styles: [
			{
				text: "PATTERN LOOK",
				url: "/catalog/carpet/style/pattern",
			},
			{
				text: "TEXTURE LOOK",
				url: "/catalog/hardwood/color/blonde",
			},
			,
			{
				text: "LOOP",
				url: "/catalog/carpet/style/loop",
			},

			{
				text: "BEIGE CARPET",
				url: "/catalog/carpet/color/beige",
			},
			{
				text: "BROWN COLOR FAMILY CARPET",
				url: "/catalog/carpet/color/brown",
			},
			{
				text: "GRAY CARPET",
				url: "/catalog/carpet/color/gray",
			},
			{
				text: "BLUUE CARPET",
				url: "/catalog/carpet/color/blue",
			},
			{
				text: "GREEN CARPET",
				url: "/catalog/carpet/color/green",
			},
		],

		brands: [
			{
				text: "SHAW",
				url: "/catalog/carpet/manufacturer/shaw",
				logo: butttonManufacturersLogos.shaw,
			},
			{
				text: "MOHAWK",
				url: "/catalog/carpet/manufacturer/mohawk",
				logo: butttonManufacturersLogos.mohawk,
			},
		],
	},
	decking: {
		material: [
			{
				text: "COMPOSITE DECKING (PE)",
				url: "/catalog/decking/material/composite",
			},
			{
				text: "PVC",
				url: "/catalog/decking/material/pvc",
			},
		],
		styles: [
			{
				text: "GRAY DECKING",
				url: "/catalog/decking/color/gray",
			},
			{
				text: "BROWN DECKING",
				url: "/catalog/decking/color/brown",
			},

			{
				text: "BLONDE DECKING",
				url: "/catalog/decking/color/gray",
			},
			{
				text: "DARK DECKING",
				url: "/catalog/decking/color/dark",
			},
		],

		brands: [
			{
				text: "FIBERON",
				url: "/catalog/decking/manufacturer/fiberon",
				logo: butttonManufacturersLogos.fiberon,
			},
		],
	},
};
