export const getBlogData = async (search = ""): Promise<any> => {
	let res;

	// Use local API route instead of direct backend calls
	const baseUrl = process.env.NODE_ENV === 'production' 
		? 'https://www.renova.contractors' 
		: 'http://localhost:3000';

	let url;
	if (search === "") {
		url = `${baseUrl}/api/blog`;
	} else if (search.startsWith('category/')) {
		const category = search.replace('category/', '');
		url = `${baseUrl}/api/blog?category=${category}`;
	} else {
		// For individual blog posts, still use backend directly
		const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
		if (!backendUrl) {
			console.error('NEXT_PUBLIC_BACKEND_URL is not defined');
			throw new Error("Backend URL is not configured");
		}
		url = `${backendUrl}/blog/${search}`;
	}

	console.log('Fetching blog data from:', url);

	res = await fetch(url, {
		next: { revalidate: 3600 } // Cache for 1 hour
	});

	if (!res.ok) {
		console.error(`API request failed: ${res.status} ${res.statusText}`);
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();
	console.log('Blog data received:', data);
	return data;
};
