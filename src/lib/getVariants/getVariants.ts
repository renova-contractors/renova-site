export const getVariantsData = async (variants, category) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/get-variants`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				category: category,
				modelsList: variants?.map((item) => item.model),
			}),
		},
	);

	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await response.json();
	return data;
};
