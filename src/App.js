import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header/>
        <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;

