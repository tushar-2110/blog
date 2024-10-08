import React from 'react';
import { useParams,Link } from 'react-router-dom';
import blogs from './Data'; // Import the dummy data

const Blog = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="container mx-auto p-4">Blog not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="mt-4">{blog.text}</p>
      <Link to="/" className="mt-4 text-blue-500 underline">
        Back to Home
      </Link>
    </div>
  );
}

export default Blog;
