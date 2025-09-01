import { CartHero } from "./components/CartHero";
import { CartProductList } from "./components/CartProductList";

const page: React.FC = () => {
	return (
		<main>
			<CartHero />
			<CartProductList />
		</main>
	);
};

export default page;
