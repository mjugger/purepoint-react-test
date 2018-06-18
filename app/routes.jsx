import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Home from './scenes/home';
import RecipeList from './scenes/RecipeList';
const Routes = (
  <Router>
    <div id="routes">
      <Route exact path="/" component={RecipeList}/>
    </div>
  </Router>
);
export default Routes;
