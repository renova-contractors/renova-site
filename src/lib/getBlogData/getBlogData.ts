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
		res = await fetch(
			`${backendUrl}/blog/${search}`,
		);
	}

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};
