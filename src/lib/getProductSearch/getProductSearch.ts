export async function getProductSearch(category: string, searchString: string) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/quries`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ category, searchString }),
		},
	);

	if (!response.ok) {
		throw new Error("Failed to fetch");
	}

	return response.json();
}
