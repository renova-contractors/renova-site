// @ts-nocheck
/*eslint-disable*/
import React from "react";
import ContentLoader from "react-content-loader";

const Loading = (props: any) => (
	<ContentLoader
		speed={2}
		width={350}
		height={516}
		viewBox="0 0 350 516"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="0" y="0" rx="15" ry="15" width="350" height="324" />
		<rect x="20" y="350" rx="5" ry="5" width="310" height="24" />
		<rect x="20" y="390" rx="5" ry="5" width="150" height="20" />
		<rect x="20" y="430" rx="5" ry="5" width="100" height="20" />
		<rect x="20" y="470" rx="5" ry="5" width="200" height="24" />
	</ContentLoader>
);

export default Loading;
