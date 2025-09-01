"use client";
import React, { useState, useMemo, useEffect } from "react";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Pagination,
} from "@nextui-org/react";
import axios from "axios";
import toast from "react-hot-toast";
import ShowActiveUrls from "../../../components/ShowActiveUrls/ShowActiveUrls";
import { getTotalPages } from "../../../utils/getTotalPages";

export default function Products() {
	const [page, setPage] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(true);
	const [isClicked, setIsClicked] = useState<boolean>(false);
	const [selectedItems, setSelectedItems] = useState<string[]>([]);
	const [inputUrl, setInputUrl] = useState<string>("");
	const [urls, setUrls] = useState<string[]>([]);
	const [no, setNo] = useState<number>(1);
	const [stopProcessing, setStopProcessing] = useState<boolean>(false);
	const [selectedOption, setSelectedOption] = useState("");
	const [catData, setCatData] = useState({
		category: "",
		url: "",
		endpoint: "",
	});
	const [uniqueParts, setUniqueParts] = useState<string[]>([]);
	const [totalPages, setTotalNoPage] = useState<number>(0);
	const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
	const [processing, setProcessing] = useState<boolean>(false);
	const rowsPerPage = 10;
	const pages = Math.ceil(urls.length / rowsPerPage);

	const items = useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;
		return urls.slice(start, end);
	}, [page, urls]);

	const handleIntervalProcess = async () => {
		function filterUrls(urls, uids) {
			return urls.filter((url) => {
				return !uids.some((uid) => url.includes(uid));
			});
		}

		const filteredUrls = filterUrls(urls, uniqueParts);

		if (intervalId) {
			clearInterval(intervalId); // Clear any existing intervals
		}

		setProcessing(true);

		let index = 0;
		let callCount = 0;
		const totalUrls = filteredUrls.length;
		const time = 30000;
		const pauseTime = 120000; // 2 minutes in milliseconds
		const callLimit = 10;

		const processBatch = async () => {
			if (index < totalUrls && !stopProcessing) {
				if (callCount < callLimit) {
					handleExtractData(filteredUrls[index]); // Ensure this is awaited
					index++;
					callCount++;
				} else {
					// Pause for 2 minutes after every 3 calls
					clearInterval(interval); // Clear the interval to pause
					callCount = 0; // Reset the call count
					setTimeout(() => {
						if (!stopProcessing) {
							setIntervalId(setInterval(processBatch, time)); // Resume the interval after pause
						}
					}, pauseTime);
				}
			} else {
				clearInterval(interval); // Stop the interval when all URLs are processed or stopProcessing is true
				setProcessing(false);
			}
		};

		// Call handleExtractData instantly for the first URL
		if (totalUrls > 0 && !stopProcessing) {
			handleExtractData(filteredUrls[index]);
			index++;
			callCount++;
		}

		const interval = setInterval(processBatch, time); // 30 seconds interval
		setIntervalId(interval);
	};

	// const handleStopProcess = () => {
	//     setStopProcessing(true)
	//     clearInterval(intervalId); // Clear the interval immediately
	//     setProcessing(false); // Update the state to indicate processing has stopped
	// };

	const handleExtractData = async (item: string | string[]) => {
		const data = {
			urls: Array.isArray(item) ? item : [item],
			category: catData?.category,
		};
		if (data?.urls.length === 0) {
			setIsClicked(false);
			return toast.error("Please select the url");
		}
		setIsClicked(true);
		try {
			await axios
				.post("NEXT_PUBLIC_BACKEND_URL/products/add/products", data)
				.then((response) => {
					if (response.status === 201) {
						setIsClicked(false);
						setSelectedItems([]);
						setProcessing(false);
						setStopProcessing(true);
						toast.success("Products Scrapped Successfully!");
						fetchScrapedUrls(catData?.category);
						fetchScrapedProductsUids(catData?.category);
					}
				})
				.catch((error) => {
					setIsClicked(false);
					toast.error("Something went wrong with server");
				});
		} catch (error) {
			setIsClicked(false);
			setProcessing(false);
			setStopProcessing(true);
			toast.error("Something went wrong with server");
		}
	};

	const handleScrapeAllUrls = async () => {
		setIsClicked(true);
		if (no === 0) {
			setIsClicked(false);
			return toast.error("Please select no of pages");
		}
		try {
			await axios
				.put("http://localhost:4100/products-links/get-urls", {
					min: totalPages,
					max: totalPages + no,
					category: catData?.category,
				})
				.then((response) => {
					if (response.status === 200) {
						setUrls(response.data);
						setIsClicked(false);
						toast.success("Urls Scrapped Successfully!");
					}
				})
				.catch((error) => {
					setIsClicked(false);
					toast.error("Something went wrong with server");
				});
		} catch (error) {
			setIsClicked(false);
			toast.error("Something went wrong with server");
		}
	};

	const fetchScrapedUrls = async (category: string | null) => {
		setLoading(true);
		try {
			const response = await axios.get<string[]>(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/products-links?category=${category}`,
			);
			setUrls(response.data);
		} catch (error) {
			console.error("Error fetching category URLs:", error);
		} finally {
			setLoading(false);
		}
	};

	const fetchScrapedProductsUids = async (category: string | null) => {
		setLoading(true);
		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/get-uids`,
				{ category },
			);
			setUniqueParts(response.data);
		} catch (error) {
			console.error("Error fetching category URLs:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleSelectItem = (item: string) => {
		setSelectedItems((prevSelectedItems) => {
			const updatedItems = prevSelectedItems.includes(item)
				? prevSelectedItems.filter((i) => i !== item)
				: [...prevSelectedItems, item].slice(-5);

			return updatedItems;
		});
	};

	const handleAddUrl = () => {
		if (inputUrl.trim()) {
			setSelectedItems((prevSelectedItems) => {
				const updatedItems = [...prevSelectedItems, inputUrl].slice(-5);
				return updatedItems;
			});
			setInputUrl("");
		}
	};

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("item") ?? "");
		setCatData(data);
		fetchScrapedProductsUids(data?.category);
		fetchScrapedUrls(data?.category);
	}, [selectedOption]);

	useEffect(() => {
		const perPageProducts = getTotalPages(catData?.category);
		setTotalNoPage(Math.ceil(urls.length / perPageProducts));
	});

	const handleNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		if (value >= 0) {
			setNo(value);
		} else {
			setNo(0);
		}
	};
	return (
		<div
			className="container mx-auto flex flex-col sm:flex-row gap-4 "
			style={{ marginTop: "200px" }}
		>
			<div className="flex-1 overflow-auto">
				<div className="w-full p-8 bg-white rounded-lg shadow-lg">
					<h1 className="text-3xl font-semibold mb-4 text-center">
						Extract Data
					</h1>

					{/* <div className="flex justify-center mb-4">
                        <input
                            type="text"
                            value={inputUrl}
                            onChange={(e) => setInputUrl(e.target.value)}
                            placeholder="Enter URL"
                            className="p-2 border border-gray-300 rounded mr-2 w-2/3"
                        />
                        <button
                            className="bg-main-yellow hover:bg-main-yellow-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleAddUrl}
                        >
                            Add URL
                        </button>
                    </div> */}

					<div className="mt-4">
						<h2 className="text-xl font-semibold text-center">
							Selected Items
						</h2>
						{selectedItems.length === 0 && (
							<p className="text-center mt-4">
								no item is selected
							</p>
						)}
						<ul className="list-disc list-inside overflow-auto max-h-48">
							{selectedItems.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>
					<div className="flex justify-center mt-8">
						<button
							className={`${
								isClicked
									? "bg-main-yellow-dark"
									: "bg-main-yellow"
							} hover:bg-main-yellow-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
							onClick={() => handleExtractData(selectedItems)}
							disabled={isClicked}
						>
							{isClicked ? "Scraping..." : "Scrape Products"}
						</button>
					</div>
				</div>
				<div className="mt-8 text-center">
					<button
						className={`${
							processing
								? "bg-main-yellow-dark"
								: "bg-main-yellow"
						} hover:bg-main-yellow-light text-white font-extrabold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-12`}
						onClick={() => {
							setStopProcessing(false);
							handleIntervalProcess();
						}}
						disabled={processing || urls.length === 0}
					>
						{processing ? "Processing..." : "Automate Scraping"}
					</button>
				</div>
			</div>

			<div className="flex-1 overflow-auto">
				<div className="text-center">
					<button
						className={`${
							isClicked ? "bg-main-yellow-dark" : "bg-main-yellow"
						} hover:bg-main-yellow-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
						onClick={() => handleScrapeAllUrls()}
						disabled={isClicked}
					>
						{isClicked ? "Scrapping..." : "Scrape Links"}
					</button>
					<input
						type="number"
						disabled
						name="number"
						value={totalPages}
						style={{
							width: "80px",
							padding: "8px",
							borderRadius: "5px",
							margin: "5px",
						}}
					/>
					<input
						type="number"
						min={1}
						name="number"
						onChange={handleNoChange}
						value={no}
						style={{
							width: "80px",
							padding: "8px",
							borderRadius: "5px",
							margin: "5px",
						}}
					/>
					<span className="text-white mx-1">
						Total Products: {urls?.length}
					</span>

					{/* <button
                        className={`bg-main-yellow hover:bg-main-yellow-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                        onClick={handleStopProcess}
                        // disabled={processing || urls.length === 0}
                    >
                        Stop
                    </button> */}
				</div>
				{loading ? (
					<div className="flex text-white justify-center items-center min-h-[300px]">
						Loading...
					</div>
				) : (
					<Table
						aria-label="Example table with client-side pagination"
						style={{ color: "white" }}
						bottomContent={
							<div className="flex w-full justify-center">
								<Pagination
									isCompact
									showControls
									showShadow
									color="default"
									page={page}
									total={pages}
									onChange={setPage}
									style={{ color: "white" }}
								/>
							</div>
						}
					>
						<TableHeader>
							<TableColumn>No:</TableColumn>
							<TableColumn>Url</TableColumn>
							<TableColumn>Action</TableColumn>
						</TableHeader>
						<TableBody>
							{items?.map((item, index) => (
								<TableRow key={index}>
									<TableCell>
										{(page - 1) * rowsPerPage + index + 1}
									</TableCell>
									<TableCell>{item}</TableCell>
									<TableCell>
										<ShowActiveUrls
											item={item}
											category={catData.category}
											uniqueParts={uniqueParts}
											handleSelectItem={handleSelectItem}
											isSelected={selectedItems.includes(
												item,
											)}
										/>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				)}
			</div>
		</div>
	);
}
