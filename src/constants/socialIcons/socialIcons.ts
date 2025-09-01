import facebook from "/public/logo/facebook.svg";
import instagram from "/public/logo/instagram.svg";
import linkedin from "/public/logo/linkedin.svg";

export const SOCIALS_SIZE = 45;

type SocialIcon = {
	id: string;
	href: string;
	icon: any;
	title: string;
};

export const socialIcons: SocialIcon[] = [
	{
		id: "facebook",
		href: "https://www.facebook.com/renova.remodels",
		icon: facebook,
		title: "Facebook",
	},
	{
		id: "instagram",
		href: "https://www.instagram.com/renova.contractors",
		icon: instagram,
		title: "Instagram",
	},
	{
		id: "linkedin",
		href: "/",
		icon: linkedin,
		title: "Linkedin",
	},
];
