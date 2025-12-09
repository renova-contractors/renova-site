"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./InstagramEmbed.module.css";

declare global {
	interface Window {
		instgrm?: {
			Embeds: {
				process: () => void;
			};
		};
	}
}

interface InstagramEmbedProps {
	url: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
	const [loadError, setLoadError] = useState(false);
	const [retryCount, setRetryCount] = useState(0);
	const [shouldLoad, setShouldLoad] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const scriptRef = useRef<HTMLScriptElement | null>(null);
	const maxRetries = 3;

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

		// Check if script already exists
		const existingScript = document.querySelector('script[src*="instagram.com/embed.js"]');
		if (existingScript) {
			// If script exists, wait a bit and process embeds
			setTimeout(() => {
				if (window.instgrm) {
					window.instgrm.Embeds.process();
				}
			}, 100);
			return;
		}

		const loadScript = (attempt: number = 0) => {
			if (attempt >= maxRetries) {
				setLoadError(true);
				return;
			}

			try {
				const script = document.createElement("script");
				script.src = "https://www.instagram.com/embed.js";
				script.async = true;
				script.crossOrigin = "anonymous";
				
				script.onload = () => {
					setLoadError(false);
					setRetryCount(0);
					// Process embeds after script loads
					setTimeout(() => {
						if (window.instgrm) {
							window.instgrm.Embeds.process();
						}
					}, 200);
				};

				script.onerror = () => {
					console.warn(`Instagram embed script load attempt ${attempt + 1} failed`);
					// Retry after delay
					setTimeout(() => {
						loadScript(attempt + 1);
					}, 2000 * (attempt + 1)); // Exponential backoff
					setRetryCount(attempt + 1);
				};

				document.body.appendChild(script);
				scriptRef.current = script;
			} catch (error) {
				console.error("Error loading Instagram embed script:", error);
				setLoadError(true);
			}
		};

		loadScript();
	}, [url, shouldLoad]);

	// Retry handler
	const handleRetry = () => {
		setLoadError(false);
		setRetryCount(0);
		if (window.instgrm) {
			window.instgrm.Embeds.process();
		} else {
			// Force reload if script not loaded
			const script = document.createElement("script");
			script.src = "https://www.instagram.com/embed.js";
			script.async = true;
			script.crossOrigin = "anonymous";
			script.onload = () => {
				if (window.instgrm) {
					window.instgrm.Embeds.process();
				}
			};
			document.body.appendChild(script);
		}
	};

	if (loadError && retryCount >= maxRetries) {
		return (
			<div className="container mx-auto component-mb">
				<div className={`${styles.instagramEmbed} flex flex-col items-center justify-center bg-gray-100`}>
					<p className="text-gray-600 mb-4">Unable to load Instagram feed</p>
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

	return (
		<div ref={containerRef} className="container mx-auto component-mb">
			{retryCount > 0 && retryCount < maxRetries && (
				<div className="text-yellow-500 text-sm mb-2 text-center">
					Loading Instagram feed... ({retryCount}/{maxRetries})
				</div>
			)}
			<blockquote
				className={`${styles.instagramEmbed} instagram-media`}
				data-instgrm-permalink={url}
				data-instgrm-version="14"
			>
				<div className="">
					<a
						href={url}
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
		</div>
	);
};

export default InstagramEmbed;
