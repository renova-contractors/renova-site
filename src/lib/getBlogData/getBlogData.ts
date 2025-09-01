export const getBlogData = async (search = ""): Promise<any> => {
	let res;

	if (search === "") {
		res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/`);
	} else {
		res = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${search}`,
		);
	}

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};
