import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>{children}</MenuContext.Provider>;
};
