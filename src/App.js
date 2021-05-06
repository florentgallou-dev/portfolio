import './App.css';

import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Nav from './components/layout/nav/Nav';

import Home from './components/home/Home';
import Technology from './components/technology/Technology';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Nav />
        <div>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/technology">
              <Technology />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
