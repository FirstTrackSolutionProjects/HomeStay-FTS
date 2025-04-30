import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "How Technology is Transforming Hospitality",
    excerpt: "Explore how digital tools are reshaping the guest experience and streamlining operations for property owners.",
    image: "/images/blog1.jpg",
  },
  {
    id: 2,
    title: "5 Tips for Growing Your Rental Business",
    excerpt: "Learn simple strategies to increase occupancy, boost guest satisfaction, and grow your rental revenue.",
    image: "/images/blog2.jpg",
  },
  {
    id: 3,
    title: "What Guests Expect in 2025",
    excerpt: "Discover the top trends and amenities that travelers are looking for this year.",
    image: "/images/blog3.jpg",
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Page Header */}
      <div className="w-full h-64">
        <img 
          src="/images/b1.jpg" 
          alt="Blog Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Intro */}
      <div className="text-center my-10 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Blog</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay up-to-date with the latest insights, tips, and trends in the vacation rental and hospitality space.
        </p>
      </div>

      {/* Blog Post Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto mb-16">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              {/* <a href="#" className="text-indigo-600 hover:underline">Read More →</a> */}
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Blog;
