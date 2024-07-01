import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Milim from './Milim/Milim.js'
import Tests from './Milim/Tests.js'

function App() {
  return (
    <Router>
      <Routes>
        
          {/* <Milim /> */}
          <Route path="/" exact component={Milim} />
          <Route path="/tests" component={Tests} />
        
      </Routes>
    </Router>
  );
}

export default App;
