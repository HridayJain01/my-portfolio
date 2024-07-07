import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-yellow-light mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-gray-light text-lg mb-8">
          Hi there! I'm Hriday, a passionate web developer.
        </p>
        <a
          href="www.google.com"
          className="bg-yellow-dark hover:bg-yellow-light text-gray-dark font-semibold py-2 px-4 rounded inline-block"
        >
          Download Resume (PDF)
        </a>
      </div>
    </div>
  );
};

export default HomePage;
