"use client";

import { useEffect } from "react";
import styles from "./InstagramEmbed.module.css";

interface InstagramEmbedProps {
	url: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "//www.instagram.com/embed.js";
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div className="container mx-auto component-mb ">
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
