import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Content from './components/Content';
import AboutSection from './components/AboutSection';
import Stack from './components/Stack';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp'; // ✅ added
import './components/Style.css';
import './components/Stack.css';
import './components/Footer.css';
import Courses from './pages/Courses';
import Service from './pages/Service';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Content />
              <AboutSection />
              <Stack />
            </>
          }
        />
        <Route path="/service" element={<Service />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Floating WhatsApp button */}
      <FloatingWhatsApp />

      <Footer />
    </div>
  );
}

// ✅ export comes AFTER the function
export default App;
