import Link from "next/link";
import React from "react";

type PaginationProps = {
	totalPages: number;
	currentPage: number;
	basePath: string;
};

const Pagination: React.FC<PaginationProps> = ({
	totalPages,
	currentPage,
	basePath,
}) => {
	return (
		<div className="mx-auto w-max component-mb">
			{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
				<Link
					className={`mx-5  catalog-button ${
						currentPage == page ||
						(!page && "catalog-button-active")
					}`}
					key={page}
					href={`/catalog/${basePath}?page=${page}`}
					passHref
				>
					{page}
				</Link>
			))}
		</div>
	);
};

export default Pagination;
