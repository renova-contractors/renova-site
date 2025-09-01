import Image from "next/image";
import type { BackgroundPicture } from "@/types/backgroundPicture/backgroundPictureTypes";

interface BackgroundPicturesProps {
	pageType: BackgroundPicture[];
}

export const BackgroundPictures: React.FC<BackgroundPicturesProps> = ({
	pageType,
}) => {
	const background = pageType;

	return (
		<div className="w-full 2xl:max-w-[1680px] mx-auto relative z-0">
			{background?.map(({ image, size, styles, alt, id }: any) => (
				<Image
					key={id}
					src={image}
					height={size}
					width={size}
					className={styles}
					alt={alt}
				/>
			))}
		</div>
	);
};
