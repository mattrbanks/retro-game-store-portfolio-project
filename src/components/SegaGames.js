import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import ButtonToTop from "../components/ButtonToTop";

export default class SegaGames extends Component {
  render() {
    return (
      <React.Fragment>
        <SegaGamesWrapper>
          <ScrollToTopOnMount />
          <div>
            <ul id="sega-games-nav" className="quick-scroll-menu">
              <li>
                <a href="#sega-cd">Sega CD</a>
              </li>
              <li>
                <a href="#sega-genesis">Genesis</a>
              </li>
              <li>
                <a href="#sega-dreamcast">Dreamcast</a>
              </li>
              <li>
                <a href="#sega-saturn">Saturn</a>
              </li>
              <li>
                <a href="#sega-master-system">Master Sys</a>
              </li>
            </ul>

            {/* When we map through the products array, which is connected to the objects storeProducts, We render what the product component exports for each product in the object . */}
            <div id="sega-cd" className="py-5">
              <div className="container">
                <Title name="Sega CD" title=" Games" />

                <div className="row">
                  <ProductConsumer>
                    {value => {
                      return value.products.map(product => {
                        if (product.id >= 50 && product.id < 100) {
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
            <div id="sega-genesis" className="py-5">
              <div className="container">
                <Title name="Sega Genesis" title=" Games" />

                <div className="row">
                  <ProductConsumer>
                    {value => {
                      return value.products.map(product => {
                        if (product.id >= 100 && product.id < 150) {
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
            <div id="sega-dreamcast" className="py-5">
              <div className="container">
                <Title name="Sega Dreamcast" title=" Games" />

                <div className="row">
                  <ProductConsumer>
                    {value => {
                      return value.products.map(product => {
                        if (product.id >= 150 && product.id < 200) {
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
            <div id="sega-saturn" className="py-5">
              <div className="container">
                <Title name="Sega Saturn" title=" Games" />

                <div className="row">
                  <ProductConsumer>
                    {value => {
                      return value.products.map(product => {
                        if (product.id >= 200 && product.id < 250) {
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
            <div id="sega-master-system" className="py-5">
              <div className="container">
                <Title name="Sega Master System" title=" Games" />

                <div className="row">
                  <ProductConsumer>
                    {value => {
                      return value.products.map(product => {
                        if (product.id >= 250 && product.id < 300) {
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
        </SegaGamesWrapper>
        <ButtonToTop />
      </React.Fragment>
    );
  }
}

const SegaGamesWrapper = styled.div`
  #sega-games-nav {
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
