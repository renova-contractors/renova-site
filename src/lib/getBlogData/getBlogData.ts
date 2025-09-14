export const getBlogData = async (search = ""): Promise<any> => {
	let res;

	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

	if (!backendUrl) {
		console.error('NEXT_PUBLIC_BACKEND_URL is not defined');
		throw new Error("Backend URL is not configured");
	}

	if (search === "") {
		res = await fetch(`${backendUrl}/blog/`);
	} else {
		// Handle category filtering
		if (search.startsWith('category/')) {
			const category = search.replace('category/', '');
			res = await fetch(`${backendUrl}/blog?category=${category}`);
		} else {
			res = await fetch(`${backendUrl}/blog/${search}`);
		}
	}

	if (!res.ok) {
		console.error(`API request failed: ${res.status} ${res.statusText}`);
		throw new Error("Failed to fetch data");
	}

	return res.json();
};
