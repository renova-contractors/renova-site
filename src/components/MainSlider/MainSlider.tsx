import { Slider } from "../Slider/Slider";

export const MainSlider: React.FC = () => {
	return (
		<div className="component-mb w-full 2xl:max-w-[1680px] mx-auto">
			<Slider id="main_swiper" />
		</div>
	);
};
