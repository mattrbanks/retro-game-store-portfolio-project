import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import ScrollToTopOnMount from "./ScrollToTopOnMount";

export default class PlaystationGames extends Component {
  render() {
    return (
      <PlaystationGamesWrapper>
        <ScrollToTopOnMount />
        <div>
          <ul id="playstation-games-nav" className="quick-scroll-menu">
            <li>
              <a href="#playstation">Playstation</a>
            </li>
            <li>
              <a href="#playstation-2">Playstation 2</a>
            </li>
          </ul>

          <div id="playstation" className="py-5">
            <div className="container">
              <Title name="Playstation" title=" Games" />

              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      if (product.id >= 600 && product.id < 650) {
                        return <Product key={product.id} product={product} />;
                      } else {
                        return null;
                      }
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>

          <div id="playstation-2" className="py-5">
            <div className="container">
              <Title name="Playstation 2" title=" Games" />

              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      if (product.id >= 650 && product.id < 700) {
                        return <Product key={product.id} product={product} />;
                      } else {
                        return null;
                      }
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </div>
      </PlaystationGamesWrapper>
    );
  }
}

const PlaystationGamesWrapper = styled.div`
  #playstation-games-nav {
    list-style-type: none;
    position: fixed;
    top: 10.5rem;
    right: 0.25rem;
    -webkit-transform: translateZ(0);
    z-index: 10;
    text-align: center;
    font-size: 0.9rem;
    opacity: 0.9;
  }

  @media screen and (max-width: 700px) {
    .quick-scroll-menu {
      margin-top: 2rem; 
    }
    a {
      font-size: 0.8rem;
    } 
  }
`;
