import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'

import './Styles/App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={About} /> 
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  )}

export default App;