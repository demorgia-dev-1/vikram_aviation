import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/logo.jpg";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();
    const dropdownRef = useRef(null);
    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const navItems = ["Home", "About Us", "What We Do", "Certification & Scope", "Reach Us"];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            {/* Top Bar */}
            <div className="fixed top-0 py-2 w-full bg-white z-10 text-black-600 flex justify-center items-center">
                <div className="flex items-center px-2">
                    <span className="flex items-center text-xl uppercase font-extrabold">
                        Vikram Aviation Now became
                        <img src="/nabl logo.png" alt="nabl logo" className="w-20 h-auto" />
                        NABL accredited (ISO/IEC 17025 - 2017) Calibration laboratory
                    </span>
                </div>
            </div>
            {/* Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="fixed top-10 w-full flex flex-wrap justify-between items-center border-b-2 px-4 md:px-7 bg-gray-100"
            >
                {/* Logo */}
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link className="flex" to="/">
                        <div className="flex items-start text-lg md:text-xl py-2 font-bold">
                            <img src={logo} alt="logo" className="pr-2 md:pr-5 w-12 md:w-20" />
                            <div className="flex flex-col items-center">
                                <span>Vikram <span className="text-lg md:text-xl text-yellow-500">Aviation</span> Pvt Ltd</span>
                                <p className="text-sm sm:text-xs text-start mt-1 font-semibold">DGCA approved & NABL (ISO/IEC-17025:<br/>2017) accredited Testing & calibration lab </p>
                            </div>
                        </div>
                    </Link>
                </motion.div>
                {/* Phone */}
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link className="flex items-center py-2 font-bold" to="tel:+911146078736">
                        <span className="text-md md:text-lg sm:text-md text-yellow-600 px-1 md:px-2"><FaPhoneAlt /></span>
                        <span className="text-md md:text-lg sm:text-md text-gray-600 px-1 md:px-2">+91-1146078736</span>
                    </Link>
                </motion.div>
                {/* Hamburger Menu */}
                <motion.button onClick={toggleMenu} className="md:hidden text-gray-600 focus:outline-none" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                        ) : (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
                        )}
                    </svg>
                </motion.button>
                {/* Navigation Menu */}
                <AnimatePresence>
                    {(isOpen || window.innerWidth > 768) && (
                        <motion.div className="md:block w-full md:w-auto">
                            <ul className="flex flex-col md:flex-row md:space-x-4">
                                {navItems.map((item, index) => {
                                    const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                                    return (
                                        <motion.li key={index} className="flex items-center space-x-2" whileHover={{ scale: 1.1 }} >
                                            {item === "Certification & Scope" ? (
                                                <div className="relative" ref={dropdownRef}>
                                                    <button
                                                        onClick={toggleDropdown}
                                                        className="bg-gray-100 text-gray-600 font-bold text-md md:text-lg px-4 py-2 rounded-md focus:outline-none hover:bg-yellow-300"
                                                    >
                                                        Certification & Scope
                                                    </button>
                                                    {/* Dropdown Menu */}
                                                    {dropdownOpen && (
                                                        <motion.ul
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-20"
                                                        >
                                                            <li>
                                                                <a
                                                                    href="/Certificate NABL- Vikram.jpg"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                                >
                                                                    ISO/ISE-17025:2017
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="/DGCA.jpg"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                                >
                                                                    DGCA CAR-145 Approved MRO
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="/NABL.jpg"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                                >
                                                                    Certification - NABL
                                                                </a>
                                                            </li>
                                                        </motion.ul>
                                                    )}
                                                </div>
                                            ) : (
                                                <Link
                                                    to={path}
                                                    className={`block px-3 py-2 text-md md:text-lg font-bold ${
                                                        location.pathname === path ? "text-yellow-600" : "text-gray-600"
                                                    } hover:bg-yellow-300 rounded-md transition-all duration-300 ease-in-out`}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item}
                                                </Link>
                                            )}
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}

export default Navbar;
