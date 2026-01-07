"use client";

import { Button } from "@/components/Button/Button";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import mobile_menu_close from "/public/logo/mobile_menu_close.svg";
import Select from "react-select";
import { productFilter } from "@/constants/catalog/catalogFilters";
import { usePathname } from "next/navigation";
import { useFilters } from "@/lib/urlSearch/urlSearch";

type OptionType = {
	value: string;
	label: string;
};
type FilterMobileProps = {
	isFilterMobile: boolean;
	setFilterMobile: React.Dispatch<React.SetStateAction<boolean>>;
	setSearchString: (value: any) => void;
	searchString: any;
	handleInputChange: (name: string, value: string) => void;
	filterOptions: any;
	applyFilters: () => void;
};

export const FilterMobile: React.FC<FilterMobileProps> = ({
	isFilterMobile,
	setFilterMobile,
	setSearchString,
	searchString,
	handleInputChange,
	filterOptions,
	applyFilters,
}) => {
	const pathname = usePathname();
	const filterSelection = pathname.split("/");
	filterSelection.shift();
	const filterOption = filterSelection[1];
	const filterOptionsData = productFilter[filterOption];

	const { filters, setFilters, setIsChecked, isChecked } = useFilters();

	const refs = useRef({});

	useEffect(() => {
		if (filterOptionsData) {
			Object.keys(filterOptionsData).forEach((filterKey) => {
				if (!refs.current[filterKey]) {
					refs.current[filterKey] = { current: null };
				}
			});
		}
	}, [filterOptionsData]);

	const formatFilterKey = (filterKey) => {
		// Capitalize the first letter
		const capitalized =
			filterKey?.charAt(0).toUpperCase() + filterKey?.slice(1);

		// Replace hyphens with spaces
		const formatted = capitalized?.replace(/_/g, " ");

		return formatted;
	};

	return (
		<div
			className={`relative w-full bg-main-dark z-50 ${
				isFilterMobile ? "h-screen flex flex-col" : "max-h-0"
			}`}
		>
			<div className="w-full flex justify-between items-center px-5 pt-3 pb-5 border-b border-white mb-3">
				{/* <Image
					src={mobile_menu_close}
					alt="close menu"
					className="cursor-pointer"
					onClick={() => setFilterMobile(false)}
				/> */}
				<h1>hello23</h1>
			</div>
			<div className="flex flex-col px-5">
				<div className="flex flex-col mb-5">
					<label className="text-white">Search</label>
					<input
						placeholder=""
						className="w-full max-w-xs h-[42px] px-4 border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder-gray-paragraph text-white"
						required
						type="text"
						value={searchString.search}
						onChange={(e) =>
							handleInputChange("search", e.target.value)
						}
					/>
				</div>
				{filterOptions &&
					Object.keys(filterOptions).map((filterKey) => (
						<div key={filterKey} className="flex flex-col mt-5">
							<label className="text-white mb-5">
								{formatFilterKey(filterKey)}
							</label>
							<Select
								ref={(ref) => refs.current[filterKey]}
								options={filterOptions[filterKey].map(
									(option) => option,
								)}
								isClearable
								closeMenuOnSelect={false}
								styles={{
									control: (provided, state) => ({
										...provided,
										borderRadius: "none",
										width: "100%",
										maxWidth: "16rem",
										height: "42px",
										borderBottom: "1px solid #5A5A5A",
										borderTop: state.isFocused
											? "none"
											: "none",
										borderRight: state.isFocused
											? "none"
											: "none",
										borderLeft: state.isFocused
											? "none"
											: "none",
										justifyContent: "space-between",
										alignItems: "center",
										display: "inline-flex",
										backgroundColor: "transparent",
										color: "#FFFFFF",
										overflowX: "auto",
										whiteSpace: "nowrap",
									}),
									placeholder: (provided) => ({
										...provided,
										color: "#9CA3AF",
										border: "none",
									}),
									singleValue: (provided) => ({
										...provided,
										color: "#FFFFFF",
									}),
									dropdownIndicator: (provided) => ({
										...provided,
										color: "yellow",
									}),
									clearIndicator: (provided) => ({
										...provided,
										color: "white",
										cursor: "pointer",
										":hover": {
											color: "#ff0000", // Change color on hover
										},
									}),
									menu: (provided) => ({
										...provided,
										borderRadius: "none",
										backgroundColor: "black",
										color: "white",
										zIndex: 99999,
									}),
									option: (provided, state) => ({
										...provided,
										backgroundColor: state.isFocused
											? "#FBD331"
											: "black",
										color: state.isFocused
											? "black"
											: "white",
									}),
								}}
								onChange={(selectedOption) => {
									let arr = Array.isArray(selectedOption)
										? selectedOption.map(
												(item) =>
													(item as OptionType).value,
										  )
										: [
												(selectedOption as OptionType)
													?.value,
										  ];
									let query = arr.join(" ");
									handleInputChange(filterKey, query);
								}}
							/>
						</div>
					))}
				<div className="flex flex-row items-center justify-center text-center mt-10">
					<Button variant="secondary" onClick={applyFilters}>
						Search
					</Button>
				</div>
			</div>
		</div>
	);
};
