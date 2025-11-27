import Image from "next/image";
import contact_banner from "/public/contentImages/mainHero/contact-banner.webp";
import mobile_banner from "/public/contentImages/mainHero/contact-banner-mob.png";

interface CatalogBannerProps {
	isMobile: boolean;
}

export const CatalogBanner: React.FC<CatalogBannerProps> = ({
	isMobile,
}): any => (
	<aside className="hover:cursor-pointer container scaler component-mb w-full flex relative  mx-auto justify-center items-center">
		<div className="relative w-full" style={{ height: "auto" }}>
			{isMobile ? (
				<Image
					alt="banner-image"
					className="w-full rounded-[40px] max-sm:rounded-[20px]"
					src={mobile_banner}
					layout="responsive"
					objectFit="contain"
					width={1440} // Замените на фактическую ширину изображения
					height={480} // Замените на фактическую высоту изображения
				/>
			) : (
				<Image
					alt="banner-image"
					className="w-full rounded-3xl"
					src={contact_banner}
					layout="responsive"
					objectFit="contain"
					width={1440} // Замените на фактическую ширину изображения
					height={480} // Замените на фактическую высоту изображения
				/>
			)}
		</div>
	</aside>
);

{
	/* <div className="container mx-auto  flex flex-col md:flex-row md:justify-around md:items-center component-mb">
		<p className="text-title-large max-lg:text-[24px] font-black text-main-yellow">
			Need Help?
		</p>
		<p className="text-title md:hidden text-white max-lg:text-[24px]">
			FREE DESIGN HELP
		</p>

		<p className="text-main-gray max-w-[385px]">
			Work with one of our expert designers! Theyll help design your space
			in your style, to fit your needs.
		</p>
		<p className="text-title text-white max-md:hidden max-lg:text-[24px]">
			FREE DESIGN HELP
		</p>

		<FormMain />
	</div> */
}
