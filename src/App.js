import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
};

export default App;
