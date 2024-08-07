import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Funngro</Link>
        </h1>
        <nav>
          <Link to="/projects" className="px-4">Teen</Link>
          <Link to="/contact" className="px-4">Company</Link>
        </nav>
      </div>
    </header>
  
  );
};

export default Header;