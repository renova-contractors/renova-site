"use client";
import { useEffect, useState } from "react";

interface Location {
	latitude: number;
	longitude: number;
	city: string;
}

export const Geo: React.FC = () => {
	const [location, setLocation] = useState<Location | null>(null);

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					const { latitude, longitude } = position.coords;

					// Fetch city information using reverse geocoding API
					const reverseGeocodingAPIKey =
						"517294eb795e47baa1ca2529f2ceec12";
					const reverseGeocodingURL = `https://api.opencagedata.com/geocode/v1/json?key=${reverseGeocodingAPIKey}&q=${latitude}+${longitude}&pretty=1`;

					try {
						const response = await fetch(reverseGeocodingURL);
						const data = await response.json();

						// Extract city information from the response
						const city = data.results[0].components.city;

						setLocation({ latitude, longitude, city });
					} catch (error) {
						console.error(
							"Error fetching city information:",
							error,
						);
					}
				},
				(error) => {
					console.error("Error getting geolocation:", error.message);
				},
			);
		} else {
			console.error("Geolocation is not supported by your browser");
		}
	}, []);

	return (
		<div className="py-5 text-main-gray">
			{location ? (
				<p>Your city: {location.city}</p>
			) : (
				<p>Fetching location...</p>
			)}
		</div>
	);
};
