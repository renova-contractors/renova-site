'use client';

import { useState, useEffect } from "react";
import { BlogFilter } from "./BlogFilter";
import { BlogCards } from "./BlogCards";

interface BlogCardProps {
	markdown: string;
	url: string;
	createdAt: string;
	cardTitle: string;
	cardDescription: string;
	category?: string;
}

interface BlogPageClientProps {
	initialBlogData: BlogCardProps[];
}

export const BlogPageClient: React.FC<BlogPageClientProps> = ({ initialBlogData }) => {
	const [filteredBlogData, setFilteredBlogData] = useState<BlogCardProps[]>(initialBlogData);

	useEffect(() => {
		setFilteredBlogData(initialBlogData);
	}, [initialBlogData]);

	return (
		<>
			<BlogFilter allBlogData={initialBlogData} onFilterChange={setFilteredBlogData} />
			<BlogCards cards={filteredBlogData} />
		</>
	);
};

