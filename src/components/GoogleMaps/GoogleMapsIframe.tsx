"use client";

import { useState, useEffect, useRef } from "react";

export const GoogleMapsIframe: React.FC = () => {
	const [loadError, setLoadError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [retryCount, setRetryCount] = useState(0);
	const [shouldLoad, setShouldLoad] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const loadTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const maxRetries = 3;
	const maxLoadTime = 10000; // 10 seconds timeout

	// IntersectionObserver for lazy loading
	useEffect(() => {
		if (!containerRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setShouldLoad(true);
						observer.disconnect();
					}
				});
			},
			{ rootMargin: "100px" } // Start loading 100px before element is visible
		);

		observer.observe(containerRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		if (!shouldLoad) return;

		setIsLoading(true);
		setLoadError(false);

		// Set timeout to detect if iframe doesn't load
		loadTimeoutRef.current = setTimeout(() => {
			console.warn("Google Maps iframe load timeout");
			if (retryCount < maxRetries) {
				setTimeout(() => {
					setRetryCount(prev => prev + 1);
				}, 2000 * (retryCount + 1)); // Exponential backoff
			} else {
				setLoadError(true);
				setIsLoading(false);
			}
		}, maxLoadTime);

		return () => {
			if (loadTimeoutRef.current) {
				clearTimeout(loadTimeoutRef.current);
			}
		};
	}, [retryCount, shouldLoad]);

	const handleLoad = () => {
		if (loadTimeoutRef.current) {
			clearTimeout(loadTimeoutRef.current);
		}
		setIsLoading(false);
		setLoadError(false);
	};

	const handleRetry = () => {
		setLoadError(false);
		setRetryCount(0);
		setIsLoading(true);
	};

	const mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d172153.33373691145!2d-122.2695375!3d47.608715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xace89cdae412ae93%3A0x40ae051c2253149b!2sRenova%20Contractors%20LLC!5e0!3m2!1sen!2sus!4v1729059408347!5m2!1sen!2sus";

	if (loadError && retryCount >= maxRetries) {
		return (
			<div className="map-container">
				<div className="responsive-iframe flex flex-col items-center justify-center bg-gray-100 rounded-[15px]">
					<p className="text-gray-600 mb-4">Unable to load map</p>
					<button
						onClick={handleRetry}
						className="px-4 py-2 bg-main-yellow text-black rounded-lg hover:bg-yellow-400 transition-colors"
					>
						Retry
					</button>
				</div>
			</div>
		);
	}

	if (!shouldLoad) {
		return (
			<div ref={containerRef} className="map-container">
				<div className="responsive-iframe flex items-center justify-center bg-gray-100 rounded-[15px]">
					<p className="text-gray-600">Map will load shortly...</p>
				</div>
			</div>
		);
	}

	return (
		<div ref={containerRef} className="map-container relative">
			{isLoading && (
				<div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-[15px] z-10">
					<div className="text-gray-600">
						{retryCount > 0 ? `Loading map... (${retryCount}/${maxRetries})` : "Loading map..."}
					</div>
				</div>
			)}
			<iframe
				ref={iframeRef}
				key={retryCount} // Force reload on retry
				src={mapUrl}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				className="responsive-iframe"
				onLoad={handleLoad}
				title="Renova Contractors LLC location on Google Maps"
			/>
		</div>
	);
};

