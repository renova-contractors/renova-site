import { getBlogData } from "@/lib/getBlogData/getBlogData";
import { LocationsList } from "@/components/LocationsList/LocationsList";
import { Metadata } from "next";
import { BlogPageClient } from "./components/BlogPageClient";

export const metadata: Metadata = {
	title: 'Blog | RENOVA Contractors',
	description: 'Check out recent information and useful articles',
	alternates: {
		canonical: "https://www.renova.contractors/blog"
	}
};

const page = async () => {
	let blogData;

	try {
		blogData = await getBlogData();
		
		// Ensure blogData is an array and filter out invalid entries
		if (!Array.isArray(blogData)) {
			console.error('Blog data is not an array:', blogData);
			blogData = [];
		} else {
			// Filter out null/undefined values and ensure required fields exist
			blogData = blogData
				.filter((item: any) => {
					if (!item || typeof item !== 'object') return false;
					if (!item.url) return false;
					const hasTitle = !!(item?.cardTitle || item?.metaTitle || item?.title);
					const hasDescription = !!(item?.cardDescription || item?.metaDescription || item?.description);
					return hasTitle && hasDescription;
				})
				.map((item: any) => ({
					markdown: item?.markdown || '',
					url: item?.url || '',
					createdAt: item?.createdAt || new Date().toISOString(),
					cardTitle: item?.cardTitle || item?.metaTitle || item?.title || 'Untitled',
					cardDescription: item?.cardDescription || item?.metaDescription || item?.description || '',
					category: item?.category || ''
				}))
				.filter((item: any) => item.url && item.cardTitle); // Final safety check
		}
	} catch (error) {
		console.error('Error fetching blog data:', error);
		blogData = [];
	}

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
				<BlogPageClient initialBlogData={blogData} />
				<LocationsList />
			</main>
		</>
	);
};

export default page;
