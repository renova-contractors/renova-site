"use client";

import { Button } from "@/components/Button/Button";
import { useRef, useState, useEffect } from "react";
import { FilterMobile } from "./FilterMobile";
import Select from "react-select";
import { usePathname, useSearchParams } from "next/navigation";
import { productFilter } from "@/constants/catalog/catalogFilters";
import { useFilters } from "@/lib/urlSearch/urlSearch";

type OptionType = {
	value: string;
	label: string;
};

const CatalogSearch = ({
	products,
	setSearchString,
	searchString,
	setIsSearch,
	isSearch,
	setSortOrder,
	setSortBy,
}: any): any => {
	const [isFilterMobile, setFilterMobile] = useState(false);
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const refs = useRef({});

	const filterSelection = pathname.split("/");
	filterSelection.shift();
	const filterOption = filterSelection[1];
	const filterOptions = productFilter[filterOption];

	const { filters, setFilters, setIsChecked, isChecked } = useFilters();

	const handleInputChange = (name: string, value: string) => {
		setSearchString((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const resetAllFields = () => {
		setSearchString({
			search: "",
			color: "",
			material: "",
			style: "",
		});
		Object.keys(refs.current).forEach((key) => {
			if (refs.current[key]) refs.current[key].clearValue();
		});
	};

	// Ensure refs are created for each filter type
	useEffect(() => {
		if (filterOptions) {
			Object.keys(filterOptions).forEach((filterKey) => {
				if (!refs.current[filterKey]) {
					refs.current[filterKey] = { current: null };
				}
			});
		}
	}, [filterOptions]);

	const formatFilterKey = (filterKey) => {
		// Capitalize the first letter
		const capitalized =
			filterKey?.charAt(0).toUpperCase() + filterKey?.slice(1);

		// Replace hyphens with spaces
		const formatted = capitalized?.replace(/_/g, " ");

		return formatted;
	};

	const applyFilters = () => {
		setIsChecked(true);
		setFilterMobile(false);
		setIsSearch(!isSearch);
	};

	return (
		<section className="relative mx-auto xl:max-w-[1440px] mb-10 px-4 z-20">
			<div className="mb-3">
				<div className="flex items-center justify-between">
					<p className="text-white">Sort By Price</p>
					<select
						className="px-2 rounded"
						defaultValue="desc"
						onChange={(e) => setSortOrder(e.target.value)}
					>
						<option value="asc">Ascending</option>
						<option value="desc">Descending</option>
					</select>
				</div>
				<div className="my-2">
					<button
						onClick={() => resetAllFields()}
						className="bg-yellow-400 text-black rounded px-1"
					>
						Clear Filters
					</button>
				</div>
			</div>
			<div className="px-5 max-sm:hidden">
				<>
					<div className="flex flex-col">
						<label className="text-white mb-5">Search</label>
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
									ref={refs.current[filterKey]}
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
														(item as OptionType)
															.value,
											  )
											: [
													(
														selectedOption as OptionType
													)?.value,
											  ];
										let query = arr.join(" ");
										handleInputChange(filterKey, query);
									}}
								/>
							</div>
						))}
					<div className="flex flex-row xl:flex-col items-center justify-center text-center mt-10">
						<Button variant="secondary" onClick={applyFilters}>
							Search
						</Button>
					</div>
				</>
			</div>
			<div className="flex flex-col sm:flex-row md:justify-center gap-5 sm:gap-10 mt-[40px] text-main-gray">
				<div className="flex justify-between items-center">
					<button
						className="sm:hidden w-full sm:max-w-xs h-[42px] p-[10px] content-center items-center rounded-[40px] bg-transparent border border-zinc-600 text-white justify-center inline-flex"
						onClick={() => setFilterMobile(!isFilterMobile)}
					>
						Filters
					</button>
				</div>
			</div>
		</section>
	);
};

export default CatalogSearch;
