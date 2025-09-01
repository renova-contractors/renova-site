import ReactMarkdown from "react-markdown";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
	params: { url: string };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const id = params.url;

	const post = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/url/${id}`,
	).then((res) => res.json());

	// Assuming 'title' and 'description' properties exist in the API response
	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: post.metaTitle,
		description: post.metaDescription,
		openGraph: {
			images: ["/some-specific-page-image.jpg", ...previousImages],
		},
	};
}

export async function generateStaticParams(): Promise<{ url: string }[]> {
	const url = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/url/`,
	).then((res) => res.json());

	// Check if the response is an array before using .map
	if (Array.isArray(url)) {
		return url.map((post: { url: any }) => ({
			url: post.url,
		}));
	} else {
		// Handle the case where the response is not an array
		console.error("API response for blog/url/ is not an array");

		return []; // Or return an empty array if no valid data is present
	}
}

const page = async ({ params }: Props): Promise<JSX.Element> => {
	const getBlog = async (): Promise<any> => {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/url/${params.url}`,
		);
		return res.json();
	};

	const blog = await getBlog();
	const dateObj = new Date(blog.createdAt);
	const options = { year: "numeric", month: "long", day: "numeric" };
	const americanFormat = dateObj.toLocaleDateString("en-US", options as any);

	// JSON-LD Schema for Blog Posts
	const blogSchema = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"@id": `https://www.renova.contractors/blog/${params.url}`,
		"headline": blog.metaTitle || blog.title || "Blog Post",
		"description": blog.metaDescription || blog.description || "",
		"author": {
			"@type": "Organization",
			"@id": "https://www.renova.contractors/#organization",
			"name": "RENOVA Contractors LLC"
		},
		"publisher": {
			"@type": "Organization",
			"@id": "https://www.renova.contractors/#organization",
			"name": "RENOVA Contractors LLC",
			"logo": {
				"@type": "ImageObject",
				"url": "https://www.renova.contractors/logo.png"
			}
		},
		"datePublished": blog.createdAt,
		"dateModified": blog.updatedAt || blog.createdAt,
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": `https://www.renova.contractors/blog/${params.url}`
		},
		"image": blog.featuredImage || "https://www.renova.contractors/logo.png",
		"articleSection": blog.category || "Home Remodeling",
		"keywords": blog.tags || ["home remodeling", "renovation", "seattle"],
		"wordCount": blog.markdown ? blog.markdown.split(' ').length : 0
	};

	return (
		<>
			{/* SEO Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(blogSchema),
				}}
			/>
			<main className="first-component container">
				<section
					className="component-mb bg-white"
					dangerouslySetInnerHTML={{ __html: blog.markdown }}
				/>
				<div className="flex inside-mb text-main-yellow ">
					<h3>{americanFormat}</h3>
				</div>
			</main>
		</>
	);
};


export default page;
