import React from "react";
import Background from "../assets/background.png";

const BrandDisplay1 = () => {
  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-50 relative bg-cover bg-center bg-no-repeat h-[50vh]"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="container mb-20 flex items-center justify-between py-6 mx-auto px-10">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
    </div>
  );
};

export default BrandDisplay1;
