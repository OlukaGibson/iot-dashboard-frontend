import React, { useState, useEffect } from "react";
import {
  BRANDS, USAGE, TYPE, CONDITION, RAM, PROCESSOR,
  STORAGE, SCREEN_SIZE, STORAGE_TYPE, OPERATING_SYSTEM,
  GRAPHICS_CARD, GRAPHICS_CARD_SIZE, GENERATION
} from "../constants";

const Sidebar = ({ onFilterChange }) => {
  const [openSections, setOpenSections] = useState(new Set());
  const [selectedOptions, setSelectedOptions] = useState({
    brand: [],
    usage: [],
    type: [],
    condition: [],
    ram: [],
    processor: [],
    storage: [],
    screenSize: [],
    storageType: [],
    operatingSystem: [],
    graphicsCard: [],
    graphicsCardSize: [],
    generation: [],
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 940);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = (section) => {
    setOpenSections((prev) => new Set(prev).add(section));
  };

  const handleMouseLeave = (section) => {
    if (!selectedOptions[section]?.length) {
      setOpenSections((prev) => {
        const newOpenSections = new Set(prev);
        newOpenSections.delete(section);
        return newOpenSections;
      });
    }
  };

  const handleCheckboxChange = (category, option) => {
    setSelectedOptions((prevSelected) => {
      const isSelected = prevSelected[category].includes(option);
      const updatedOptions = isSelected
        ? prevSelected[category].filter((item) => item !== option)
        : [...prevSelected[category], option];

      onFilterChange(category, updatedOptions);

      return {
        ...prevSelected,
        [category]: updatedOptions,
      };
    });
  };

  const renderSection = (title, items, category) => (
    <div
      className="mb-2 lg:mb-4 group"
      onMouseEnter={() => handleMouseEnter(category)}
      onMouseLeave={() => handleMouseLeave(category)}
    >
      <div className="cursor-pointer flex justify-between items-center font-bold py-1 px-2 bg-gray-700 bg-opacity-0 text-white rounded-lg hover:bg-opacity-90 transition-all">
        <span>{title}</span>
        <span className="mt-2 text-xs sm:text-sm hidden sm:block">{"▼"}</span>
      </div>
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${openSections.has(category) ? 'max-h-96' : 'max-h-0'}`}
      >
        <ul className="mt-1 bg-gray-800 bg-opacity-0 rounded-lg text-gray-300">
          {items.map((item, index) => (
            <li key={index} className="py-1 px-2 flex items-center hover:bg-gray-600">
              <input
                type="checkbox"
                id={`${category}-${index}`}
                checked={selectedOptions[category].includes(item)}
                onChange={() => handleCheckboxChange(category, item)}
                className="mr-2"
              />
              <label htmlFor={`${category}-${index}`} className="cursor-pointer">
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      <div
        className={`bg-gray-900 bg-opacity-0 p-2 shadow-lg rounded-lg backdrop-filter backdrop-blur-sm lg:w-64 ${isMobile ? `block` : "relative lg:block"}`}
      >
        {/* Render sections */}
        <div className={`flex ${isMobile ? 'flex-row' : 'flex-col'} lg:space-y-1 overflow-x-auto lg:overflow-visible px-4 py-2`}>
          {renderSection("Device Brand", BRANDS, "brand")}
          {renderSection("Device Usage", USAGE, "usage")}
          {renderSection("Device Type", TYPE, "type")}
          {renderSection("Device Condition", CONDITION, "condition")}
          {renderSection("RAM Size", RAM, "ram")}
          {renderSection("CPU Processor", PROCESSOR, "processor")}
          {renderSection("Storage Capacity", STORAGE.map(size => `${size} GB`), "storage")}
          {renderSection("Display Size", SCREEN_SIZE.map(size => `${size} inches`), "screenSize")}
          {renderSection("Storage Type", STORAGE_TYPE, "storageType")}
          {renderSection("Operating System", OPERATING_SYSTEM, "operatingSystem")}
          {renderSection("Graphics Card", GRAPHICS_CARD, "graphicsCard")}
          {renderSection("Graphics Card Size", GRAPHICS_CARD_SIZE.map(size => `${size} GB`), "graphicsCardSize")}
          {renderSection("Device Generation", GENERATION, "generation")}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
