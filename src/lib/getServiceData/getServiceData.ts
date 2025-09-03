export const getServicesData = async (params: any): Promise<any> => {
	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

	if (!backendUrl) {
		console.error('NEXT_PUBLIC_BACKEND_URL is not defined');
		throw new Error("Backend URL is not configured");
	}

	const res = await fetch(
		`${backendUrl}/services/${params.services}`,
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();
	
	// Debug logging
	
	// If the API returns an array, find the exact service that matches the URL
	if (Array.isArray(data)) {
		const exactService = data.find((service: any) => 
			service.service === params.services || 
			service.slug === params.services ||
			service.id === params.services
		);
		
		
		// Return the exact service if found, otherwise return the full array
		return exactService ? [exactService] : data;
	}
	
	return data;
};
