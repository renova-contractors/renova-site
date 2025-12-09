"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

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
            <div key={i} className="flex flex-col border border-white/20 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden animate-pulse" style={{ height: '224px' }}>
              {/* Header with Date */}
              <div className="flex justify-between items-center px-4 pt-3 pb-2">
                <div className="h-3 bg-gray-300/50 rounded w-24"></div>
              </div>

              {/* Content and Image Section */}
              <div className="flex flex-1 px-4 pb-4 gap-4 min-h-0">
                {/* Content Section - Left Side */}
                <div className="flex-1 flex flex-col min-h-0">
                  <div className="h-4 bg-gray-300/50 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300/50 rounded w-3/4 mb-2"></div>
                  <div className="space-y-1 flex-1 overflow-hidden">
                    <div className="h-3 bg-gray-300/50 rounded"></div>
                    <div className="h-3 bg-gray-300/50 rounded"></div>
                    <div className="h-3 bg-gray-300/50 rounded w-2/3"></div>
                  </div>
                </div>
                
                {/* Image placeholder - Right Side */}
                <div className="w-28 h-28 md:w-32 md:h-32 bg-gray-300/50 rounded-lg flex-shrink-0"></div>
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
        {blogPosts.map((blog) => {
          const imageUrl = extractFirstImage(blog.markdown);
          const dateObj = new Date(blog.createdAt);
          const options = { year: "numeric", month: "long", day: "numeric" };
          const americanFormat = dateObj.toLocaleDateString("en-US", options as any);

          return (
            <article 
              key={blog.url}
              className="group flex flex-col border border-white/20 hover:border-main-yellow/60 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-main-yellow/10 hover:-translate-y-1 h-full"
              style={{ height: '224px' }}
            >
              <Link 
                href={`/blog/${blog.url}`}
                className="flex flex-col h-full"
                aria-label={`Read article: ${blog.cardTitle}`}
              >
                {/* Header with Date */}
                <div className="flex justify-between items-center px-4 pt-3 pb-2">
                  <time 
                    dateTime={blog.createdAt}
                    className="text-xs text-gray-400 font-medium uppercase tracking-wide"
                  >
                    {americanFormat}
                  </time>
                </div>

                {/* Content and Image Section */}
                <div className="flex flex-1 px-4 pb-4 gap-4 min-h-0">
                  {/* Content Section */}
                  <div className="flex-1 flex flex-col min-h-0 justify-between">
                    <div className="flex-1 flex flex-col min-h-0">
                      <h3 className="text-base font-semibold line-clamp-2 text-white mb-2 group-hover:text-main-yellow transition-colors duration-300 leading-tight">
                        {blog.cardTitle}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-3 flex-1 overflow-hidden leading-relaxed">
                        {blog.cardDescription}
                      </p>
                    </div>
                    {/* Read more indicator */}
                    <span className="text-main-yellow text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read more →
                    </span>
                  </div>

                  {/* Image Section - Right Side */}
                  {imageUrl && (
                    <div className="relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-800/50">
                      <Image 
                        src={imageUrl} 
                        alt={blog.cardTitle}
                        fill
                        sizes="(max-width: 768px) 112px, 128px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </Link>
            </article>
          );
        })}
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
