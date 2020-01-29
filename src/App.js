import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import Default from "./components/Default";
import Modal from "./components/Modal";
import SegaGames from "./components/SegaGames";
import NintendoGames from "./components/NintendoGames";
import PlaystationGames from "./components/PlaystationGames";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    //We can get rid of the state and the methods here because they are now defined in Context.js. We are providing these globally through the context api.
    //Here we are using react router for page navigation. React Router is a collection of navigational components that compose declaratively with your application.
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/sega-games" component={SegaGames} />
          <Route path="/nintendo-games" component={NintendoGames} />
          <Route path="/playstation-games" component={PlaystationGames} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
