import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WritingPage from './components/WritingPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Routes>
          <Route path="/" element={
            <>
              <ThemeToggle />
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Awards />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/writing/:id" element={<WritingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
