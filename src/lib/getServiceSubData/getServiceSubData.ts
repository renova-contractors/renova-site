export const getServiceSubData = async (params: any): Promise<any> => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/servicesub/${params.servicename}/`,
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};
