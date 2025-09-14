import ReactMarkdown from "react-markdown";
import type { Metadata, ResolvingMetadata } from "next";
import Markdown from "react-markdown";

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
			title: "Blog Post | RENOVA Contractors LLC",
			description: "Expert home remodeling insights and tips from RENOVA Contractors LLC in Seattle.",
		};
	}

	const post = await fetch(
		`${backendUrl}/blog/url/${id}`,
	).then((res) => res.json());

	const previousImages = (await parent).openGraph?.images || [];
	const publishedDate = post.createdAt ? new Date(post.createdAt).toISOString() : new Date().toISOString();
	const modifiedDate = post.updatedAt ? new Date(post.updatedAt).toISOString() : publishedDate;

	// Generate keywords from title and description
	const titleWords = (post.metaTitle || post.title || '').toLowerCase().split(' ').filter(word => word.length > 3);
	const descriptionWords = (post.metaDescription || post.description || '').toLowerCase().split(' ').filter(word => word.length > 3);
	const combinedKeywords = Array.from(new Set([...titleWords, ...descriptionWords, 'home remodeling', 'seattle', 'renovation', 'contractors', 'renova']));

	return {
		title: {
			default: post.metaTitle || post.title || "Blog Post",
			template: "%s | RENOVA Contractors LLC"
		},
		description: post.metaDescription || post.description || "Expert home remodeling insights and tips from RENOVA Contractors LLC in Seattle.",
		keywords: combinedKeywords,
		authors: [{ name: "RENOVA Contractors LLC" }],
		creator: "RENOVA Contractors LLC",
		publisher: "RENOVA Contractors LLC",
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
		alternates: {
			canonical: `https://www.renova.contractors/blog/${id}`
		},
		openGraph: {
			type: 'article',
			title: post.metaTitle || post.title || "Blog Post",
			description: post.metaDescription || post.description || "Expert home remodeling insights and tips from RENOVA Contractors LLC in Seattle.",
			url: `https://www.renova.contractors/blog/${id}`,
			siteName: "RENOVA Contractors LLC",
			images: [
				{
					url: post.featuredImage || "https://www.renova.contractors/logo.png",
					width: 1200,
					height: 630,
					alt: post.metaTitle || post.title || "Blog Post",
				},
				...previousImages
			],
			locale: 'en_US',
			publishedTime: publishedDate,
			modifiedTime: modifiedDate,
			authors: ['RENOVA Contractors LLC'],
			section: post.category || 'Home Remodeling',
			tags: post.tags || ['home remodeling', 'renovation', 'seattle'],
		},
		twitter: {
			card: 'summary_large_image',
			site: '@renova.contractors',
			creator: '@renova.contractors',
			title: post.metaTitle || post.title || "Blog Post",
			description: post.metaDescription || post.description || "Expert home remodeling insights and tips from RENOVA Contractors LLC in Seattle.",
			images: [post.featuredImage || "https://www.renova.contractors/logo.png"],
		},
		other: {
			'article:published_time': publishedDate,
			'article:modified_time': modifiedDate,
			'article:author': 'RENOVA Contractors LLC',
			'article:section': post.category || 'Home Remodeling',
			'article:tag': Array.isArray(post.tags) ? post.tags.join(', ') : (post.tags || 'home remodeling, renovation, seattle'),
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
		`${backendUrl}/blog/`,
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
	
	// Debug: Log the createdAt value to see what we're getting
	console.log('Blog createdAt from database:', blog.createdAt);
	console.log('Blog object keys:', Object.keys(blog));
	
	// Use createdAt from the database, with proper fallback
	const createdAtDate = blog.createdAt ? new Date(blog.createdAt) : new Date();
	const options = { year: "numeric", month: "long", day: "numeric" };
	const americanFormat = createdAtDate.toLocaleDateString("en-US", options as any);
	
	// Debug: Log the formatted date
	console.log('Formatted date:', americanFormat);
	console.log('CreatedAt Date object:', createdAtDate);

	// Enhanced JSON-LD Schema for Blog Posts (2025 SEO Standards)
	const publishedDate = createdAtDate.toISOString();
	const modifiedDate = blog.updatedAt ? new Date(blog.updatedAt).toISOString() : publishedDate;
	const wordCount = blog.markdown ? blog.markdown.split(' ').length : 0;
	const readingTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words per minute

	const blogSchema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "BlogPosting",
				"@id": `https://www.renova.contractors/blog/${params.url}`,
				"headline": blog.metaTitle || blog.title || "Blog Post",
				"description": blog.metaDescription || blog.description || "",
				"author": {
					"@type": "Organization",
					"@id": "https://www.renova.contractors/#organization",
					"name": "RENOVA Contractors LLC",
					"url": "https://www.renova.contractors",
					"logo": {
						"@type": "ImageObject",
						"url": "https://www.renova.contractors/logo.png"
					}
				},
				"publisher": {
					"@type": "Organization",
					"@id": "https://www.renova.contractors/#organization",
					"name": "RENOVA Contractors LLC",
					"url": "https://www.renova.contractors",
					"logo": {
						"@type": "ImageObject",
						"url": "https://www.renova.contractors/logo.png",
						"width": 200,
						"height": 200
					}
				},
				"datePublished": publishedDate,
				"dateModified": modifiedDate,
				"mainEntityOfPage": {
					"@type": "WebPage",
					"@id": `https://www.renova.contractors/blog/${params.url}`
				},
				"image": {
					"@type": "ImageObject",
					"url": blog.featuredImage || "https://www.renova.contractors/logo.png",
					"width": 1200,
					"height": 630,
					"caption": blog.metaTitle || blog.title || "Blog Post"
				},
				"articleSection": blog.category || "Home Remodeling",
				"keywords": Array.isArray(blog.tags) ? blog.tags : (blog.tags ? blog.tags.split(',').map(tag => tag.trim()) : ["home remodeling", "renovation", "seattle"]),
				"wordCount": wordCount,
				"timeRequired": `PT${readingTime}M`,
				"inLanguage": "en-US",
				"isPartOf": {
					"@type": "Blog",
					"@id": "https://www.renova.contractors/blog",
					"name": "RENOVA Contractors Blog",
					"description": "Expert home remodeling insights and tips from RENOVA Contractors LLC in Seattle"
				},
				"about": {
					"@type": "Thing",
					"name": blog.category || "Home Remodeling",
					"description": `Professional ${blog.category || 'home remodeling'} services in Seattle`
				}
			},
			{
				"@type": "WebPage",
				"@id": `https://www.renova.contractors/blog/${params.url}`,
				"url": `https://www.renova.contractors/blog/${params.url}`,
				"name": blog.metaTitle || blog.title || "Blog Post",
				"description": blog.metaDescription || blog.description || "",
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
						},
						{
							"@type": "ListItem",
							"position": 3,
							"name": blog.metaTitle || blog.title || "Blog Post",
							"item": `https://www.renova.contractors/blog/${params.url}`
						}
					]
				},
				"datePublished": publishedDate,
				"dateModified": modifiedDate,
				"author": {
					"@type": "Organization",
					"@id": "https://www.renova.contractors/#organization",
					"name": "RENOVA Contractors LLC"
				}
			},
			{
				"@type": "BreadcrumbList",
				"@id": `https://www.renova.contractors/blog/${params.url}#breadcrumb`,
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
					},
					{
						"@type": "ListItem",
						"position": 3,
						"name": blog.metaTitle || blog.title || "Blog Post",
						"item": `https://www.renova.contractors/blog/${params.url}`
					}
				]
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
			
			

			<main className="container  mx-auto px-4 py-12 sm:w-2/3">
				{/* Article Header */}
				<header className="mb-16 mt-[200px] max-sm:mt-[150px] text-main-gray">
					
					
					{/* Article Meta */}
					<div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 text-main-gray">
						<time dateTime={publishedDate} className="flex items-center text-main-gray">
							<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
							{americanFormat}
						</time>
						
						{readingTime > 0 && (
							<span className="flex items-center ">
								<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								{readingTime} min read
							</span>
						)}
						
						
					</div>

					{/* Article Description */}
					{(blog.metaDescription || blog.description) && (
						<p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-main-gray">
							{blog.metaDescription || blog.description}
						</p>
					)}

				</header>

				{/* Article Content */}
				<article className="prose prose-lg max-w-none mb-20">
					<Markdown className="markdown">{blog.markdown}</Markdown>
				</article>

				{/* Article Footer */}
				<footer className="mt-20 pt-12 border-t border-gray-200">
					<div className="flex flex-wrap items-center justify-between">
						<div className="flex items-center space-x-4">
							<div className="flex-shrink-0">
								<img
									src="https://www.renova.contractors/_next/static/media/logo_bottom.a4b3622a.svg"
									alt="RENOVA Contractors LLC"
									className="w-12 h-12 rounded-full"
								/>
							</div>
							<div>
								<p className="text-sm font-medium text-gray-900">RENOVA Contractors LLC</p>
								<p className="text-sm text-gray-600">Professional Home Remodeling in Seattle</p>
							</div>
						</div>
						
						{/* Tags */}
						{blog.tags && (
							<div className="mt-4 sm:mt-0">
								<div className="flex flex-wrap gap-2">
									{Array.isArray(blog.tags) ? blog.tags.map((tag, index) => (
										<span
											key={index}
											className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
										>
											{tag}
										</span>
									)) : blog.tags.split(',').map((tag, index) => (
										<span
											key={index}
											className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
										>
											{tag.trim()}
										</span>
									))}
								</div>
							</div>
						)}
					</div>
				</footer>
			</main>
		</>
	);
};


export default page;
