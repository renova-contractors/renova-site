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
  markdown: string;
}

interface ServiceBlogProps {
  category: string;
  location: string;
  maxPosts?: number;
}

// Function to extract first image from markdown
const extractFirstImage = (markdown: string): string | null => {
  const imageRegex = /!\[.*?\]\((.*?)\)/;
  const match = markdown.match(imageRegex);
  return match ? match[1] : null;
};

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
        
        console.log(`Filtering blogs for category: ${category}, location: ${location}`);
        console.log('Available blogs:', data.map((post: any) => ({ 
          title: post.cardTitle, 
          category: post.category, 
          location: post.location 
        })));
        
        // Filter posts that are relevant to the service and location
        const relevantPosts = data
          .filter((post: any) => {
            // Strict category matching - must match the exact category or be in the title
            const isCategoryMatch = 
              post.category?.toLowerCase() === category.toLowerCase() ||
              post.cardTitle?.toLowerCase().includes(category.toLowerCase());
            
            // Strict location matching - must match the exact location or be in the title
            const isLocationMatch = 
              post.location?.toLowerCase() === location.toLowerCase() ||
              post.cardTitle?.toLowerCase().includes(location.toLowerCase());
            
            return isCategoryMatch && isLocationMatch;
          })
          .slice(0, maxPosts);

        console.log(`Found ${relevantPosts.length} matching blogs:`, relevantPosts.map((post: any) => post.cardTitle));
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
        <div className="text-left mb-12">
          <h2 className="text-left text-4xl md:text-5xl font-bold text-white mb-4">
            Loading Articles...
          </h2>
          <p className="text-left text-xl text-main-gray max-w-3xl">
            Loading expert insights and cost guides for your remodel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8" style={{ gridAutoRows: '224px' }}>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col border-solid border-[1px] border-white bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden animate-pulse" style={{ height: '224px' }}>
              {/* Header with Browse link and Date */}
              <div className="flex justify-between items-baseline p-6 pb-3">
                <div className="h-3 bg-gray-300 rounded w-16"></div>
                <div className="h-3 bg-gray-300 rounded w-20"></div>
              </div>

              {/* Content and Image Section */}
              <div className="flex flex-1 px-6 pb-6 min-h-0">
                {/* Content Section - Left Side */}
                <div className="flex-1 flex flex-col min-h-0">
                  <div className="h-5 bg-gray-300 rounded mb-2"></div>
                  <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="space-y-1 flex-1 overflow-hidden">
                    <div className="h-3 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
                
                {/* Image placeholder - Right Side */}
                <div className="w-32 h-32 ml-4 bg-gray-300 rounded-lg flex-shrink-0"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center px-8 py-3 bg-gray-300 rounded-lg animate-pulse">
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
    return null; // Don't render anything if no matching posts found
  }

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  const locationName = location.charAt(0).toUpperCase() + location.slice(1);

  return (
    <section className="container component-mb" aria-labelledby="service-blog-heading">
      <div className="mb-12">
        <h2 
          id="service-blog-heading"
          className="custom-heading sm:text-left first-letter:text-main-yellow"
        >
          {categoryName} Remodel Helpful Articles
        </h2>
        <p className="text-xl text-main-gray max-w-3xl">
          Expert insights, tips, and cost guides for your {categoryName.toLowerCase()} remodel in {locationName}. 
          Learn about permits, pricing, and best practices from our experienced team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8" style={{ gridAutoRows: '224px' }}>
        {blogPosts.map((post, index) => (
          <article 
            key={post.url}
            className="flex flex-col border-solid border-[1px] hover:border-main-yellow border-white small-button text-white font-light text-title bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/10"
            style={{ height: '224px' }}
          >
            {/* Header with Browse link and Date */}
            <div className="flex justify-between items-baseline p-2 pb-3">
              <Link 
                href={`/blog/${post.url}`} 
                className="text-main-yellow hover:text-yellow-400 font-medium text-sm"
              >
                Browse
              </Link>
              <time 
                dateTime={post.createdAt}
                className="text-xs text-gray-300"
              >
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>

            {/* Content and Image Section */}
            <div className="flex flex-1 px-2 pb-6 min-h-0">
              {/* Content Section - Left Side */}
              <div className="flex-1 flex flex-col min-h-0">
                <h3 className="text-lg font-semibold line-clamp-2 text-white mb-2">
                  {post.cardTitle || post.metaTitle}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-3 flex-1 overflow-hidden text-left">
                  {post.cardDescription || post.metaDescription}
                </p>
              </div>

              {/* Image Section - Right Side */}
              {extractFirstImage(post.markdown) && (
                <div className="relative w-32 h-32 ml-4 flex-shrink-0">
                  <img 
                    src={extractFirstImage(post.markdown)!} 
                    alt={post.cardTitle || post.metaTitle}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/blog"
          className="inline-flex items-center py-3 bg-main-yellow text-main-dark font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
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
