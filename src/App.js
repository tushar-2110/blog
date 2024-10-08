// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/Signin';
import Blog from './components/Blog'; // Import Blog component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/blog/:id" element={<Blog />} /> {/* Add route for Blog */}
      </Routes>
    </Router>
  );
}

export default App;
