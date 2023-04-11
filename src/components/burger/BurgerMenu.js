import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { chapters } from '../../data/constant';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="bg-black text-white dark:bg-gray-700 blue:bg-blue-300 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 fixed top-4 right-4"
      >
        <GiHamburgerMenu size="30" />
      </button>
      {isOpen && (
        <div className="fixed top-0 w-full h-full z-10 flex items-center justify-center bg-black bg-opacity-50">
          <ul className="bg-white text-black dark:bg-gray-800 blue:bg-blue-200 rounded-lg p-4 space-y-4 text-xl">
            <button onClick={toggleMenu}>
              <AiFillCloseCircle size="30" />
            </button>
            {/* Pour chaque élément  */}
            {chapters.map((chapter) => (
              <li key={chapter}>
                <Link to={chapter.id} smooth={true} onClick={toggleMenu}>
                  {chapter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
