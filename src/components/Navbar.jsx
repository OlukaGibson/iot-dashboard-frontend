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
      <nav className="bg-black bg-opacity-90">
        <div className="container mb-20 flex items-center justify-between py-6 mx-auto px-10">
          <img src={logo} alt="logo" className="h-10" />
          <div className="hidden md:flex">
            <ul className="flex space-x-10">
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  <Link to="/">HOME</Link>
                </a>
              </li>
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  <Link to="/computers">My Devices</Link>
                </a>
              </li>
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  {/* <Link to="/services">Services</Link> */}
                  <Link to="/">Services</Link>
                </a>
              </li>
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  {/* <Link to="/accessories">Accessories</Link> */}
                  <Link to="/">Accessories</Link>
                </a>
              </li>
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  Contact
                </a>
              </li>
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  {/* <Link to="/explore">Explore</Link> */}
                  <Link to="/">Explore</Link>
                </a>
              </li>
              {/* <li className="text-gray-100"> */}
              <a href="" className="p-1 text-gray-100">
                <BiSearch />
              </a>
              {/* </li> */}
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
                  <Link to="/">HOME</Link>
                </a>
              </li>
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  <Link to="/computers">My Devices</Link>
                </a>
              </li>
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  {/* <Link to="/services">Services</Link> */}
                  <Link to="/">Services</Link>
                </a>
              </li>
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  {/* <Link to="/accessories">Accessories</Link> */}
                  <Link to="/">Accessories</Link>
                </a>
              </li>
              <li className="text-gray-100">
                <a href="" className="p-1 text-gray-100">
                  Contact
                </a>
              </li>
              <li className="text-gray-100">
              <a href="" className="p-1 text-gray-100">
                  {/* <Link to="/explore">Explore</Link> */}
                  <Link to="/">Explore</Link>
                </a>
              </li>
            </ul>
            <a href="" className="p-1 text-gray-100">
                <BiSearch />
              </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
