import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-light mb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-gray-light rounded-lg p-4">
              <img
                src={`images/${project.image}`}
                alt={project.title}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-dark mb-2">{project.title}</h3>
              <p className="text-gray-light">{project.description}</p>
              <a
                href={project.link}
                className="block mt-4 text-yellow-dark hover:text-yellow-light"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
