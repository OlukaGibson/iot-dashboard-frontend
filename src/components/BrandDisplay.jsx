import React from "react";
import Masonry from "react-masonry-css";
import "./style.css";
import { CATEGORIES } from "../constants";

const BrandDisplay = () => {
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    700: 1,
  };

  return (
    <div className="relative bg-cover bg-center bg-no-repeat mt-20">
      <div className="container mb-20 flex flex-col items-center py-6 mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative z-10 w-full">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {CATEGORIES.map((category) => (
              <div key={category.id} className="tile-border mb-6">
                <div className="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden">
                  <img
                    className="w-full object-cover h-48 sm:h-64 md:h-80"
                    src={category.image}
                    alt={category.usage}
                  />
                  <div className="p-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{category.usage}</h2>
                    <p className="mt-2 text-gray-600 text-sm sm:text-base hidden sm:block">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default BrandDisplay;
