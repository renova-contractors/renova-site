import { BlogCards } from "../components/BlogCards";
import { BlogFilter } from "../components/BlogFilter";
import { getBlogData } from "@/lib/getBlogData/getBlogData";
import { LocationsList } from "@/components/LocationsList/LocationsList";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

type Props = {
	params: { list: string[] }; // Update type for 'list' to be an array of strings
};

export const metadata: Metadata = {
	title: 'Blog | RENOVA',
	description: 'Check out recent information and useful articles',
  }

const page: React.FC<Props> = async ({ params }: Props) => {
	let blogData;

	if (Object.keys(params).length === 0) {
		blogData = await getBlogData();
	} else {
		const paramsArray = params.list; // Use const for better immutability
		const search = paramsArray.join("/");
		blogData = await getBlogData(search);
	}

	// Schema for blog listing page
	const blogSchema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Blog",
				"@id": "https://www.renova.contractors/blog",
				"name": "RENOVA Contractors Blog",
				"description": "Expert home remodeling insights, tips, and guides from RENOVA Contractors LLC in Seattle",
				"url": "https://www.renova.contractors/blog",
				"publisher": {
					"@type": "Organization",
					"@id": "https://www.renova.contractors/#organization",
					"name": "RENOVA Contractors LLC",
					"url": "https://www.renova.contractors",
					"logo": {
						"@type": "ImageObject",
						"url": "https://www.renova.contractors/logo.png"
					}
				},
				"inLanguage": "en-US",
				"about": {
					"@type": "Thing",
					"name": "Home Remodeling",
					"description": "Professional home remodeling and renovation services in Seattle"
				},
				"mainEntityOfPage": {
					"@type": "WebPage",
					"@id": "https://www.renova.contractors/blog"
				}
			},
			{
				"@type": "WebPage",
				"@id": "https://www.renova.contractors/blog",
				"url": "https://www.renova.contractors/blog",
				"name": "Blog | RENOVA Contractors LLC",
				"description": "Check out recent information and useful articles about home remodeling in Seattle",
				"isPartOf": {
					"@type": "WebSite",
					"@id": "https://www.renova.contractors/#website",
					"name": "RENOVA Contractors LLC",
					"url": "https://www.renova.contractors"
				},
				"breadcrumb": {
					"@type": "BreadcrumbList",
					"itemListElement": [
						{
							"@type": "ListItem",
							"position": 1,
							"name": "Home",
							"item": "https://www.renova.contractors"
						},
						{
							"@type": "ListItem",
							"position": 2,
							"name": "Blog",
							"item": "https://www.renova.contractors/blog"
						}
					]
				}
			}
		]
	};

	return (
		<>
			{/* Enhanced SEO Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(blogSchema),
				}}
			/>
			<main>
				<BlogFilter />
				<BlogCards cards={blogData} />

				{/* <ServiceAreas /> */}
				<LocationsList />
			</main>
		</>
	);
};

export default page;
