import React from 'react';
import { Link } from 'react-router-dom';
import blogs from './Data'; // Import the dummy data

const Home = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">Latest Blog Posts</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div 
            key={blog.id} 
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-800 mb-3">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.text.substring(0, 50)}...</p>
              <Link 
                to={`/blog/${blog.id}`} 
                className="inline-block text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200 px-4 py-2 rounded-md"
              >
                Read More &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
