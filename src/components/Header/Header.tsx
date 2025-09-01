// @ts-nocheck
/*eslint-disable*/

"use client";

import { useDropdown } from "@/contexts/DropdownContext";
import Image from "next/image";
import Link from "next/link";
import classes from "./Header.module.css";
import header_logo from "/public/logo/header_logo.svg";
import mobile_menu from "/public/logo/mobile_menu.svg";
import search from "/public/logo/icons8-search.svg";
import closing from "/public/logo/close.svg";
import header_arrow_down from "/public/arrow/header_arrow_down.svg";
import {
	ICON_SIZE,
	headerData,
	headerIcons,
} from "@/constants/header/headerProperties";
import { DropDown } from "../Dropdown/DropDown";
import { useEffect, useState } from "react";
import NavMobile from "../NavMobile/NavMobile";
import { SOCIALS_SIZE, socialIcons } from "@/constants/socialIcons/socialIcons";
import { contacts } from "@/constants/contacts/contacts";
import { FormMain } from "../FormMain/FormMain";

export const Header: React.FC = (): JSX.Element => {
	const { isDropdownOpen, setIsDropdownOpen, hasIdType, setHasIdType } =
		useDropdown();
	const [isNavMobile, setIsNavMobile] = useState(false);

	/* search */
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState<any[]>([]);
	const [searchDropdown, setSearchDropdown] = useState(false);

	const handleSearchInputChange = async (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setSearchQuery(e.target.value);
		setSearchDropdown(true);
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/search/${e.target.value}`,
			);
			if (!response.ok) {
				throw new Error("Ошибка при выполнении запроса");
			}
			const data = await response.json();
			setSearchResults(data);
		} catch (error) {
			console.error("Ошибка при выполнении запроса:", error);
		}
	};

	const dropdownOpenHandler = (id: string): void => {
		setHasIdType(id);
		setIsDropdownOpen(true);
	};

	useEffect(() => {
		const handleOutsideClick = (ele: any): void => {
			if (isNavMobile && !ele.target.closest(".nav-mobile-container")) {
				setIsNavMobile(false);
			}
		};

		if (isNavMobile) {
			document.body.style.overflow = "hidden";
			document.addEventListener("click", handleOutsideClick);
		} else {
			document.body.style.overflow = "auto";
			document.removeEventListener("click", handleOutsideClick);
		}

		return () => {
			document.body.style.overflow = "auto";
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [isNavMobile]);

	return (
		<header className=" container right-0 left-0 fixed w-full pt-10 max-sm:pt-5 md:mb-5 xl:mb-5 z-40 bg-comfort-blue mx-auto px-5">
			{/* <div className={`geo-container ${showGeo ? 'visible' : 'hidden'}`}>
                <Geo />
            </div> */}
			<div className="flex pb-5 justify-between items-end border-b-[1px] border-solid border-black ">
				<ul className="flex gap-5 max-sm:hidden">
					{socialIcons?.map(({ icon, href, id }: any) => (
						<li key={id}>
							<Link href={href}>
								<Image
									src={icon}
									height={SOCIALS_SIZE}
									width={SOCIALS_SIZE}
									alt="social-media-icons"
								/>
							</Link>
						</li>
					))}
				</ul>

				{/* <div className="relative flex max-sm:hidden items-center gap-2">
					<input
						placeholder="Search"
						className="h-[42px] w-96 border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
						required
						type="text"
						value={searchQuery}
						onChange={handleSearchInputChange}
						onMouseDown={() => setSearchDropdown(true)}
					/>
					<Image alt="search-icon" src={search} height={25} />
					<div
						className={`${
							searchDropdown ? "block" : "hidden"
						} h-96 w-96 top-20 flex flex-col gap-2 absolute bg-black text-white p-5 rounded-3xl mx-auto z-50 overflow-y-auto`}
					>
						<div className="flex items-center">
							<p className="small-button">Products</p>
							<p className="small-button">Information</p>
							<button
								className="ml-auto relative"
								onClick={() => setSearchDropdown(false)}
							>
								<Image
									alt="form-closing-button"
									src={closing}
								/>{" "}
							</button>
						</div>
						{searchResults.map((result) => (
							<Link
								key={result.url}
								onClick={() => setSearchDropdown(false)}
								className="pb-2 border-white border-solid border-b hover:bg-main-yellow"
								href={`/blog/${result.url}`}
							>
								{result.metaTitle}
							</Link>
						))}
					</div>
				</div> */}

				<div className="flex gap-4 items-center w-full justify-between md:justify-end">
					{/* Phone Call Link */}
					<a
						className="text-main-yellow font-bold text-title hover:text-yellow-400 transition-colors duration-300"
						href="tel:206-255-2708"
					>
						{contacts.king_county.phone}
					</a>
					{/* Call and SMS Icons */}
					<div className="flex gap-4 md:justify-end md:flex-none">
						<a
							href="tel:206-255-2708"
							className="hover:scale-110 transition-transform duration-300"
						>
							<Image
								src="/icons/reusable/@SVG.svg"
								height={40}
								width={40}
								style={{ borderRadius: "20%" }}
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
			</div>

			<nav className={classes.header}>
				<Link href="/" title="Renova Contractors - Seattle Remodeling">
					<Image
						src={header_logo}
						height={37}
						width={176}
						alt="renova conttractors logo"
					/>
				</Link>

				<ul className={classes.header_links}>
					{headerData.map(({ dropdown, href, id, title }) => (
						<li key={id} className="flex items-center mx-auto">
							<Link
								className="flex font-semibold hover:text-main-yellow"
								href={href}
								title={title}
							>
								{title}
							</Link>
							{dropdown && (
								<Image
									onMouseEnter={() => {
										dropdownOpenHandler(id);
									}}
									onMouseLeave={() => {
										if (
											!isDropdownOpen ||
											!isDropdownOpen
										) {
											setTimeout(() => {
												setIsDropdownOpen(false);
											}, 60);
										} else {
											setIsDropdownOpen(true);
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

				<div
					className={`${
						isNavMobile
							? "h-screen flex flex-col items-center fixed bg-main-dark z-50 w-full left-0 right-0 font-bold rounded transition-all overflow-hidden"
							: "max-h-0"
					} lg:hidden absolute bg-main-dark z-50 top-0 w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
					style={{ overflowY: isNavMobile ? "hidden" : "auto" }}
				>
					<NavMobile
						isNavMobile={isNavMobile}
						setIsNavMobile={setIsNavMobile}
					/>
				</div>

				<div className="flex items-center">
					<div className={classes.header_icons}>
						{headerIcons.map(({ id, alt, href, icon }) => (
							<Link href={href} key={id}>
								<Image
									src={icon}
									height={ICON_SIZE}
									width={ICON_SIZE}
									alt={alt}
								/>
							</Link>
						))}
					</div>
					<div className="max-sm:hidden">
						<FormMain />
					</div>

					<div
						onClick={() => setIsNavMobile(!isNavMobile)}
						className="cursor-pointer lg:hidden ml-[20px]"
					>
						<Image
							src={mobile_menu}
							height={ICON_SIZE}
							width={ICON_SIZE}
							alt="mobile_menu"
						/>
					</div>
				</div>
			</nav>

			<div
				className={`z-20 ${
					isDropdownOpen || isDropdownOpen ? "block" : "hidden"
				}`}
			>
				<div
					onMouseEnter={() => setIsDropdownOpen(true)}
					onMouseLeave={() => {
						setIsDropdownOpen(false);
					}}
				>
					<DropDown idType={hasIdType} />
				</div>
			</div>
		</header>
	);
};
