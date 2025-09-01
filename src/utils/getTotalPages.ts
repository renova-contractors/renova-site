export const getTotalPages = (category: string) => {
	switch (category) {
		case "carpets":
			return 12;
		case "hardwoods":
			return 12;
		case "vinyls":
			return 12;
		case "tiles":
			return 48;
		case "sinks":
			return 48;
		case "faucets":
			return 48;
		case "vanities":
			return 48;
		case "doors":
			return 48;
		case "countertops":
			return 24;
		case "laminates":
			return 24;
		default:
			return 12;
	}
};
