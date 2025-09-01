import Image from "next/image";

type StaticImageData = {
	src: string;
	height: number;
	width: number;
	blurDataURL?: string;
};

type Props = {
	name: string;
	image: StaticImageData;
	title: string;
};

export const PersonCard: React.FC<Props> = ({ name, image, title }) => {
	return (
		<li key={name} style={{ flex: "0 0 auto", marginRight: "16px" }}>
			<Image alt="worker-image" src={image} height={324} width={324} />
			<h4 className="text-title text-white">{name}</h4>
			<h4 className="gray-paragraph">{title}</h4>
		</li>
	);
};
