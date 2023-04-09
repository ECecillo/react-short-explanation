import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-scroll';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="bg-gray-200 dark:bg-gray-700 blue:bg-blue-300 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 fixed top-4 right-4"
      >
        <GiHamburgerMenu size="30" />
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-10 flex items-center justify-center bg-black bg-opacity-50">
          <ul className="bg-white dark:bg-gray-800 blue:bg-blue-200 rounded-lg p-4 space-y-4 text-xl">
            <li>
              <Link to="dom" smooth={true} onClick={toggleMenu}>
                Le DOM
              </Link>
            </li>
            <li>
              <Link to="chapitre2" smooth={true} onClick={toggleMenu}>
                Qu'est-ce donc que React ?
              </Link>
            </li>
            <li>
              <Link to="chapitre2" smooth={true} onClick={toggleMenu}>
                Composants et props
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
