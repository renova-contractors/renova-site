import Image from "next/image";
import circle from "/public/logo/why_section.svg";
import contact from "/public/logo/contact.svg";
import ReactMarkdown from "react-markdown";
/* import TrustanalyticaBadge from "../Widgets/ReviewsBadge";
 */ import { WhyDropdowns } from "./WhyDropdowns";

type PropsObj = {
	id: number;
	title: string;
	description: string;
};

type Props = {
	whyArray: PropsObj[];
	whyGrid: string[];
	whyMarkdown: string;
	isMobile: boolean;
};

export const MainWhySection: React.FC<Props> = ({
	whyArray,
	whyGrid,
	whyMarkdown,
	isMobile,
}) => {
	return (
		<section
			id="why-us"
			className="container component-mb mx-auto relative z-10"
			aria-labelledby="why-us-heading"
		>
			<h2
				id="why-us-heading"
				className="custom-heading first-letter:text-main-yellow"
			>
				Why choose us?
			</h2>

			{/* Mobile horizontal scroll */}
			{isMobile ? (
				<ul className="flex overflow-x-auto overflow-y-hidden slider-gap inside-mb no-scrollbar">
					{whyArray.map((step) => (
						<li
							key={step.id}
							className="min-w-[300px] max-w-[300px] lg:min-w-[350px] lg:max-w-[350px] min-h-[200px] border border-white p-5 text-left rounded-3xl"
						>
							<div className="mb-5 flex items-center">
								<Image
									src={contact}
									alt="Why choose us icon"
									width={32}
									height={32}
								/>
								<h3 className="ml-2 text-white font-light text-title">
									{step.title}
								</h3>
							</div>
							<p className="white-paragraph text-base">
								{step.description}
							</p>
						</li>
					))}
				</ul>
			) : (
				<WhyDropdowns whyArray={whyArray} />
			)}

			{/* Short grid of features */}
			<ul className="w-max md:mx-auto justify-center grid grid-cols-1 md:grid-cols-2 grid-rows-2 text-title text-left gap-[30px] md:gap-10 inside-mb text-white">
				{whyGrid.map((item, index) => (
					<li key={index} className="flex items-center gap-[10px]">
						<Image
							src={circle}
							alt="Checkmark"
							width={16}
							height={16}
						/>
						{item}
					</li>
				))}
			</ul>

			{/* Extra markdown content */}
			{whyMarkdown && (
				<div className="sm:w-2/3 max-sm:hidden">
					<ReactMarkdown className="markdown-b markdown">
						{whyMarkdown}
					</ReactMarkdown>
				</div>
			)}

			{/* Future widgets */}
			{/* <TrustanalyticaBadge /> */}
			{/* <Reviews /> */}
			{/* <FAQ faqItems={faqItems} /> */}
		</section>
	);
};
