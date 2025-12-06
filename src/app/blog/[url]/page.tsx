import ReactMarkdown from "react-markdown";
import type { Metadata, ResolvingMetadata } from "next";
import Markdown from "react-markdown";
import { CostTables } from "@/components/CostTables/CostTables";
import { notFound } from "next/navigation";

type Props = {
	params: { url: string };
};

// Allow dynamic params for blog posts that aren't statically generated
export const dynamicParams = true;
export const dynamic = 'force-dynamic';

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

	let post;
	try {
		let response = await fetch(
			`${backendUrl}/blog/url/${id}`,
			{ cache: 'no-store' }
		);
		
		if (!response.ok) {
			// Try alternative format
			response = await fetch(
				`${backendUrl}/blog/${id}`,
				{ cache: 'no-store' }
			);
		}
		
		if (!response.ok) {
			post = null;
		} else {
			post = await response.json();
		}
	} catch (error) {
		console.error('Error fetching blog data for metadata:', error);
		post = null;
	}

	const previousImages = (await parent).openGraph?.images || [];
	const publishedDate = post?.createdAt ? new Date(post.createdAt).toISOString() : new Date().toISOString();
	const modifiedDate = post?.updatedAt ? new Date(post.updatedAt).toISOString() : publishedDate;

	// Safe access with fallbacks
	const metaTitle = post?.metaTitle || post?.title || "Blog Post";
	const metaDescription = post?.metaDescription || post?.description || "Expert home remodeling insights and tips from RENOVA Contractors LLC in Seattle.";
	const featuredImage = post?.featuredImage || "https://www.renova.contractors/logo.png";
	const category = post?.category || 'Home Remodeling';
	const tags = post?.tags || ['home remodeling', 'renovation', 'seattle'];

	return {
		title: {
			default: metaTitle,
			template: "%s | RENOVA Contractors LLC"
		},
		description: metaDescription,
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
			title: metaTitle,
			description: metaDescription,
			url: `https://www.renova.contractors/blog/${id}`,
			siteName: "RENOVA Contractors LLC",
			images: [
				{
					url: featuredImage,
					width: 1200,
					height: 630,
					alt: metaTitle,
				},
				...previousImages
			],
			locale: 'en_US',
			publishedTime: publishedDate,
			modifiedTime: modifiedDate,
			authors: ['RENOVA Contractors LLC'],
			section: category,
			tags: Array.isArray(tags) ? tags : ['home remodeling', 'renovation', 'seattle'],
		},
		twitter: {
			card: 'summary_large_image',
			site: '@renova.contractors',
			creator: '@renova.contractors',
			title: metaTitle,
			description: metaDescription,
			images: [featuredImage],
		},
		other: {
			'article:published_time': publishedDate,
			'article:modified_time': modifiedDate,
			'article:author': 'RENOVA Contractors LLC',
			'article:section': category,
			'article:tag': Array.isArray(tags) ? tags.join(', ') : 'home remodeling, renovation, seattle',
		},
	};
}

export async function generateStaticParams(): Promise<{ url: string }[]> {
	// Return empty array to force dynamic generation for all URLs
	// With dynamicParams = true, Next.js will handle all URLs dynamically
	return [];
}

const page = async ({ params }: Props): Promise<JSX.Element> => {
	console.log('Blog post page called with URL:', params.url);
	
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

		console.log(`Fetching blog from: ${backendUrl}/blog/url/${params.url}`);
		
		// Try different URL formats
		let res = await fetch(
			`${backendUrl}/blog/url/${params.url}`,
			{
				cache: 'no-store' // Force dynamic fetch
			}
		);
		
		console.log(`First attempt status: ${res.status} for URL: ${params.url}`);
		
		// If first format fails, try alternative format
		if (!res.ok) {
			console.log(`Trying alternative URL format for: ${params.url}`);
			res = await fetch(
				`${backendUrl}/blog/${params.url}`,
				{
					cache: 'no-store'
				}
			);
			console.log(`Alternative attempt status: ${res.status} for URL: ${params.url}`);
		}
		
		if (!res.ok) {
			console.error('Failed to fetch blog:', res.status, res.statusText, `URL: ${params.url}`);
			const errorText = await res.text().catch(() => '');
			console.error('Error response body:', errorText);
			throw new Error(`Failed to fetch blog data: ${res.status} ${res.statusText}`);
		}
		
		const data = await res.json();
		console.log('Blog data fetched successfully:', data?.metaTitle || data?.cardTitle || data?.title || 'No title');
		return data;
	};

	let blog;
	try {
		blog = await getBlog();
	} catch (error: any) {
		console.error('Error in getBlog:', error?.message || error);
		notFound();
	}

	if (!blog || (!blog.title && !blog.metaTitle && !blog.cardTitle)) {
		console.error('Blog not found or missing title:', blog);
		notFound();
	}
	
	// Use createdAt from the database, with proper fallback
	const createdAtDate = blog.createdAt ? new Date(blog.createdAt) : new Date();
	const options = { year: "numeric", month: "long", day: "numeric" };
	const americanFormat = createdAtDate.toLocaleDateString("en-US", options as any);
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
				"headline": blog?.metaTitle || blog?.title || "Blog Post",
				"description": blog?.metaDescription || blog?.description || "",
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
					"url": blog?.featuredImage || "https://www.renova.contractors/logo.png",
					"width": 1200,
					"height": 630,
					"caption": blog?.metaTitle || blog?.title || "Blog Post"
				},
				"articleSection": blog?.category || "Home Remodeling",
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
					"name": blog?.category || "Home Remodeling",
					"description": `Professional ${blog?.category || 'home remodeling'} services in Seattle`
				}
			},
			{
				"@type": "WebPage",
				"@id": `https://www.renova.contractors/blog/${params.url}`,
				"url": `https://www.renova.contractors/blog/${params.url}`,
				"name": blog?.metaTitle || blog?.title || "Blog Post",
				"description": blog?.metaDescription || blog?.description || "",
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
							"name": blog?.metaTitle || blog?.title || "Blog Post",
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
						"name": blog?.metaTitle || blog?.title || "Blog Post",
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
					{/* Article Title */}
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-main-gray">
						{blog.metaTitle || blog.cardTitle || blog.title || "Blog Post"}
					</h1>
					
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

				{/* Cost Tables - Show when table: true */}
				{blog.table && (
					<div className="mb-20">
						<CostTables 
							category={blog.category || 'bathroom'} 
							city={blog.location || 'seattle'} 
						/>
					</div>
				)}

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
