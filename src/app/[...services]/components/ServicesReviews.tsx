import { Slider } from "@/components/Slider/Slider";

export const ServicesReviews: React.FC = () => {
	return (
		<section className="container relative z-10 mb-[100px] max-xl:mb-[50px]">
			<h3 className="custom-heading  first-letter:text-main-yellow  ">
				Reviews
			</h3>
			<Slider id="reviews" />
		</section>
	);
};
