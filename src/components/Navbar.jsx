import { useState } from "react";
import logo from "../assets/gperfect.png";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-blue-600 bg-opacity-90">
        <div className="container mb-20 flex items-center justify-between py-6 mx-auto px-10">
          <img src={logo} alt="logo" className="h-10" />
          <div className="hidden md:flex">
            <ul className="flex space-x-10">
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  <Link to="/devices">Devices</Link>
                </a>
              </li>
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  <Link to="/firmware">Firmware</Link>
                </a>
              </li>
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  <Link to="/device-profiles">Profiles</Link>
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-100">
              {isOpen ? <AiOutlineClose size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-gray-400 px-10 pb-6">
            <ul className="space-y-4">
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  <Link to="/devices">Devices</Link>
                </a>
              </li>
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  <Link to="/firmware">Firmware</Link>
                </a>
              </li>
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  <Link to="/device-profiles">Profiles</Link>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
