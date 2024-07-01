import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Milim from './Milim/Milim.js'
import Tests from './Milim/Tests.js'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Milim /> */}
          <Route path="/" exact component={Milim} />
          <Route path="/tests" component={Tests} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
