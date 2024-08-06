import React from 'react';

const Competences = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white" id='Competence'>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Mes Compétences</h1>
      <p className="text-xl text-gray-600 text-center max-w-2xl mb-10">
        Avec quelque mois d'expérience dans le développement web, j'ai acquis une  maîtrise des technologies essentielles. Voici les compétences que j'utilise régulièrement pour créer des applications web performantes et intuitives.
      </p>

      <div className="w-full max-w-2xl flex gap-4 text-center">
        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-800">HTML</h2>
          <div className="bg-gray-300 h-2 rounded-full">
            <div className="bg-blue-500 h-full rounded-full" style={{ width: '90%' }}></div>
          </div>
          <p className="text-right text-gray-500">90%</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-800">CSS</h2>
          <div className="bg-gray-300 h-2 rounded-full">
            <div className="bg-blue-500 h-full rounded-full" style={{ width: '85%' }}></div>
          </div>
          <p className="text-right text-gray-500">85%</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-800">JavaScript</h2>
          <div className="bg-gray-300 h-2 rounded-full">
            <div className="bg-blue-500 h-full rounded-full" style={{ width: '70%' }}></div>
          </div>
          <p className="text-right text-gray-500">70%</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-800">React</h2>
          <div className="bg-gray-300 h-2 rounded-full">
            <div className="bg-blue-500 h-full rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-right text-gray-500">75%</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-800">Node.js</h2>
          <div className="bg-gray-300 h-2 rounded-full">
            <div className="bg-blue-500 h-full rounded-full" style={{ width: '70%' }}></div>
          </div>
          <p className="text-right text-gray-500">70%</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-800">MongoDB</h2>
          <div className="bg-gray-300 h-2 rounded-full">
            <div className="bg-blue-500 h-full rounded-full" style={{ width: '65%' }}></div>
          </div>
          <p className="text-right text-gray-500">65%</p>
        </div>
      </div>
    </div>
  );
};

export default Competences;