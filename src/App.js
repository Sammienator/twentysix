import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/home';
import About from '../src/components/about';
import Footer from '../src/components/footer';
import ContactPage from '../src/components/contact';
import Poems from '../src/components/poems';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home page - shows Home, About, and Footer */}
          <Route path="/" element={
            <>
              <Home/>
              <About/>
              <Footer/>
            </>
          } />
          
          {/* Contact page */}
          <Route path="/contact" element={
            <>
              <ContactPage />
              <Footer/>
            </>
          } />
          
          {/* Poems page */}
          <Route path="/poems" element={
            <>
              <Poems />
              <Footer/>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;