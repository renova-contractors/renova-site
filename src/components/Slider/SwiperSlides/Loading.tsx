import React from "react";
import ContentLoader from "react-content-loader";

const Loading = (props: any): JSX.Element => (
	<ContentLoader
		speed={2}
		width={1440} // Width of your image
		height={480} // Height of your image
		viewBox="0 0 1440 480"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="0" y="0" rx="15" ry="15" width="1440" height="480" />
	</ContentLoader>
);

export default Loading;
