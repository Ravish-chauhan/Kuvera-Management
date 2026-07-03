'use client';

import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'The Future of Smart Facility Management in 2026',
    excerpt: 'Discover how IoT and AI are revolutionizing the way we maintain and secure large-scale commercial properties.',
    category: 'Technology',
    author: 'Admin',
    date: 'July 1, 2026',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Navigating New Statutory Compliance Laws',
    excerpt: 'A comprehensive guide to the latest changes in labor laws and how our payroll management keeps you risk-free.',
    category: 'Compliance',
    author: 'Admin',
    date: 'June 24, 2026',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Why Soft Skills Matter in Security Personnel',
    excerpt: 'Security is no longer just about physical presence. We explore why communication and empathy are now crucial.',
    category: 'Staffing',
    author: 'Admin',
    date: 'June 18, 2026',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

const Blog = () => {
  const featuredPost = posts[0];
  const sidebarPosts = posts.slice(1, 3);

  return (
    <section id="blog" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-0.5 bg-primary rounded-full" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Our Blog</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2F2F2F] leading-tight">
              Latest Insights & <span className="text-primary">News</span>
            </h2>
          </div>
          <button className="flex-shrink-0 inline-flex items-center gap-2 text-primary font-semibold hover:text-[#103063] transition-colors group">
            View All Posts
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Blog Layout (Magazine Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Featured Post (Left) */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 group flex flex-col h-full">
            <div className="relative h-72 sm:h-96 overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-wider shadow-sm">
                {featuredPost.category}
              </div>
            </div>

            <div className="p-8 sm:p-10 flex flex-col flex-grow">
              <div className="flex items-center gap-6 text-gray-400 text-sm mb-6 font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary/70" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary/70" />
                  <span>{featuredPost.author}</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2F2F] mb-6 leading-snug group-hover:text-primary transition-colors">
                <a href="#">{featuredPost.title}</a>
              </h3>

              <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 flex-grow">
                {featuredPost.excerpt}
              </p>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <a href="#" className="inline-flex items-center gap-2 text-[#2F2F2F] font-bold hover:text-primary transition-colors text-sm uppercase tracking-wide group/link">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar Posts (Right) */}
          <div className="flex flex-col gap-8">
            {sidebarPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 group flex flex-col sm:flex-row h-full"
              >
                {/* Image Container */}
                <div className="relative h-60 sm:h-auto sm:w-2/5 overflow-hidden flex-shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider shadow-sm">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-center flex-grow">
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-3 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary/70" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#2F2F2F] mb-3 leading-snug group-hover:text-primary transition-colors">
                    <a href="#">{post.title}</a>
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto">
                    <a href="#" className="inline-flex items-center gap-2 text-[#2F2F2F] font-bold hover:text-primary transition-colors text-xs uppercase tracking-wide group/link">
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blog;
