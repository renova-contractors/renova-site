import Image from "next/image";
import React from "react";

type Props = {
	image: string;
	height: string;
	width: string;
};

const MainSwiper: React.FC<Props> = ({ image, height, width }: any) => {
	return (
		<div className="w-full relative">
			<Image
				src={image}
				layout="responsive"
				className="object-cover w-full! h-full top-0 left-0"
				height={height}
				width={width}
				alt=""
			/>
		</div>
	);
};

export default MainSwiper;
