import Image from "next/image";
import hero_section from "/public/contentImages/contact/hero_section.jpg";
import { SOCIALS_SIZE, socialIcons } from "@/constants/socialIcons/socialIcons";
import Link from "next/link";
import { contacts } from "@/constants/contacts/contacts";

export const ContactHero: React.FC = () => (
	<section className="first-component container flex flex-col px-[10px] lg:flex-row items-center lg:justify-between component-mb">
		<div className="component-mb">
			<h1 className="lg:absolute inside-mb text-white text-hero-title font-black max-sm:text-[50px] max-lg:text-[60px] text-right">
				CONTACT US
			</h1>
			<div className="flex flex-col lg:flex-row inside-mb lg:mt-[265px] text-white gap-[40px] lg:gap-[70px]">
				<h3 className="text-title">ABOUT ANY QUESTIONS</h3>
				<ul>
					<li className="text-main-yellow text-title">
						<a
							className="text-main-yellow font-bold"
							href="tel:206-255-2708"
						>
							{contacts.king_county.phone}
						</a>
					</li>
					<li className="text-main-yellow pb-[30px]">
						<a
							className="text-main-yellow font-semibold"
							href="mailto:sales@renova.contractors"
						>
							{contacts.king_county.email}
						</a>
					</li>
					<li className="w-[200px] pb-[30px]">
						<li className="mb-[20px] max-sm:hidden">
							{contacts.king_county.address}
						</li>
					</li>
					<li className="w-[140px] pb-[30px]">
						Monday - Sunday 9:00AM - 9:00PM
					</li>
					<li className="flex gap-5">
						{socialIcons?.map(({ icon, href, id }) => (
							<Link key={id} href={href}>
								<Image
									src={icon}
									height={SOCIALS_SIZE}
									width={SOCIALS_SIZE}
									alt="social_icon"
								/>
							</Link>
						))}
					</li>
				</ul>
			</div>
		</div>
		<Image className="max-xl:hidden" src={hero_section} alt="" />
	</section>
);
