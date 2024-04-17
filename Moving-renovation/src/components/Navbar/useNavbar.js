import { useState } from 'react';

const useNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [ 
    {
        label:"inicio",
         href: "#" 
    },
    {
        label:"servicios",
         href: "#" 
    },
    {
        label:"nosotros",
         href: "#" 
    },
    {
        label:"contacto",
         href: "#" 
    },
]

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return {
    menuOpen,
    setMenuOpen,
    toggleMenu,
    navLinks,
  };
};

export default useNavbar;
