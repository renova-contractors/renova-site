"use client";
import React from "react";
import Link from "next/link";
import { BlogCard } from "../../app/blog/components/BlogCard";

interface BlogPost {
  markdown: string;
  url: string;
  createdAt: string;
  cardTitle: string;
  cardDescription: string;
  category: string;
  location: string;
}

export const RecentBlogs: React.FC = () => {
  const [blogPosts, setBlogPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        setLoading(true);

        // Use local API route for blog posts
        const baseUrl = process.env.NODE_ENV === 'production'
          ? 'https://www.renova.contractors'
          : 'http://localhost:3000';

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {[1, 2, 3].map((i) => (
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
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Latest Seattle Remodeling Insights
        </h2>
        <p className="text-xl text-main-gray max-w-3xl mx-auto">
          Stay updated with the latest home remodeling trends, tips, and cost insights 
          specifically for Seattle homeowners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {blogPosts.map((blog) => (
          <div key={blog.url} className="h-56">
            <BlogCard {...blog} />
          </div>
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
