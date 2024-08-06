// components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8" id='ContactForm'>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Vieux M Kagny</h2>
            <p className="mt-2">© 2024 Mon portefolio. Tous droits réservés.</p>
          </div>
          <div className="space-x-4">
            <a href="" className="text-gray-400 hover:text-white">Accueil</a>
           
            <a href="#ContactForm" className="text-gray-400 hover:text-white">Contact</a>
           
          </div>
        </div>
        <div className="flex gap-2 mt-5 justify-center space-x-4">
          <a href='https://github.com/vieuxkagny' className="text-blue-500 hover:text-blue-600">
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </a>
          <a href='https://www.linkedin.com/in/vieuxkagny' className="text-blue-500 hover:text-blue-600">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
          <a href='https://www.instagram.com/vieuxkagny' className="text-blue-500 hover:text-blue-600">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>
          <a href='https://x.com/VieuxKagny' className="text-blue-500 hover:text-blue-600">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
