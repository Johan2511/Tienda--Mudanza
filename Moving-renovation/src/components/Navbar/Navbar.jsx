import React, { useState } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";
import SocialMedia from '../SocialMedia/SocialMedia';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [doubleDropdownOpen, setDoubleDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    const toggleDoubleDropdown = () => {
        setDoubleDropdownOpen(prevState => !prevState);
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
                <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded={menuOpen} onClick={toggleMenu}>
                    <span className="sr-only">Open main menu</span>
                    {menuOpen ? <IoClose className="w-5 h-5" /> : <IoMenu className="w-5 h-5" />}
                </button>
                <div className={`w-full md:block md:w-auto ${menuOpen ? '' : 'hidden'}`} id="navbar-multi-level">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent" aria-controls="dropdownNavbar" aria-expanded={dropdownOpen} onClick={toggleDropdown}>Our Service<MdOutlineArrowDropDown className="w-2.5 h-2.5 ms-2.5" /></button>
                            <div id="dropdownNavbar" className={`z-10 ${dropdownOpen ? '' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                        <Link to="/my-service" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Our Service</Link>
                                    </li>
                                    
                                    <li>
                                        <Link to="/my-service/residential" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Residential Moving</Link>
                                    </li>
                                    <li>
                                        <Link to="/my-service/commercial" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Commercial Moving</Link>
                                    </li>
                                    <li>
                                        <Link to="/my-service/apartment" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Apartment Moving</Link>
                                    </li>
                                    <li>
                                        <Link to="/my-service/furniture-assembly" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forniture Assembly</Link>
                                    </li>
                                </ul>
                                
                            </div>
                        </li>
                        <li>
                            <Link to="/AboutUs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</Link>
                        </li>
    
                        <li>
                            <Link to="/ContactUS" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <SocialMedia/>
            </div>
        </nav>
    );
};

export default NavBar;
