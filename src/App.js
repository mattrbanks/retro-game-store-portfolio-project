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
import SearchUserResults from "./components/SearchUserResults";

class App extends Component {
  render() {
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
          <Route path="/search-user-results" component={SearchUserResults} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
