import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import logo from '../img/logo.jpg';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = ['Home', 'About Us', 'What We Do', 'AME Training', 'Certification', 'Reach Us'];

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" },
    }

    return (
        <>
            {/* Top bar */}
            <div className="fixed top-0 py-2 w-full bg-white z-10 text-black-600 overflow-hidden flex justify-center items-center">
                <div className="flex items-center px-2 animate-scroll">
                    <span className="flex items-center space-x-2 text-lg uppercase font-semibold px-4 py-1 rounded-full cursor-pointer transition-all ease-in-out duration-300 text-black-600">
                        <span>Vikram Aviation Now became NABL accredited (ISO/IEC 17025 accredited) Calibration laboratory</span>
                    </span>
                </div>
            </div>

            {/* Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className='fixed top-10 w-full flex flex-wrap justify-between items-center border-b-2 px-4 md:px-7 bg-gray-100'
            >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Link className="flex items-center text-lg md:text-xl py-2 font-bold" to="/">
                        <img src={logo} alt="logo" className='pr-2 md:pr-5 w-12 md:w-20' />
                        Vikram <span className="text-lg md:text-xl text-yellow-500 px-1 md:px-2">Aviation</span> Pvt Ltd
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Link className="flex items-center py-2 font-bold" to="tel:+911146078736">
                        <span className="text-md md:text-lg sm:text-md text-yellow-600 px-1 md:px-2"><FaPhoneAlt /></span>
                        <span className="text-md md:text-lg sm:text-md text-gray-600 px-1 md:px-2">+91-1146078736</span>
                    </Link>
                </motion.div>
                {/* Hamburger menu button */}
                <motion.button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-600 focus:outline-none"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                        ) : (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                        )}
                    </svg>
                </motion.button>

                {/* Navigation menu */}
                <AnimatePresence>
                    {(isOpen || window.innerWidth > 768) && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={variants}
                            transition={{ duration: 0.5 }}
                            className={`md:block w-full md:w-auto`}
                        >
                            <ul className="flex flex-col md:flex-row md:space-x-4">
                                {navItems.map((item, index) => {
                                    const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`;
                                    return (
                                        <motion.li
                                            key={index}
                                            className="text-center"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Link
                                                to={item === "Certification" ? "/Certificate NABL- Vikram.jpg" : path}
                                                target={item === "Certification" ? "_blank" : "_self"}
                                                className={`block px-3 py-2 text-md md:text-lg font-bold ${location.pathname === path ? 'text-yellow-600' : 'text-gray-600'} hover:bg-yellow-300 rounded-md transition-all duration-300 ease-in-out`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item}
                                            </Link>
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

