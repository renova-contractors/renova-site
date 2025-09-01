import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				"1440px": "1440px",
			},
			backgroundImage: {
				our_services_tile:
					'url("/contentImages/ourServices/tile.jpeg")',
				our_services_electrical:
					'url("/contentImages/ourServices/electrical.jpeg")',
				our_services_countertops:
					'url("/contentImages/ourServices/countertops.png")',
				our_services_kitchen_cabinets:
					'url("/contentImages/ourServices/kitchen_cabinets.jpeg")',
			},
			colors: {
				"main-yellow": "#E0E721",
				"main-dark": "#2C2C2C",
				"main-gray": "white",
				"dark-red": "#9F6372",
				"dark-orange": "#DC8573",
				"light-orange": "#FEB869",
				"bright-yellow": "#D7DE44",
				"light-purple": "#A2A883",
				"tortoise": "#ACB89F",
				"comfort-blue": "#2c2c2c"
			},
			backgroundColor: {
				"main-yellow": "#E0E721",
				"main-dark": "#2C2C2C",
			},
			borderColor: {
				"main-yellow": "#E0E721",
				"main-dark": "#2C2C2C",
			},
			fontSize: {
				base: "16px",
				title: "24px",
				"title-large": "60px",
				"hero-title": "176px",
				"title-mobile": "50px",
			},
		},
	},
	variants: {
		display: ["group-hover"],
	},
	plugins: [],
};
export default config;
