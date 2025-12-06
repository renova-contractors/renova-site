import { Metadata } from "next";
import { ContactHero } from "./components/ContactHero";
import { FormComponent } from "@/components/FormMain/FormComponent";

export const metadata: Metadata = {
	title: "Contact",
	description: "Contact us for more information",
	alternates: {
		canonical: 'https://www.renova.contractors/contact'
	}
};

const page: React.FC = () => (
	<main>
		<ContactHero />
		<FormComponent />
	</main>
);

export default page;
