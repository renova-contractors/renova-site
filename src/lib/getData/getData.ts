import { getMockProducts } from "@/constants/catalog/mockProducts";

export async function getData(params: any, searchParams: any): Promise<any> {
	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

	if (!backendUrl) {
		console.warn('NEXT_PUBLIC_BACKEND_URL is not defined, using mock data');
		const category = Array.isArray(params.slug) && params.slug.length > 0 
			? params.slug[0] 
			: params.slug || undefined;
		return {
			data: getMockProducts(category),
			totalCount: getMockProducts(category).length,
		};
	}

	let url = `${backendUrl}`;

	// If params.slug is an array, join it into a string with slashes. If not an array, use it as is, or default to an empty string if undefined.
	const slug = Array.isArray(params.slug)
		? params.slug.join("/")
		: params.slug || "";

	// Prepare query parameters, ensuring none are undefined or null, and encode them properly.
	const queryParams = Object.entries(searchParams)
		.filter(([key, value]) => value != null) // Ensure no undefined or null values are included.
		.map(
			([key, value]) =>
				`${encodeURIComponent(key)}=${encodeURIComponent(
					value as any,
				)}`,
		)
		.join("&");

	// Construct the full URL. There's no need to try to join `slug` again because it's already a string.
	const fullUrl = `${url}/products/${slug}${
		queryParams ? `?${queryParams}` : ""
	}`;

	try {
		const response = await fetch(fullUrl);

		if (!response.ok) {
			throw new Error(`Failed to fetch data: ${response.status}`);
		}

		const data = await response.json();

		return data;
	} catch (error) {
		console.warn("Error fetching data from backend, using mock data:", error);
		// Return mock data instead of throwing error
		const category = Array.isArray(params.slug) && params.slug.length > 0 
			? params.slug[0] 
			: params.slug || undefined;
		return {
			data: getMockProducts(category),
			totalCount: getMockProducts(category).length,
		};
	}
}
