import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import ScrollToTopOnMount from "./ScrollToTopOnMount";

export default class NintendoGames extends Component {
  render() {
    return (
      <NintendoGamesWrapper>
        <ScrollToTopOnMount />
        <div>
          <ul id="nintendo-games-nav" className="quick-scroll-menu">
            <li>
              <a href="#super-nintendo">SNES</a>
            </li>
            <li>
              <a href="#nin-ent-sys">NES</a>
            </li>
            <li>
              <a href="#nin-gamecube">Gamecube</a>
            </li>
            <li>
              <a href="#nin-64">Nintendo 64</a>
            </li>
            <li>
              <a href="#nin-famicom">Famicom</a>
            </li>
            <li>
              <a href="#nin-wii">Wii</a>
            </li>
          </ul>

          <div id="super-nintendo" className="py-5">
            <div className="container">
              <Title name="Super Nintendo" title=" Games" />

              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      if (product.id >= 300 && product.id < 350) {
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

          <div id="nin-ent-sys" className="py-5">
            <div className="container">
              <Title name="Nintendo Entertainment System" title=" Games" />

              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      if (product.id >= 350 && product.id < 400) {
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

          <div id="nin-gamecube" className="py-5">
            <div className="container">
              <Title name="Nintendo Gamecube" title=" Games" />

              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      if (product.id >= 400 && product.id < 450) {
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

          <div id="nin-64" className="py-5">
            <div className="container">
              <Title name="Nintendo 64" title=" Games" />

              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      if (product.id >= 450 && product.id < 500) {
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

          <div id="nin-famicom" className="py-5">
            <div className="container">
              <Title name="Nintendo Famicom" title=" Games" />

              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      if (product.id >= 500 && product.id < 550) {
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

          <div id="nin-wii" className="py-5">
            <div className="container">
              <Title name="Nintendo Wii" title=" Games" />

              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      if (product.id >= 550 && product.id < 600) {
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
      </NintendoGamesWrapper>
    );
  }
}

const NintendoGamesWrapper = styled.div`
  #nintendo-games-nav {
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

  @media screen and (max-width: 1024px) {
    a {
      font-size: 0.63rem;
    }
  }

  @media screen and (max-width: 835px) {
    a {
      font-size: 0.55rem;
    }
  }

  @media screen and (max-width: 700px) {
    a {
      font-size: 0.82rem;
    }
  }

  @media screen and (max-width: 689px) {
    .quick-scroll-menu {
      margin-top: 2rem;
    }
    a {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 575px) {
    .quick-scroll-menu {
      margin-top: 4rem;
    }
    a {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 378px) {
    .quick-scroll-menu {
      margin-top: 7rem;
    }
    a {
      font-size: 0.72rem;
    }
  }
`;
