import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import logo from "../../../assets/h-logo-min.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const goToAboutUs = () => {
    navigate("/", { state: { scrollTo: `about-us` } });
  };
  const goToContactUs = () => {
    navigate("/", { state: { scrollTo: `contact-us` } });
  };


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reusable components inside Navbar so they can access setIsOpen
  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className="text-black hover:text-blue-400 transition-colors duration-300 relative group"
    >
      {children}
      <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );

  const MobileNavLink = ({ to, children }) => (
    <Link
      to={to}
      className="block text-black hover:text-blue-400 py-2 px-3 rounded transition-colors duration-300 hover:bg-gray-700/50"
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <nav
      className={`font-black fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-white to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 mr-16">
            <Link to="/">
              {/* <img
                src={logo}
                alt="Ishit Polymers Logo"
                className="h-12 w-auto object-contain"
              /> */}
              <h1>simpleXprecisionTools</h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <p onClick={goToAboutUs}  className="cursor-pointer text-black hover:text-blue-400 transition-colors duration-300 relative group">About Us</p>
            <NavLink to="/Products">Products</NavLink>
            <p onClick={goToContactUs} className="cursor-pointer text-black hover:text-blue-400 transition-colors duration-300 relative group">Contact Us</p>
            <NavLink to={"/Gallery"}>Gallery</NavLink>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-blue-400 focus:outline-none transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="!text-black md:hidden px-4 pb-4 space-y-3">
          <MobileNavLink to="/">Home</MobileNavLink>
          <p className="cursor-pointer block text-black hover:text-blue-400 py-2 px-3 rounded transition-colors duration-300 hover:bg-gray-700/50" onClick={goToAboutUs}>About Us</p>
          <MobileNavLink to="/Products">Products</MobileNavLink>
          <p className="cursor-pointer block text-black hover:text-blue-400 py-2 px-3 rounded transition-colors duration-300 hover:bg-gray-700/50"onClick={goToContactUs}>Contact Us</p>
          <MobileNavLink to={"/Gallery"}>Gallery</MobileNavLink>
        </div>
      )}
    </nav>
  );
}

// Reusable NavLink component
const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-white hover:text-blue-400 transition-colors duration-300 relative group"
  >
    {children}
    <span className="absolute left-0 bottom-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
  </Link>
);

// Reusable Mobile NavLink component
const MobileNavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="block text-black hover:text-blue-400 py-2 px-3 rounded transition-colors duration-300 hover:bg-gray-700/50"
    //onClick={() => setIsOpen(false)}
  >
    {children}
  </Link>
);