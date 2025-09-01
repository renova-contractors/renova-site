import { OurServices } from "@/components/OurServices/OurServices";
import React from "react";
import { mainPageContent } from "@/constants/mainPage/mainPageContent";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our Services",
	description: "RENOVA services",
};

const Services = () => {
	return (
		<main>
			<div className="first-component">
				<OurServices {...mainPageContent.ourServices} />
			</div>
			<ContactUs />
		</main>
	);
};

export default Services;
