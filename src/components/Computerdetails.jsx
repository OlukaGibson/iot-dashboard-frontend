import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import Navbar from './Navbar';
import Footer from "./Footer";
import Background from "./background.png";
import { COMPUTERDETAILS } from "C:/Users/AirQo/Documents/happycomputerskla/happycomputers/src/constants/index.js";

const tileBorderStyle = {
  border: '1px solid rgba(255, 255, 255, 0.8)',
  padding: '5px',
  borderRadius: '15px',
  overflow: 'hidden',
};

const Computerdetails = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { computer } = location.state;

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / scrollHeight;
      setScrollPosition(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxOpacity = 0.75;
  const minOpacity = 0.35;
  const gradientOpacity = Math.max(minOpacity, Math.min(scrollPosition, maxOpacity));

  const backgroundOverlayStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, ${gradientOpacity}), rgba(0, 0, 0, ${gradientOpacity})), url(${Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    zIndex: -1,
  };

  const filteredComputers = COMPUTERDETAILS.filter((item) => item.id !== computer.id);

  const breakpointColumnsObj = {
    default: 4,
    1000: 3,
    700: 2,
    500: 1,
  };

  const handleTileClick = (selectedComputer) => {
    navigate(`/computers/${selectedComputer.id}`, { state: { computer: selectedComputer } });
  };

  return (
    <div className="relative min-h-screen text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background overlay */}
      <div className="fixed inset-0" style={backgroundOverlayStyle}></div>

      <div className="relative z-10">
        {/* Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Computer Details */}
        <div className="container mx-auto mt-20 p-6">
          <div className="bg-white bg-opacity-30 p-3 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img className="w-full h-auto rounded-lg" src={computer.image} alt={computer.deviceName} />
              <div className="bg-white bg-opacity-90 p-6 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">{computer.deviceName}</h2>
                <p className="text-xl mb-4">Price: {computer.price}</p>
                <p className="text-lg mb-2">Brand: {computer.brand}</p>
                <p className="text-lg mb-2">Condition: {computer.condition}</p>
                <p className="text-lg mb-2">Processor: {computer.processor}</p>
                <p className="text-lg mb-2">RAM: {computer.ram}</p>
                <p className="text-lg mb-2">Storage: {computer.storage} {computer.storageType}</p>
                <p className="text-lg mb-2">Operating System: {computer.operatingSystem}</p>
                <p className="text-lg mb-2">Graphics Card: {computer.graphicsCard ? `${computer.graphicsCard}, ${computer.graphicsCardSize}` : "Not Available"}</p>
                <p className="text-lg mb-2">Generation: {computer.generation}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Laptops */}
        <div className="container mx-auto mt-10 p-6">
          <h3 className="text-2xl font-bold mb-6">Similar Laptops</h3>
          <div className="w-full">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {filteredComputers.map((otherComputer) => (
                <div key={otherComputer.id} className="mb-4" style={tileBorderStyle} onClick={() => handleTileClick(otherComputer)}>
                  <div className="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden cursor-pointer">
                    <div style={{ aspectRatio: '4 / 3' }}>
                      <img
                        className="w-full h-full object-cover"
                        src={otherComputer.image}
                        alt={otherComputer.deviceName}
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-base sm:text-lg md:text-xl font-bold">{otherComputer.deviceName}</h2>
                      <p className="mt-2 text-gray-600 ">{otherComputer.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Masonry>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Computerdetails;
