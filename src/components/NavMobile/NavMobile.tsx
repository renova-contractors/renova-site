import React, { useState } from "react";
import Image from "next/image";
import { ICON_SIZE, headerData } from "@/constants/header/headerProperties";
import header_arrow_down from "/public/arrow/header_arrow_down.svg";
import mobile_menu_close from "/public/logo/mobile_menu_close.svg";

/* import { FormMain } from "../FormMain/FormMain"; */
import Link from "next/link";
import { contacts } from "@/constants/contacts/contacts";

type Props = {
	isNavMobile: boolean;
	setIsNavMobile(isMobile: boolean): void;
};

const NavMobile: React.FC<Props> = ({
	isNavMobile,
	setIsNavMobile,
}): JSX.Element => {
	const [idType, setIdtype] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [isDropdownHovered, setIsDropdownHovered] = useState(false);

	const dropdownOpenHandler = (id: any): void => {
		setIdtype(id);
		setIsOpen(true);
	};

	return (
		<section
			className={`fixed top-0  left-0 right-0 bottom-0 z-50 bg-main-dark flex flex-col items-center justify-center ${
				isNavMobile ? "block" : "hidden"
			}`}
		>
			<div
				onClick={() => setIsNavMobile(!isNavMobile)}
				className="absolute top-[21px] right-[21px] cursor-pointer lg:hidden ml-[20px]"
			>
				<Image
					src={mobile_menu_close}
					height={21}
					width={21}
					alt="mobile_menu"
				/>
			</div>

			{/* <div className="flex  items-center gap-2">
				<input
					placeholder="Search"
					className="h-[42px]  border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
					required
					type="text"
				/>
				<button>
					<Image alt="search-icon" src={search} height={25} />
				</button>
			</div> */}

			<ul className="flex items-center flex-col px-6 py-[70px] gap-y-[44px]">
				{headerData.map(({ title, dropdown, href, id }) => (
					<li key={id} className="flex items-center">
						<Link
							className="text-white font-medium text-[24px] leading-[28px]"
							href={href}
							title={title}
						>
							{title}
						</Link>
						{dropdown && (
							<Image
								onMouseEnter={() => {
									dropdownOpenHandler(id);
									setIsOpen(true);
								}}
								onMouseLeave={() => {
									if (!isDropdownHovered || !open) {
										setTimeout(() => {
											setIsOpen(false);
										}, 60);
									} else {
										setIsDropdownHovered(true);
									}
								}}
								src={header_arrow_down}
								height={ICON_SIZE}
								width={ICON_SIZE}
								alt="catalog arrow down"
								className="hover:shadow-2xl"
							/>
						)}
					</li>
				))}
			</ul>
			<div className="flex items-center w-full mx-auto px-5 gap-4">
				  {/* Phone Call Link */}
				  <a
					className="text-main-yellow font-bold text-title hover:text-yellow-400 transition-colors duration-300"
					href="tel:206-255-2708"
				  >
					{contacts.king_county.phone}
				  </a>
				  {/* Call and SMS Icons */}
				  <div className="flex gap-4 md:justify-end md:flex-none ">
					<a
					  href="tel:206-255-2708"
					  className="hover:scale-110 transition-transform duration-300"
					>
					  <Image
						src="/icons/reusable/@SVG.svg"
						height={40}
						width={40}
						style={{ borderRadius: '20%' }}
						alt="Call Icon"
					  />
					</a>
					<a
					  href="sms:206-255-2708"
					  className="hover:scale-110 transition-transform duration-300"
					>
					  <Image
						src="/icons/reusable/mini-hero-messages.png"
						height={40}
						width={40}
						alt="SMS Icon"
					  />
					</a>
				  </div>
				</div>
		</section>
	);
};

export default NavMobile;
