import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMobile } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-white" id='Service'>
      <h1 className="text-4xl font-bold text-gray-800 mb-4 p-10">Mes Services</h1>
      <p className="text-xl text-gray-600 text-center max-w-2xl mb-10">
        Nous offrons une gamme complète de services pour la création de sites web et d&apos;applications web. Que ce soit pour une simple vitrine ou une application complexe, notre équipe est prête à transformer vos idées en réalité. Nous utilisons les dernières technologies pour garantir que vos projets soient performants, réactifs et adaptés à vos besoins.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-10">
        <div className="block rounded-lg bg-black shadow-lg dark:bg-surface-dark dark:text-white text-surface">
          <div className="p-6 flex flex-col items-center">
            <FontAwesomeIcon icon={faGlobe} className="text-blue-500 text-3xl mb-4" />
            <h5 className="mb-2 text-xl font-medium leading-tight text-center">
              Création site web
            </h5>
            <p className="mb-4 text-base text-center">
              Nous créons des sites web adaptés à vos besoins.
            </p>
          </div>
        </div>

        <div className="block rounded-lg bg-black shadow-lg dark:bg-surface-dark dark:text-white text-surface">
          <div className="p-6 flex flex-col items-center">
            <FontAwesomeIcon icon={faMobile} className="text-blue-500 text-3xl mb-4" />
            <h5 className="mb-2 text-xl font-medium leading-tight text-center">
              Applications web
            </h5>
            <p className="mb-4 text-base text-center">
              Développement d&apos;applications web performantes et réactives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
