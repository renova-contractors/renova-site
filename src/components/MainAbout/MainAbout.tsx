import Image from "next/image";
import { Button } from "../Button/Button";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

type Props = {
	h2: string;
	markdown: string;
	image: string;
	imageAlt: string;
};

export const MainAbout: React.FC<Props> = ({
	h2,
	markdown,
	image,
	imageAlt,
}) => {
	return (
		<section
			id="about"
			className="scroll-anchor container flex z-10 relative justify-between max-sm:hidden sm:flex-row md:gap-[11.08%] w-full max-w-screen-xl mx-auto mx-xl:items-center component-mb"
		>
			<div className="w-full md:w-[49.41%] md:max-w-[49.41%] text-main-gray">
				<span className="text-title text-white leading-[22px] md:leading-[28px]">
					ABOUT RENOVA
				</span>
				<h2 className="mt-[40px] xl:mt-[143px] custom-heading max-lg:text-[40px] leading-tight first-letter:text-main-yellow">
					{h2}
				</h2>
				<Image
					className="relative right-3 rounded-r-xl xl:hidden"
					src={image}
					alt={imageAlt}
					width={350}
					height={270}
				/>
			</div>
			<div className="flex flex-col w-full md:w-[50%] max-md:mt-[40px] text-main-gray">
				<ReactMarkdown className="inside-mb markdown">
					{markdown}
				</ReactMarkdown>
				<Button
					className=" w-max right-0 hover:bg-white hover:text-black transition duration-100"
					variant="secondary"
				>
					<Link title="About page" href="/about">
						More
					</Link>
				</Button>
			</div>
		</section>
	);
};
