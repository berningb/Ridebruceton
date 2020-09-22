import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Service from './Pages/Service/Service'
import Merch from './Pages/Merch/Merch'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ServiceDisplay from './Components/ServiceDisplay'
import './Styles/App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/service" exact component={Service} />
        <Route path="/service/:serviceId" component={ServiceDisplay} />
        <Route path="/merch" exact component={Merch} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </Router>
  )}

export default App;