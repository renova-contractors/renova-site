import Image from "next/image";

import star from "/public/logo/material-symbols_star.svg";

type Props = {
	image: string;
	service: string;
	date: string;
	title: string;
	text: string;
	name: string;
};

export const ReviewSlide: React.FC<Props> = ({
	image,
	service,
	date,
	title,
	text,
	name,
}: any) => {
	return (
		<div className="flex max-md:flex-col h-auto w-full mt-[5px] mb-[60px]">
			<Image
				src={image}
				className="w-[72px] h-[72px] max-md:mb-[10px]"
				alt=""
			/>

			<div className="flex flex-col md:ml-[10px]">
				<p className="font-normal">
					{service} | {date}
				</p>
				<h4>{title}</h4>
				<div className="flex gap-2">
					<Image src={star} height={24} width={24} alt="" />
					<Image src={star} height={24} width={24} alt="" />
					<Image src={star} height={24} width={24} alt="" />
				</div>
				<p>{text}</p>
				<p>{name}</p>
			</div>
		</div>
	);
};
