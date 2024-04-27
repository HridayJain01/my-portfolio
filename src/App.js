import React from 'react';
import { HashRouter, Route } from 'react-router-dom'; // Import HashRouter
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

const App = () => {
  return (
    <HashRouter> 
      <Route exact path="/" component={HomePage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/contact" component={ContactPage} />
    </HashRouter> 
  );
};

export default App;
