import React from 'react';

const Competences = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white" id='Competence'>
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Mes Compétences</h1>
      <p className="text-xl text-gray-600 text-center max-w-2xl mb-10">
        Avec quelques mois d&apos;expérience dans le développement web, j&apos;ai acquis une maîtrise des technologies essentielles. Voici les compétences que j&apos;utilise régulièrement pour créer des applications web performantes et intuitives.
      </p>

      <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 text-center flex-wrap">
        {[
          { skill: 'HTML', percentage: 90 },
          { skill: 'CSS', percentage: 85 },
          { skill: 'JavaScript', percentage: 70 },
          { skill: 'React', percentage: 75 },
          { skill: 'Node.js', percentage: 70 },
          { skill: 'MongoDB', percentage: 65 },
        ].map(({ skill, percentage }) => (
          <div key={skill} className="mb-6 w-full sm:w-1/2 lg:w-1/3">
            <h2 className="text-xl font-medium text-gray-800">{skill}</h2>
            <div className="bg-gray-300 h-2 rounded-full">
              <div className="bg-blue-500 h-full rounded-full" style={{ width: `${percentage}%` }}></div>
            </div>
            <p className="text-right text-gray-500">{percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competences;
