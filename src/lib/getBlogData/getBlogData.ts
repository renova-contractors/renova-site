// Direct import to avoid HTTP calls in server components
import { GET as blogApiGet } from '@/app/api/blog/route';
import { NextRequest } from 'next/server';
import { headers } from 'next/headers';

export const getBlogData = async (search = ""): Promise<any> => {
	try {
		// Check if it's a category (single word/slug) or a blog post URL (with slashes)
		if (search.includes('/')) {
			// For individual blog posts, use backend directly
			const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
			if (!backendUrl) {
				console.error('NEXT_PUBLIC_BACKEND_URL is not defined');
				return null;
			}
			const url = `${backendUrl}/blog/${search}`;
			const res = await fetch(url, {
				next: { revalidate: 3600 }
			});
			
			if (!res.ok) {
				console.error(`Backend API request failed: ${res.status} ${res.statusText}`);
				return null;
			}
			
			const data = await res.json();
			return data;
		}

		// For categories or all blogs, call API route handler directly
		// Get the host from headers to build proper URL
		const headersList = await headers();
		const host = headersList.get('host') || 'localhost:3001';
		const protocol = headersList.get('x-forwarded-proto') || 
			(process.env.NODE_ENV === 'production' ? 'https' : 'http');
		
		// Build the request URL with proper query parameters
		let requestUrl = `${protocol}://${host}/api/blog`;
		if (search) {
			requestUrl = `${protocol}://${host}/api/blog?category=${encodeURIComponent(search)}`;
		}
		
		const request = new NextRequest(requestUrl);
		const response = await blogApiGet(request);
		
		if (!response.ok) {
			const errorData = await response.json().catch(() => ({}));
			console.error('API route error:', errorData);
			return [];
		}
		
		const data = await response.json();
		return Array.isArray(data) ? data : [];
	} catch (error: any) {
		console.error('Error in getBlogData:', error?.message || error);
		// Return empty array on error instead of throwing
		return [];
	}
};
