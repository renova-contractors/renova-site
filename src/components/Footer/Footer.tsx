import Image from "next/image";
import logo_bottom from "/public/logo/logo_bottom.svg";
import Link from "next/link";
import { SOCIALS_SIZE, socialIcons } from "@/constants/socialIcons/socialIcons";
import { dropdowns } from "@/constants/header/headerProperties";
import { contacts } from "@/constants/contacts/contacts";
import { FormMain } from "../FormMain/FormMain";

interface Props {
	location?: string;
}

export const Footer: React.FC<Props> = ({ location }) => {
	return (
		<footer
			className="container bg-comfort-blue text-main-gray relative border-t-[1px] rounded-3xl pt-5"
			role="contentinfo"
		>
			<div className="flex w-max mx-auto max-sm:items-center max-sm:text-center items-start md:flex-row flex-col pb-[60px] md:gap-[20px] lg:gap-[90px] xl:gap-[157px]">
				<Image
					src={logo_bottom}
					width={145}
					height={159}
					alt="Renova Contractors LLC logo"
					priority
				/>

				{/* Контакты */}
				<address className="not-italic max-w-[194px] max-md:mt-[40px]">
					<p className="mb-[20px] max-sm:hidden">{contacts.king_county.address}</p>
					<p className="sm:mb-[20px]">
						<a
							className="text-main-yellow font-bold"
							href={`tel:${contacts.king_county.phone}`}
						>
							{contacts.king_county.phone}
						</a>
					</p>
					<p className="mb-[20px] text-main-yellow">
						<a
							className="text-main-yellow font-semibold"
							href={`mailto:${contacts.king_county.email}`}
						>
							{contacts.king_county.email}
						</a>
					</p>
					<p className="mb-[20px] sm:hidden">{contacts.king_county.address}</p>
					<p className="mb-[20px]">
						Monday - Sunday <br /> 9:00AM - 9:00PM
					</p>

					{/* Соцсети */}
					<nav aria-label="Social links" className="flex justify-between">
						{socialIcons?.map(({ icon, href, id, title }: any) => (
							<Link key={id} href={href} title={title}>
								<Image
									src={icon}
									height={SOCIALS_SIZE}
									width={SOCIALS_SIZE}
									alt={title}
								/>
							</Link>
						))}
					</nav>
				</address>

				{/* Навигация */}
				<div className="max-sm:hidden flex max-md:gap-x-[58px] max-md:mt-5 md:gap-[30px] lg:gap-[90px] xl:gap-[157px]">
					<nav aria-label="Services">
						<h2 className="relative left-4 text-title text-white mb-[20px]">
							Services
						</h2>
						<ul className="text-left">
							{dropdowns.services.map((service) => (
								<li
									className="mb-[10px] text-secondary small-button"
									key={service.text}
								>
									<Link title={service.text} href={service.link}>
										{service.text}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<nav aria-label="Footer menu" className="max-xl:hidden">
						<h2 className="text-title text-white mb-[20px]">Menu</h2>
						<ul>
							<li className="mb-[15px]">
								<Link href="/">Main</Link>
							</li>
							<li className="mb-[15px]">
								<Link title="Services" href="/services">
									Services
								</Link>
							</li>
							<li className="mb-[15px]">
								<Link title="Blog" href="/blog">
									Blog
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			{/* Форма в футере */}
			<div className="flex max-sm:flex-col justify-center items-center gap-2.5 pb-[60px]">
				<h2 className="text-title">Any Questions?</h2>
				<FormMain />
			</div>

			<p className="w-max mx-auto pb-[34px]">
				© {new Date().getFullYear()} Renova Contractors LLC. All rights reserved.
			</p>

			<Link
				title="sitemap"
				className="w-full mx-auto flex justify-center mb-5"
				href="/sitemap.xml"
			>
				Sitemap
			</Link>
		</footer>
	);
};
