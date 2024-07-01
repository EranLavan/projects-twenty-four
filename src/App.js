import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Milim from './Milim/Milim.js'
import Tests from './Milim/Tests.js'

function App() {
  return (
    <Router basename="/projects-twenty-four">
      <Routes>
        
          <Route path="/" element={<Milim />} />
          <Route path="/tests" element={<Tests />} />
        
      </Routes>
    </Router>
  );
}

export default App;
