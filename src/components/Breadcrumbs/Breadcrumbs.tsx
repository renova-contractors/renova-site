"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
	homeElement: ReactNode;
	separator: ReactNode;
	containerClasses?: string;
	listClasses?: string;
	activeClasses?: string;
	capitalizeLinks?: boolean;
};

const NextBreadcrumb: React.FC<TBreadCrumbProps> = ({
	homeElement,
	separator,
	containerClasses = "",
	listClasses = "",
	activeClasses = "",
	capitalizeLinks = false,
}: TBreadCrumbProps) => {
	const pathname = usePathname();
	const pathNames = pathname.split("/").filter((path) => path);

	if (pathNames.length < 1) {
		return null; // Return null if the current path is the home page (no breadcrumbs needed)
	}

	return (
		<div className={`flex items-center ${containerClasses}`}>
			<ul className="flex">
				{/* Home Link */}
				<li className={listClasses}>
					<Link href="/">{homeElement}</Link>
				</li>
				{pathNames.length > 0 && separator}

				{/* Breadcrumb Links */}
				{pathNames.map((link, index) => {
					const isActive = index === pathNames.length - 1;
					// Build the full path for each breadcrumb step
					const href = `/${pathNames.slice(0, index + 1).join("/")}`;
					const itemClasses = isActive ? `${activeClasses}` : listClasses;
					const itemLink = capitalizeLinks
						? link.charAt(0).toUpperCase() + link.slice(1)
						: link;

					return (
						<div key={index} className="flex items-center">
							<li className={itemClasses}>
								{isActive ? (
									<span>{itemLink}</span>
								) : (
									<Link href={href}>{itemLink}</Link>
								)}
							</li>
							{/* Show separator if it's not the last breadcrumb */}
							{!isActive && separator}
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default NextBreadcrumb;
