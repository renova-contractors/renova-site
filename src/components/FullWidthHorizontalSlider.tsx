import { team } from "@/constants/team/team";
import { PersonCard } from "./PersonCard/PersonCard";

export const FullWidthHorizontalSlider: React.FC = () => {
	return (
		<section className="container w-full component-mb component-mb">
			<h2 className="custom-heading sm:text-center">Meet Our Team</h2>
			<ul
				className="flex overflow-x-auto overflow-y-hidden slider-gap pb-10"
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "nowrap",
				}}
			>
				{team.map((person, index) => (
					<PersonCard key={index} {...person} />
				))}
			</ul>
		</section>
	);
};
