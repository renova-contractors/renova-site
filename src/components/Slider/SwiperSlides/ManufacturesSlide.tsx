import Image from "next/image";
import React from "react";

type Props = {
	image: string;
	height: number;
	width: number;
};

export const ManufacturesSlide: React.FC<Props> = ({
	image,
	height,
	width,
}: any) => {
	return (
		<div className="flex max-md:flex-col h-auto w-full mb-[46px]">
			<Image src={image} className="w-[141px] h-[85px]" alt="" />
		</div>
	);
};
