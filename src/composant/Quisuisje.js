import React from 'react';
import Image from 'next/image';
const Quisuisje = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen p-10 pt-10" id='Quisuisje'>
      <div className="flex flex-row w-full h-[100vh]">
        <div className="flex flex-col justify-center flex-1 p-10 bg-white rounded-lg shadow-lg">
          <h6 className="text-2xl text-gray-800 mb-2">Vieux M Kagny</h6>
          <p className="text-xl text-gray-600">Développeur Freelance</p>
          <p className="text-lg text-gray-500 mb-4">
            En tant que passionné du développement web et mobile, je suis un jeune développeur dynamique qui souhaite mettre ses compétences au service de startups et d&apos;entreprises en pleine croissance.
          </p>
          <p className="text-lg text-gray-500 mb-4">
            J&apos;ai également l&apos;expérience de la formation dans différentes technologies de programmation. J&apos;ai une préférence pour le développement d&apos;applications web avec des outils tels que React, Next.js, MongoDB et Node.js.
          </p>
          <button className="p-5">
            <a
              href="./fichier/Vieux Maita Kagny.pdf"
              download
              className="text-black bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Télécharger Mon CV
            </a>
          </button>
        </div>
        
        <div className="flex items-center justify-center flex-1 bg-white rounded-lg shadow-lg ml-4">
          <Image
            src="/images/IMG-12.jpg"
            className="w-full h-full object-cover rounded-lg"
            width={500} height={500}
            alt="Programme"
          />
        </div>
      </div>
    </div>
  );
}

export default Quisuisje;
