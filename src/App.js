import './App.css';

import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Nav from './components/layout/nav/Nav';

import Home from './components/home/Home';
import Technology from './components/technology/Technology';
import About from './components/about/About';
import Contact from './components/contact/Contact';

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
        <Header />{/*In the router because of the picture ling to the home page*/}
        <Nav />
        <div>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/technology">
              <Technology />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />{/*In the router because of the mailto*/}
      </Router>
    </div>
  );
}

export default App;
