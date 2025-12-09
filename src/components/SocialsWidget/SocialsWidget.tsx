"use client";

import { useState, useEffect, useRef } from "react";
import instagramStyles from "../Instagram/InstagramEmbed.module.css";

declare global {
	interface Window {
		instgrm?: {
			Embeds: {
				process: () => void;
			};
		};
	}
}

interface SocialsWidgetProps {
	instagramUrl?: string;
	mapUrl?: string;
}

export const SocialsWidget: React.FC<SocialsWidgetProps> = ({
	instagramUrl = "https://www.instagram.com/renova.contractors/?utm_source=ig_embed&amp;utm_campaign=loading",
	mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d172153.33373691145!2d-122.2695375!3d47.608715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xace89cdae412ae93%3A0x40ae051c2253149b!2sRenova%20Contractors%20LLC!5e0!3m2!1sen!2sus!4v1729059408347!5m2!1sen!2sus"
}) => {
	const [shouldLoad, setShouldLoad] = useState(false);
	const [instagramLoaded, setInstagramLoaded] = useState(false);
	const [mapLoaded, setMapLoaded] = useState(false);
	const [instagramError, setInstagramError] = useState(false);
	const [mapError, setMapError] = useState(false);
	const [instagramRetryCount, setInstagramRetryCount] = useState(0);
	const [mapRetryCount, setMapRetryCount] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const mapLoadTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const mapIframeRef = useRef<HTMLIFrameElement>(null);
	const instagramBlockRef = useRef<HTMLDivElement>(null);
	const scriptRef = useRef<HTMLScriptElement | null>(null);
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

	// Load Instagram script
	useEffect(() => {
		if (!shouldLoad || instagramLoaded) return;

		// Check if script already exists
		const existingScript = document.querySelector('script[src*="instagram.com/embed.js"]');
		if (existingScript) {
			// If script exists, wait a bit and process embeds
			setTimeout(() => {
				if (window.instgrm) {
					window.instgrm.Embeds.process();
					setInstagramLoaded(true);
				}
			}, 100);
			return;
		}

		const loadInstagramScript = (attempt: number = 0) => {
			if (attempt >= maxRetries) {
				setInstagramError(true);
				return;
			}

			try {
				const script = document.createElement("script");
				script.src = "https://www.instagram.com/embed.js";
				script.async = true;
				script.crossOrigin = "anonymous";
				
				script.onload = () => {
					setInstagramError(false);
					setInstagramRetryCount(0);
					// Process embeds after script loads
					setTimeout(() => {
						if (window.instgrm) {
							window.instgrm.Embeds.process();
							// Verify Instagram loaded by checking if content is rendered
							setTimeout(() => {
								const hasContent = instagramBlockRef.current?.querySelector('iframe') || 
								                  instagramBlockRef.current?.textContent?.trim();
								if (hasContent) {
									setInstagramLoaded(true);
								} else {
									setInstagramLoaded(true); // Set anyway to prevent infinite retry
								}
							}, 500);
						}
					}, 200);
				};

				script.onerror = () => {
					console.warn(`Instagram embed script load attempt ${attempt + 1} failed`);
					// Retry after delay
					setTimeout(() => {
						loadInstagramScript(attempt + 1);
					}, 2000 * (attempt + 1)); // Exponential backoff
					setInstagramRetryCount(attempt + 1);
				};

				document.body.appendChild(script);
				scriptRef.current = script;
			} catch (error) {
				console.error("Error loading Instagram embed script:", error);
				setInstagramError(true);
			}
		};

		loadInstagramScript();
	}, [shouldLoad, instagramLoaded]);

	// Load Google Maps iframe
	useEffect(() => {
		if (!shouldLoad || mapLoaded) return;

		setMapError(false);

		// Set timeout to detect if iframe doesn't load
		mapLoadTimeoutRef.current = setTimeout(() => {
			console.warn("Google Maps iframe load timeout");
			if (mapRetryCount < maxRetries) {
				setTimeout(() => {
					setMapRetryCount(prev => prev + 1);
				}, 2000 * (mapRetryCount + 1)); // Exponential backoff
			} else {
				setMapError(true);
			}
		}, maxLoadTime);

		return () => {
			if (mapLoadTimeoutRef.current) {
				clearTimeout(mapLoadTimeoutRef.current);
			}
		};
	}, [shouldLoad, mapLoaded, mapRetryCount]);

	const handleMapLoad = () => {
		if (mapLoadTimeoutRef.current) {
			clearTimeout(mapLoadTimeoutRef.current);
		}
		setMapLoaded(true);
		setMapError(false);
		setMapRetryCount(0);
	};

	const handleInstagramRetry = () => {
		setInstagramError(false);
		setInstagramRetryCount(0);
		setInstagramLoaded(false);
		if (window.instgrm) {
			window.instgrm.Embeds.process();
			setInstagramLoaded(true);
		} else {
			// Force reload if script not loaded
			const script = document.createElement("script");
			script.src = "https://www.instagram.com/embed.js";
			script.async = true;
			script.crossOrigin = "anonymous";
			script.onload = () => {
				if (window.instgrm) {
					window.instgrm.Embeds.process();
					setInstagramLoaded(true);
				}
			};
			document.body.appendChild(script);
		}
	};

	const handleMapRetry = () => {
		setMapError(false);
		setMapRetryCount(0);
		setMapLoaded(false);
	};

	return (
		<div
			ref={containerRef}
			id="socials"
			className="scroll-anchor container w-2/3 items-start flex max-sm:flex-col sm:justify-around my-auto component-mb max-sm:items-center mx-auto"
		>
			{/* Instagram Widget */}
			<div className="h-max">
				{instagramError && instagramRetryCount >= maxRetries ? (
					<div className="container mx-auto component-mb">
						<div className="w-[400px] max-sm:w-[360px] h-[400px] flex flex-col items-center justify-center bg-gray-100 rounded-[10px]">
							<p className="text-gray-600 mb-4">Unable to load Instagram feed</p>
							<button
								onClick={handleInstagramRetry}
								className="px-4 py-2 bg-main-yellow text-black rounded-lg hover:bg-yellow-400 transition-colors"
							>
								Retry
							</button>
						</div>
					</div>
				) : (
					<div ref={instagramBlockRef} className="container mx-auto component-mb">
						{instagramRetryCount > 0 && instagramRetryCount < maxRetries && (
							<div className="text-yellow-500 text-sm mb-2 text-center">
								Loading Instagram feed... ({instagramRetryCount}/{maxRetries})
							</div>
						)}
						{!shouldLoad && (
							<div className={`${instagramStyles.instagramEmbed} flex items-center justify-center bg-gray-100 rounded-[10px]`}>
								<p className="text-gray-600">Instagram feed will load shortly...</p>
							</div>
						)}
						{shouldLoad && (
							<blockquote
								className={`${instagramStyles.instagramEmbed} instagram-media`}
								data-instgrm-permalink={instagramUrl}
								data-instgrm-version="14"
							>
								<div className="">
									<a
										href={instagramUrl}
										style={{
											background: "#FFFFFF",
											lineHeight: "0",
											padding: "0 0",
											textAlign: "center",
											textDecoration: "none",
											width: "100%",
										}}
										target="_blank"
										rel="noopener noreferrer"
									>
										{/* Insert Instagram Embed HTML structure here */}
									</a>
								</div>
							</blockquote>
						)}
					</div>
				)}
			</div>

			{/* Google Maps Widget */}
			<div className="map-container">
				{mapError && mapRetryCount >= maxRetries ? (
					<div className="responsive-iframe flex flex-col items-center justify-center bg-gray-100 rounded-[15px]">
						<p className="text-gray-600 mb-4">Unable to load map</p>
						<button
							onClick={handleMapRetry}
							className="px-4 py-2 bg-main-yellow text-black rounded-lg hover:bg-yellow-400 transition-colors"
						>
							Retry
						</button>
					</div>
				) : (
					<div className="relative">
						{(!shouldLoad || (!mapLoaded && mapRetryCount === 0)) && (
							<div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-[15px] z-10">
								<div className="text-gray-600">
									{mapRetryCount > 0 ? `Loading map... (${mapRetryCount}/${maxRetries})` : "Loading map..."}
								</div>
							</div>
						)}
						<iframe
							ref={mapIframeRef}
							key={mapRetryCount} // Force reload on retry
							src={shouldLoad ? mapUrl : undefined}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="responsive-iframe"
							onLoad={handleMapLoad}
							title="Renova Contractors LLC location on Google Maps"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

