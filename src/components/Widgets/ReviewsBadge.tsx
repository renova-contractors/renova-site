// @ts-nocheck
/*eslint-disable*/

"use client";

import React, { useEffect } from "react";

const TrustanalyticaBadge = () => {
	useEffect(() => {
		// Create the script element
		const script = document.createElement("script");

		// Set the script attributes
		script.src =
			"https://app.trustanalytica.com/badge/reputation/HINEBHZs4JbZxxtNf-ywKFBp-jVcb-7Vgi7AfjuGhWEWlXzFd9NDY4AwstxqLFWW9V3Q-Q.js";
		script.async = true;

		// Append the script to the body
		document.body.appendChild(script);

		// Cleanup the script when the component unmounts
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<a href="https://trustanalytica.com/" title="Trustanalytica">
			<div className="trustanalytica-badge"></div>
		</a>
	);
};

export default TrustanalyticaBadge;
