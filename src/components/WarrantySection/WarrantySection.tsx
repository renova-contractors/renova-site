import Image from "next/image";
import warrantyImage from "/public/contentImages/warranty.jpg";

interface WarrantySectionProps {
	phrase: string;
	image: string;
	imageAlt: string;
	h2: string;
	paragraph1: string;
	paragraph2: string;
	price: string;
	isMobile: boolean;
}

export const WarrantySection: React.FC<WarrantySectionProps> = ({
	phrase,
	image,
	imageAlt,
	h2,
	paragraph1,
	paragraph2,
	price,
	isMobile,
}) => {
	return (
		<section className="container component-mb">
			{isMobile ? (
				// Mobile
				<div className="lg:hidden max-sm:[block w-full mx-auto max-w-[1440px] relative z-10 component-mb flex flex-col items-center">
					<div className="flex-col">
						<div className="max-w-full">
							<p className="text-white font-light text-title mb-5">
								{phrase}
							</p>
							<h2 className="custom-heading max-md:text-[40px] leading-tight max-lg:text-[45px] mb-5 first-letter:text-main-yellow">
								{h2}
							</h2>
						</div>
						<Image
							className="float-right  rounded-l-xl relative left-3"
							src={warrantyImage}
							height={440}
							width={440}
							alt="Warranty image"
						/>
					</div>
					<div className="flex">
						<div className="mt-[44px]">
							<h3 className="mb-8 text-main-yellow items-center">
								{price}
							</h3>
							<p className="text-main-gray ml-auto mb-10 max-md:mb-2">
								{paragraph1}
							</p>
							<p className="text-main-gray ml-auto">
								{paragraph2}
							</p>
						</div>
					</div>
				</div>
			) : (
				// Desktop
				<div className="lg:[block w-full mx-auto max-w-[1440px] relative z-10 flex flex-col item-center lg:justify-end">
					<div className="flex justify-end">
						<div className="text-right">
							<p className="text-white font-light text-title">
								{phrase}
							</p>
							<h2 className="custom-heading max-lg:text-[40px] leading-tight first-letter:text-main-yellow mb-10">
								{h2}
							</h2>
						</div>
					</div>
					<div className="flex gap-10 md:items-start">
						<div className="relative h-[300px] w-[600px] max-xl:hidden">
							<Image
								src={warrantyImage}
								fill
								alt="Warranty image"
								className="rounded-l-xl sm:rounded-3xl" // Ensure the image stretches to full width
							/>
						</div>
						<div className="lg:max-w-[826px] lg:items-end">
							<p className="mb-8 text-main-yellow items-center">
								{price}
							</p>
							<p className="text-main-gray mb-10">{paragraph1}</p>
							<p className="text-main-gray">{paragraph2}</p>
							<div className="relative lg:hidden mt-[40px] sm:mx-auto sm:w-full"></div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};
