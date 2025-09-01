export const colorNames = [
	"main-gray",
	"dark-purple",
	"dark-red",
	"dark-orange",
	"light-orange",
	"bright-yellow",
	"light-purple",
	"tortoise",
	"bright-green",
];

export async function getRandomArrayItem(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	return colorNames[randomIndex];
}
