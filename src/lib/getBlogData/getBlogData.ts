export const getBlogData = async (search = ""): Promise<any> => {
	let res;

	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

	if (!backendUrl) {
		console.error('NEXT_PUBLIC_BACKEND_URL is not defined');
		throw new Error("Backend URL is not configured");
	}

	const url = search === "" ? `${backendUrl}/blog/` : `${backendUrl}/blog/${search}`;
	console.log('Fetching blog data from:', url);

	res = await fetch(url);

	if (!res.ok) {
		console.error(`API request failed: ${res.status} ${res.statusText}`);
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();
	console.log('Blog data received:', data);
	return data;
};
