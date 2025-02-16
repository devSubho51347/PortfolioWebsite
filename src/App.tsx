import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ProjectDetails from './components/Projects/ProjectDetails/ProjectDetails';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={
          <>
            <Navbar />
            <ProjectDetails />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;