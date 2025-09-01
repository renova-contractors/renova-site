import { manufacturersLogos } from "@/constants/manufacturersLogos/manufacturersLogos";
import Image from "next/image";

export const OurPartners: React.FC = () => {
	const cabinets = manufacturersLogos.cabinets;

	return (
		<section className="container mb-[100px] max-md:mb-[50px] ">
			<h3 className="custom-heading text-center ">Our partners</h3>
			<div className="flex mt-10 gap-32 mb-10 overflow-x-auto overflow-y-hidden no-scrollbar">
				{cabinets.map((logo) => {
					return (
						<Image
							key={logo.height}
							src={logo.image}
							height={logo.height}
							width={logo.width}
							alt="partner-logo"
						/>
					);
				})}
			</div>
		</section>
	);
};
