import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Milim from './Milim/Milim.js'
import Tests from './Milim/Tests.js'
import Quad from './Quad/Quad.js'
import Solubility from './Solubility/SolubilityDraft.js'
import RandomizerA from './Randomizer/RandomizerA.js';

function App() {
  return (
    <Router>
      <Routes>
        
          <Route path="/" element={<Milim />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/quad" element={<Quad />} />
          <Route path="/solubility" element={<Solubility />} />
          <Route path="/randomizer" element={<RandomizerA />} />
        
      </Routes>
    </Router>
  );
}

export default App;
