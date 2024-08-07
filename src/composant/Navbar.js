'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className="bg-white fixed top-0 left-0 w-full border-b border-gray-200 shadow-lg z-50 p-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-black">
                  <Image src="/images/dessin.jpeg" alt="Logo" width={70} height={70}/>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link href="/" className="text-black hover:bg-blue-500 hover:text-white rounded-lg p-2">
                  Accueil
                </Link>
                <Link href="#Quisuisje" className="text-black hover:bg-blue-500 hover:text-white rounded-lg p-2">
                  Qui suis-je?
                </Link>
                <Link href="#Service" className="text-black hover:bg-blue-500 hover:text-white rounded-lg p-2">
                  Service
                </Link>
                <Link href="#Competence" className="text-black hover:bg-blue-500 hover:text-white rounded-lg p-2">
                  Compétence
                </Link> 
                <Link href="#ContactForm" className="text-black hover:bg-blue-500 hover:text-white rounded-lg p-2">
                  Contact
                </Link>

  
    
                <a
                  href="./fichier/Vieux Maita Kagny.pdf"
                  download
                  className="text-black bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block"
                >
                  Mon CV
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                 {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg> 
              )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-black block hover:bg-blue-500 hover:text-white rounded-lg p-2">
                Accueil
              </Link>
              <Link href="#Quisuisje" className="text-black block hover:bg-blue-500 hover:text-white rounded-lg p-2">
                Qui suis-je?
              </Link>
              <Link href="#Service" className="text-black block hover:bg-blue-500 hover:text-white rounded-lg p-2">
                Service
              </Link>
              <Link href="#Competence" className="text-black block hover:bg-blue-500 hover:text-white rounded-lg p-2">
                Compétence
              </Link>
              <Link href="#ContactForm" className="text-black block hover:bg-blue-500 hover:text-white rounded-lg p-2">
                Contact
              </Link>
            </div>
          </div>
          
        )}
      </nav>
      
    </>
  );
};

export default Navbar;