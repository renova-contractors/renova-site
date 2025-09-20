"use client";

import React from 'react';
import Link from 'next/link';

interface BlogPost {
  url: string;
  metaTitle: string;
  cardTitle: string;
  cardDescription: string;
  metaDescription: string;
  createdAt: string;
  updatedAt: string;
  category?: string;
  location?: string;
}

interface ServiceBlogProps {
  category: string;
  location: string;
  maxPosts?: number;
}

const ServiceBlog: React.FC<ServiceBlogProps> = ({ 
  category, 
  location, 
  maxPosts = 3 
}) => {
  const [blogPosts, setBlogPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        
        // Use local API route for blog posts
        const baseUrl = process.env.NODE_ENV === 'production' 
          ? 'https://www.renova.contractors' 
          : 'http://localhost:3000';
        
        const response = await fetch(`${baseUrl}/api/blog?category=${category}&location=${location}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch blog posts: ${response.status}`);
        }

        const data = await response.json();
        
        // Filter posts that are relevant to the service and location
        const relevantPosts = data
          .filter((post: any) => {
            const isCategoryMatch = 
              post.category?.toLowerCase() === category.toLowerCase() ||
              post.metaTitle?.toLowerCase().includes(category.toLowerCase()) ||
              post.cardTitle?.toLowerCase().includes(category.toLowerCase()) ||
              post.metaDescription?.toLowerCase().includes(category.toLowerCase()) ||
              post.cardDescription?.toLowerCase().includes(category.toLowerCase());
            
            const isLocationMatch = 
              post.location?.toLowerCase() === location.toLowerCase() ||
              post.metaTitle?.toLowerCase().includes(location.toLowerCase()) ||
              post.cardTitle?.toLowerCase().includes(location.toLowerCase()) ||
              post.metaDescription?.toLowerCase().includes(location.toLowerCase()) ||
              post.cardDescription?.toLowerCase().includes(location.toLowerCase());
            
            return isCategoryMatch && isLocationMatch;
          })
          .slice(0, maxPosts);

        setBlogPosts(relevantPosts);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [category, location, maxPosts]);

  if (loading) {
    return (
      <section className="container component-mb">
        <header className="text-center mb-12">
          <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded w-2/3 mx-auto animate-pulse"></div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-56 flex flex-col border-solid border-[1px] border-white bg-white/5 backdrop-blur-sm rounded-lg p-6 animate-pulse">
              <div className="flex justify-between pb-5 mb-4">
                <div className="h-4 bg-gray-300 rounded w-16"></div>
                <div className="h-4 bg-gray-300 rounded w-20"></div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="h-6 bg-gray-300 rounded mb-2"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-3 bg-gray-300 rounded"></div>
                  <div className="h-3 bg-gray-300 rounded"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <div className="inline-flex items-center px-6 py-3 bg-gray-300 rounded-lg animate-pulse">
            <div className="h-4 w-32 bg-gray-400 rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container component-mb">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-600">Unable to load related articles at this time.</p>
        </div>
      </section>
    );
  }

  if (blogPosts.length === 0) {
    return null; // Don't render anything if no posts found
  }

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  const locationName = location.charAt(0).toUpperCase() + location.slice(1);

  return (
    <section className="container component-mb" aria-labelledby="service-blog-heading">
      <header className="text-center mb-12">
        <h2 
          id="service-blog-heading"
          className="text-left text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {categoryName} Remodel Helpful Articles
        </h2>
        <p className="text-left text-lg text-white max-w-3xl ">
          Expert insights, tips, and cost guides for your {categoryName.toLowerCase()} remodel in {locationName}. 
          Learn about permits, pricing, and best practices from our experienced team.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <article 
            key={post.url}
            className="h-56 flex flex-col border-solid border-[1px] hover:border-main-yellow border-white small-button text-white font-light text-title bg-white/5 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-white/10"
          >
            <div className="flex justify-between pb-5 mb-4">
              <Link 
                href={`/blog/${post.url}`} 
                className="text-main-yellow hover:text-yellow-400 font-medium"
              >
                Browse
              </Link>
              <time 
                dateTime={post.createdAt}
                className="text-sm text-gray-300"
              >
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-white">
                {post.cardTitle || post.metaTitle}
              </h3>
              <p className="text-gray-300 text-sm line-clamp-3 flex-1">
                {post.cardDescription || post.metaDescription}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/blog"
          className="inline-flex items-center px-8 py-3 bg-main-yellow text-main-dark font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
        >
          View All Articles
          <svg 
            className="ml-2 w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default ServiceBlog;
