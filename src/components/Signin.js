import React from 'react';

const Signin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Sign In</h2>

        <form>
         
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

         
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-purple-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out"
          >
            Sign In
          </button>
        </form>

        
        <div className="mt-6 text-center text-gray-500">
          <p>Don't have an account?</p>
          <a href="#" className="text-purple-600 hover:underline">
            Sign up now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signin;
