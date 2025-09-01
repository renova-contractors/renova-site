import React from "react";
import Image from "next/image";
import contact from "/public/logo/contact.svg";

type PerksObj = {
	heading: string;
	paragraph: string ;
};

type Props = {
	perks: PerksObj[];
};

export const Perks: React.FC<Props> = ({ perks }: Props): JSX.Element => {
	return (
		<section className="container">
			<ul className="flex overflow-x-auto overflow-y-hidden slider-gap component-mb no-scrollbar ">
				{perks.map((item) => (
					<li
						key={item.heading}
						className="min-w-[300px] max-w-[300px]
					lg:min-w-[350px] lg:max-w-[350px] min-h-[200px]  border-solid border-[1px] hover:border-black border-white small-button text-left"
					>
						<div className="">
							<div className="mb-5 flex items-center">
								<Image src={contact} alt="" />
								<div className="flex relative left-[-9px]  justify-between ">
									<h3 className="text-white font-light text-title ">
										{item.heading}
									</h3>
								</div>
							</div>
							<p className="white-paragraph text-base">
								{item.paragraph}
							</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};
