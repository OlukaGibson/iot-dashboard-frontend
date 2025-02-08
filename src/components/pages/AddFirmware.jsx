import React from "react";
import Footer from "../Footer";
import AddFirmwareForm from "./AddFirmwareForm";
import Navbar from "../Navbar";

const AddFirmware = () => {
  return (
    <div className="relative min-h-screen text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="relative z-10">
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <div className="pt-20"></div>
        <div className="pt-20">
          <AddFirmwareForm />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AddFirmware;