import React, { useState, useEffect } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import SocialMedia from '../SocialMedia/SocialMedia';
import clsx from "clsx";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = ''; 
        }
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    const navLinks = [
        { label: "HOME", href: "/" },
        { label: "OUR SERVICES", href: "/my-service" },
        { label: "ABOUT US", href: "/AboutUs" },
        { label: "CONTACT US", href: "/ContactUs" },
    ];

    return (
        <main>
            <nav className={clsx('flex justify-between px-6 items-center py-6 lg:px-24 bg-orange-400', { 'z-50': menuOpen })}>
                <div className="flex items-center gap-4">
                    <section className="flex items-start gap-4">
                        <IoMenu onClick={toggleMenu} className='text-5xl cursor-pointer lg:hidden' />
                    </section>
                    {navLinks.map((data, i) => (
                        <Link key={i} className="hidden lg:block text-white hover:text-black" to={data.href}>
                            {data.label}
                        </Link>
                    ))}
                </div>
                <div className='relative'>
                    <div className={clsx(
                    "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-all",
                    {"translate-x-full": !menuOpen, "translate-x-0": menuOpen}
                    )}>
                        <section className="text-black bg-orange-400 flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-64 flex">
                            <IoClose
                                onClick={toggleMenu}
                                className="mt-0 mb-8 text-3xl cursor-pointer"
                            />
                            {navLinks.map((data, i) => (
                                <Link key={i} className="text-2xl text-white hover:text-gray-300" to={data.href}>
                                    {data.label}
                                </Link>
                            ))}
                        </section>
                    </div>
                </div>
                <SocialMedia />
            </nav>
            <hr className="lg:mx-24" />
            
        </main>
    );
};

export default NavBar;
