import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import clsx from "clsx";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    const navLinks = [
        { label: "inicio", href: "/" },
        { label: "servicios", href: "/my-service" },
        { label: "nosotros", href: "/AboutUs" },
        { label: "contacto", href: "#" },
    ];

    return (
        <main>
            <nav className='flex justify-between px-6 items-center py-6 lg:px-24 bg-orange-400'>
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
                <div className={clsx(
                    "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-all",
                    {"translate-x-full": !menuOpen, "translate-x-0": menuOpen}
                )}>
                    <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
                        <IoClose
                            onClick={toggleMenu}
                            className="mt-0 mb-8 text-3xl cursor-pointer"
                        />
                        {navLinks.map((data, i) => (
                            <a key={i} className="font-bold" href={data.href}>
                                {data.label}
                            </a>
                        ))}
                    </section>
                </div>
                <div className="flex justify-center gap-4">
                    <a href="#" className="text-gray-400 hover:text-black"><FaFacebook size={24} /></a>
                    <a href="#" className="text-gray-400 hover:text-black"><FaInstagram size={24}/></a>
                    <a href="#" className="text-gray-400 hover:text-black"><FaLinkedin size={24}/></a>
                    <a href="#" className="text-gray-400 hover:text-black"><FaGoogle size={24}/></a>
                </div>
            </nav>
            <hr className="lg:mx-24" />
            
        </main>
    );
};

export default NavBar;
