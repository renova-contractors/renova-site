import Image from "next/image";
import banner from "/public/contentImages/countertop-and-cabinets-in-modern-kitchen-2023-11-27-04-54-34-utc 2.jpg";
import { ContactUs } from "../ContactUs/ContactUs";

export const Banner: React.FC = () => {
	return (
		<section className="container component-mb 2xl:w-max mx-auto ">
			<Image
				src={banner}
				alt="kitchen"
				className="2xl:w-[1440px] inside-mb component-mb"
			/>
			<ContactUs />
		</section>
	);
};
