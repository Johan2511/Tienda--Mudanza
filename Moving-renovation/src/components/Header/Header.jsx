import React from 'react';
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
      <div className="sm:text-center w-full lg:w-auto">
          <Link to="/" className="text-4xl flex justify-center"><Logo /></Link>
        </div>
        <div className="flex-grow flex justify-center">
          <div className="text-center  max-w-lg sm:mr-16">
            <h1 className="text-2xl hidden sm:block">Moving_Renovations</h1>
            <p className="text-base hidden sm:block">moving renovation is a company with the vision of helping all families <br /> in their important process of moving anywhere at any time.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
