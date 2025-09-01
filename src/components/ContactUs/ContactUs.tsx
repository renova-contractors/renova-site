import { SOCIALS_SIZE, socialIcons } from "@/constants/socialIcons/socialIcons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FormMain } from "../FormMain/FormMain";
import { contacts } from "@/constants/contacts/contacts";

export const ContactUs: React.FC = () => {
	return (
		<section
			id="contact"
			className="container mb-[100px] max-md:mb-[50px] relative"
		>
			<h2 className="w-max custom-heading first-letter:text-main-yellow">
				Contact Us
			</h2>

			<ul className="w-full flex max-md:flex-col max-md:text-center items-center justify-between md:gap-x-[30px] lg:gap-x-[70px]">
				{/* Phone + Email */}
				<li className="flex flex-col text-main-yellow max-md:max-w-[214px] max-md:mb-5">
					<a
						className="text-main-yellow font-bold"
						href={`tel:${contacts.king_county.phone}`}
						aria-label={`Call us at ${contacts.king_county.phone}`}
					>
						{contacts.king_county.phone}
					</a>
					<a
						className="text-main-yellow font-semibold"
						href={`mailto:${contacts.king_county.email}`}
						aria-label={`Email us at ${contacts.king_county.email}`}
					>
						{contacts.king_county.email}
					</a>
				</li>

				{/* Address */}
				<li className="flex text-main-gray text-[16px] font-light max-md:mb-5">
					<address className="not-italic">
						{contacts.king_county.address}
					</address>
				</li>

				{/* Hours */}
				<li
					className="text-main-gray text-[16px] max-md:mb-5 font-light"
					aria-label="Business hours"
				>
					Monday – Sunday 9:00AM – 9:00PM
				</li>

				{/* Social icons */}
				<li className="flex space-between gap-2">
					{socialIcons?.map(({ icon, href, id, name }: any) => (
						<Link
							key={id}
							href={href}
							aria-label={`Visit our ${name}`}
							title={name}
						>
							<Image
								src={icon}
								height={SOCIALS_SIZE}
								width={SOCIALS_SIZE}
								alt={`${name} icon`}
							/>
						</Link>
					))}
				</li>

				{/* Form */}
				<li className="max-md:mt-[40px]">
					<FormMain />
				</li>
			</ul>
		</section>
	);
};
