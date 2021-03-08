import './App.css';

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Simple from './components/Simple';
import Complex from './components/Complex';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/complex" component={Complex} exact />
        <Route path="/simple" component={Simple} exact />
        <Route path="/" component={Home} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
