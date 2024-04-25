import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../SocialMedia/SocialMedia';

const Footer = () => {

  const categories = [
    { title: "First Category", links: ["First Link", "Second Link", "Third Link", "Fourth Link"] },
    { title: "Second Category", links: ["First Link", "Second Link", "Third Link", "Fourth Link"] },
    { title: "Third Category", links: ["First Link", "Second Link", "Third Link", "Fourth Link"] },
    { title: "Fourth Category", links: ["First Link", "Second Link", "Third Link", "Fourth Link"] }
  ]

  const socialColors = {
    facebookColor: '#106bff',
    instagramColor: '#e1306c',
    linkedinColor: '#0077b5',
    googleColor: '#db4437'
  };

  return (
    <div className='bg-gray-900'>
      <footer className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Moving_Renovation</span>
            </a>
            <p className="mt-2 text-sm text-gray-200">Moving renovation is a company with the vision of helping all families
  in their important process of moving anywhere at any time.</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            
            {/* Iterar sobre el array de categorías */}
            {categories.map((category, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-100 tracking-widest text-sm mb-3">{category.title}</h2>
                <nav className="list-none mb-10">
                  {/* Iterar sobre los links de cada categoría */}
                  {category.links.map((link, index) => (
                    <li key={index}>
                      <Link className="text-gray-200 hover:text-gray-200">{link}</Link>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
            
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© Copyright 2024 Moving_Renovation Atlanta|
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
