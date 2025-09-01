//import { CatalogCards } from "../catalog/CatalogCards";
import { CartProductList } from "../cart/components/CartProductList";
import { LikedHero } from "./components/LikedHero";

const page: React.FC = () => (
	<main>
		<LikedHero />
		<CartProductList />
	</main>
);

export default page;
