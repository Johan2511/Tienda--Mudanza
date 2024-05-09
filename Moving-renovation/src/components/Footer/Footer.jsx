import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../SocialMedia/SocialMedia';
import Logo from '../Logo/Logo';

const Footer = () => {

  const pages = [
    { title: "Home", path: "/" },
    { title: "Our Services", path: "/my-service" },
    { title: "About Us", path: "/AboutUs" },
    { title: "Contact Us", path: "/ContactUs" }
  ];

  return (
    <div className='bg-gray-900'>
      <footer className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <Link to={"/"} className="flex title-font font-medium items-center justify-center text-gray-900">
              <Logo/>
            </Link>
            <p className="mt-2 text-sm text-gray-200 text-center">Moving renovation is a company with the vision of helping all families
  in their important process of moving anywhere at any time.</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            
            {/* Iterar sobre el array de páginas */}
            {pages.map((page, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-100 tracking-widest text-sm mb-3">{page.title}</h2>
                <nav className="list-none mb-10">
                  {/* Renderizar el enlace a la página */}
                  <li>
                    <Link to={page.path} className="text-gray-200 hover:text-gray-200">{page.title}</Link>
                  </li>
                </nav>
              </div>
            ))}
            
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© Copyright 2024 Moving_Renovation Atlanta
              <a href="#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank"></a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-4">
                  <SocialMedia/>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
