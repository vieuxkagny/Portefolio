import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Accueil = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen p-10 bg-white">
      <div className="flex flex-col justify-center flex-1 p-10">
        <h2 className="text-2xl text-gray-600">Salut, je suis</h2>
        <h6 className="text-3xl text-gray-800 mb-2">Vieux M Kagny</h6>
        <p className="text-xl text-gray-500">Développeur Freelance</p>
        <div className="flex gap-2 mt-5">
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
      
      <div className="flex items-center justify-center flex-1">
        <Image
          src="/images/OIG4.jpeg"
          className="w-full h-full object-cover rounded-lg"
          width={500} height={500}
          alt="Programme"
        />
      </div>
    </div>
  );
};

export default Accueil;
