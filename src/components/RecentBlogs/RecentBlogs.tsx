"use client";
import React from "react";
import Link from "next/link";

interface BlogPost {
  markdown: string;
  url: string;
  createdAt: string;
  cardTitle: string;
  cardDescription: string;
  category: string;
  location: string;
}

// Function to extract first image from markdown
const extractFirstImage = (markdown: string): string | null => {
  const imageRegex = /!\[.*?\]\((.*?)\)/;
  const match = markdown.match(imageRegex);
  return match ? match[1] : null;
};

export const RecentBlogs: React.FC = () => {
  const [blogPosts, setBlogPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        setLoading(true);

        // Use local API route for blog posts - relative URL works in client components
        const baseUrl = typeof window !== 'undefined' 
          ? window.location.origin
          : (process.env.NODE_ENV === 'production' 
            ? 'https://www.renova.contractors' 
            : 'http://localhost:3001');

        const response = await fetch(`${baseUrl}/api/blog?location=seattle`);

        if (!response.ok) {
          throw new Error(`Failed to fetch blog posts: ${response.status}`);
        }

        const data = await response.json();
        
        // Sort by createdAt date (most recent first) and take only 3
        const sortedBlogs = data
          .sort((a: BlogPost, b: BlogPost) => 
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .slice(0, 3);
        
        setBlogPosts(sortedBlogs);
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching recent blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentBlogs();
  }, []);

  if (loading) {
    return (
      <section className="container component-mb">
        <div className="text-left mb-12">
          <h2 className="text-left text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Seattle Remodeling Insights
          </h2>
          <p className="text-left text-xl text-main-gray max-w-3xl">
            Stay updated with the latest home remodeling trends, tips, and cost insights 
            specifically for Seattle homeowners.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8" style={{ gridAutoRows: '224px' }}>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col border-solid border-[1px] border-white bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden animate-pulse" style={{ height: '224px' }}>
              {/* Header with Browse link and Date */}
              <div className="flex justify-between items-baseline p-3 pb-3">
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
        <div className="text-center py-10">
          <div className="text-red-500">Error loading articles: {error}</div>
        </div>
      </section>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <section className="container component-mb">
        <div className="text-center py-10">
          <div className="text-main-gray">No recent articles found.</div>
        </div>
      </section>
    );
  }

  return (
    <section className="container component-mb">
      <div className="mb-12">
        <h2 className="custom-heading sm:text-left first-letter:text-main-yellow">
          Latest Seattle Remodeling Insights
        </h2>
        <p className="text-xl text-main-gray max-w-3xl">
          Stay updated with the latest home remodeling trends, tips, and cost insights 
          specifically for Seattle homeowners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8" style={{ gridAutoRows: '224px' }}>
        {blogPosts.map((blog) => (
          <article 
            key={blog.url}
            className="flex flex-col border-solid border-[1px] hover:border-main-yellow border-white small-button text-white font-light text-title bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/10"
            style={{ height: '224px' }}
          >
            {/* Header with Browse link and Date */}
            <div className="flex justify-between items-baseline  py-3">
              <Link 
                href={`/blog/${blog.url}`} 
                className="text-main-yellow hover:text-yellow-400 font-medium text-sm"
              >
                Browse
              </Link>
              <time 
                dateTime={blog.createdAt}
                className="text-xs text-gray-300"
              >
                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>

            {/* Content and Image Section */}
            <div className="flex flex-1 pb-2 min-h-0">
              {/* Content Section - Left Side */}
              <div className="flex-1 flex flex-col min-h-0">
                <h3 className="text-lg font-semibold line-clamp-2 text-white mb-2">
                  {blog.cardTitle}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-3 flex-1 overflow-hidden text-left">
                  {blog.cardDescription}
                </p>
              </div>

              {/* Image Section - Right Side */}
              {extractFirstImage(blog.markdown) && (
                <div className="relative w-32 h-32 ml-4 flex-shrink-0">
                  <img 
                    src={extractFirstImage(blog.markdown)!} 
                    alt={blog.cardTitle}
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
