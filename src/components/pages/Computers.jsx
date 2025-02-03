import React, { useEffect, useState } from "react";
import Background from "./background.png";
import Computersdisplay from '../Computersdisplay'
import Navbar from '../Navbar'
import Footer from "../Footer";

const Computers = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / scrollHeight;
      setScrollPosition(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const maxOpacity = 0.85;
  const minOpacity = 0.55; // Set a minimum brightness level
  const gradientOpacity = Math.max(minOpacity, Math.min(scrollPosition, maxOpacity));

  const backgroundOverlayStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, ${gradientOpacity}), rgba(0, 0, 0, ${gradientOpacity})), url(${Background})`,
    backgroundSize: 'cover',  // Ensures that the image covers the screen regardless of size
    backgroundPosition: 'center', // Centers the background image
    backgroundAttachment: 'fixed', // Keeps the background fixed during scroll
    zIndex: -1,
  };

  return (
    <div className="relative min-h-screen text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background overlay that is responsive */}
      <div className="fixed inset-0" style={backgroundOverlayStyle}></div>
      
      {/* Content */}
      <div className="relative z-10">
       <div className="fixed top-0 left-0 w-full z-50">
             <Navbar />
        </div>
        <Computersdisplay />
        <Footer />
      </div>
    </div>
  );
};

export default Computers;
