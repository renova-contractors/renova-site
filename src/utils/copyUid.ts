import toast from "react-hot-toast";

// Function to get text after a specific segment
function getTextAfterSegment(url: string, segment: string) {
	const parts = url.split("/");
	const segmentIndex = parts.indexOf(segment);

	// Check if the segment exists and there's something after it
	if (segmentIndex !== -1 && segmentIndex < parts.length - 1) {
		const textAfterSegment = parts.slice(segmentIndex + 1).join("/");
		// Copy the result to the clipboard
		navigator.clipboard
			.writeText(textAfterSegment)
			.then(() => {
				toast.success("uid copied successfully");
			})
			.catch((err) => {
				console.error("Failed to copy text after segment:", err);
			});
		return textAfterSegment;
	} else {
		return null; // Segment not found or nothing after it
	}
}

// Function to get query parameter value
function getQueryParam(url: string, param: string) {
	const urlObj = new URL(url);
	const queryParamValue = urlObj.searchParams.get(param);
	if (queryParamValue) {
		// Copy the result to the clipboard
		navigator.clipboard
			.writeText(queryParamValue)
			.then(() => {
				toast.success("uid copied successfully");
			})
			.catch((err) => {
				console.error("Failed to copy query parameter value:", err);
			});
	}
	return queryParamValue;
}

function getValueAfterLastDash(url: any) {
	const regex = /-([^/-]+)\.html$/;
	const match = url.match(regex);
	const result = match ? match[1] : null;
	// Copy the result to the clipboard
	navigator.clipboard
		.writeText(result)
		.then(() => {
			toast.success("uid copied successfully");
		})
		.catch((err) => {
			console.error("Failed to copy", err);
			// Handle clipboard write error if needed
		});

	return result;
}

function getTextFromUrl(url: string) {
	// Find the position of the last '/' and the second last '/'
	const lastSlashIndex = url.lastIndexOf("/");
	const secondLastSlashIndex = url.lastIndexOf("/", lastSlashIndex - 1);

	// Extract the substring between the second last '/' and the last '/'
	const result = url.substring(secondLastSlashIndex + 1, lastSlashIndex);
	// Copy the result to the clipboard
	navigator.clipboard
		.writeText(result)
		.then(() => {
			toast.success("uid copied successfully");
		})
		.catch((err) => {
			console.error("Failed to copy", err);
			// Handle clipboard write error if needed
		});
	return result;
}

export const copyUid = (category: string, url: string) => {
	let uid;
	switch (category) {
		case "carpets":
			uid = getTextAfterSegment(url, "details");
			return uid;
		case "hardwoods":
			uid = getTextAfterSegment(url, "details");
			return uid;
		case "vinyls":
			uid = getTextAfterSegment(url, "details");
			return uid;
		case "tiles":
			uid = getQueryParam(url, "uid");
			return uid;
		case "sinks":
			uid = getQueryParam(url, "uid");
			return uid;
		case "faucets":
			uid = getQueryParam(url, "uid");
			return uid;
		case "vanities":
			uid = getQueryParam(url, "uid");
			return uid;
		case "doors":
			uid = getQueryParam(url, "uid");
			return uid;
		case "countertops":
			uid = getTextFromUrl(url);
			return uid;
		case "laminates":
			uid = getValueAfterLastDash(url);
			return uid;
		default:
			return uid;
	}
};
