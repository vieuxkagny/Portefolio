import React from 'react';

const Quisuisje = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen p-10 pt-10" id='Quisuisje'>
      <div className="flex flex-row w-full h-[100vh]">
        <div className="flex flex-col justify-center flex-1 p-10 bg-white rounded-lg shadow-lg">
          <h6 className="text-2xl text-gray-800 mb-2">Vieux M Kagny</h6>
          <p className="text-xl text-gray-600">Développeur Freelance</p>
          <p className="text-lg text-gray-500 mb-4">
            En tant que passionné du développement web et mobile, je suis un jeune développeur dynamique qui souhaite mettre ses compétences au service de startups et d'entreprises en pleine croissance.
          </p>
          <p className="text-lg text-gray-500 mb-4">
            J'ai également l'expérience de la formation dans différentes technologies de programmation. J'ai une préférence pour le développement d'applications web avec des outils tels que React, Next.js, MongoDB et Node.js.
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
          <img
            src="/images/IMG-12.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt="Programme"
          />
        </div>
      </div>
    </div>
  );
}

export default Quisuisje;
