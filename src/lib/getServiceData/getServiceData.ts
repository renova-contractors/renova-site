export const getServicesData = async (params: any): Promise<any> => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/services/${params.services}`,
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();
	
	// Debug logging
	console.log(`API Response for ${params.services}:`, data);
	
	// If the API returns an array, find the exact service that matches the URL
	if (Array.isArray(data)) {
		const exactService = data.find((service: any) => 
			service.service === params.services || 
			service.slug === params.services ||
			service.id === params.services
		);
		
		console.log(`Found exact service:`, exactService);
		
		// Return the exact service if found, otherwise return the full array
		return exactService ? [exactService] : data;
	}
	
	return data;
};
