import { useState } from 'react';

const useNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    return { menuOpen, toggleMenu };
};

export default useNavbar;
