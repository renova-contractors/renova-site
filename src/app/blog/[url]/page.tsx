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
	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

	if (!backendUrl) {
		console.error('NEXT_PUBLIC_BACKEND_URL is not defined');
		return {
			title: "Blog Post",
			description: "Blog post from RENOVA Contractors",
		};
	}

	const post = await fetch(
		`${backendUrl}/blog/url/${id}`,
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
	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

	if (!backendUrl) {
		console.error('NEXT_PUBLIC_BACKEND_URL is not defined');
		return [];
	}

	const url = await fetch(
		`${backendUrl}/blog/url/`,
	).then(async (res) => {
		if (!res.ok) {
			console.error(`API request failed: ${res.status} ${res.statusText}`);
			return [];
		}
		const contentType = res.headers.get('content-type');
		if (!contentType || !contentType.includes('application/json')) {
			console.error('API response is not JSON');
			return [];
		}
		return res.json();
	});

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
		const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

		if (!backendUrl) {
			console.error('NEXT_PUBLIC_BACKEND_URL is not defined');
			return {
				title: "Blog Post",
				description: "Blog post from RENOVA Contractors",
				markdown: "<p>Blog content not available.</p>",
				createdAt: new Date().toISOString(),
			};
		}

		const res = await fetch(
			`${backendUrl}/blog/url/${params.url}`,
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
