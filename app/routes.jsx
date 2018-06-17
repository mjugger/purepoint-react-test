import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Home from './scenes/home';
import HelloWorld from './scenes/HelloWorld';

const Routes = (
  <Router>
    <div id="routes">
      <Route exact path="/" component={HelloWorld}/>
    </div>
  </Router>
);
export default Routes;
