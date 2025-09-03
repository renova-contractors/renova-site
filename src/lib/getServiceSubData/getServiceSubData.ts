export const getServiceSubData = async (params: any): Promise<any> => {
	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

	if (!backendUrl) {
		console.error('NEXT_PUBLIC_BACKEND_URL is not defined');
		throw new Error("Backend URL is not configured");
	}

	const res = await fetch(
		`${backendUrl}/servicesub/${params.servicename}/`,
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};
