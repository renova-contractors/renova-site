import Link from "next/link";

import { servicesOptionsBottom } from "@/constants/services/servicesButtons";

const ServicesButtons: React.FC<any> = ({ category }) => {
	const buttonsList = servicesOptionsBottom?.[category];

	if (buttonsList) {
	} else {
		console.error("Invalid category provided");
	}

	return (
		<section className="container ">
			{category &&
				buttonsList.map((buttonSection) => (
					<>
						<h3 className="title-white text-title-large mb-5">
							{buttonSection.heading}
						</h3>
						<p className="white-paragraph">
							{buttonSection.description}
						</p>
						<div className="flex flex-wrap gap-5 mt-10 mb-10 max-md:overflow-x-auto overflow-y-hidden max-md:flex-nowrap no-scrollbar">
							{buttonSection.items &&
								buttonSection.items.map((link, linkIndex) => (
									<Link
										key={linkIndex}
										href={link.url}
										passHref
									>
										{" "}
										{/* Added 'passHref' and 'key' for Link */}
										<div className="catalog-button">
											{link.text}
										</div>
									</Link>
								))}
						</div>
					</>
				))}
		</section>
	);
};

export default ServicesButtons;
