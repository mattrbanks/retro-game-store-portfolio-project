import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import { ButtonContainerGames } from "./ButtonForGames";
import { Link } from "react-router-dom";
import CarouselSlider from "./CarouselSlider";

export default class ProductList extends Component {
  /*we don't need state here unless we want to console.log something*/
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Matt's Retro Games" />

            <CarouselSlider />
          </div>
        </div>
        <div className="container">
          <h2>
            We only carry complete in box products in the best condition
            possible. Quality guaranteed! -Collectors Paradise
          </h2>
        </div>
        <div className="py-5">
          <div className="container">
            <Title name="our" title=" consoles" />

            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    if (product.id < 50) {
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
        <div className="py-5">
          <div className="container">
            <Title name="our" title="games" />
            <div className="row">
              <Link to="/sega-games" className="ml-auto mr-auto">
                <ButtonContainerGames>
                  <img
                    id="sega-logo"
                    src={"img/SegaLogo resized.jpg"}
                    alt="product"
                    className="card-img-top"
                  />
                </ButtonContainerGames>
              </Link>

              <Link to="/nintendo-games" className="ml-auto mr-auto">
                <ButtonContainerGames>
                  <img
                    id="nintendo-logo"
                    src={"img/NintendoLogo.png"}
                    alt="product"
                    className="card-img-top"
                  />
                </ButtonContainerGames>
              </Link>

              <Link to="/playstation-games" className="ml-auto mr-auto">
                <ButtonContainerGames>
                  <img
                    id="playstation-logo"
                    src={"img/PlaystationLogo resized.png"}
                    alt="product"
                    className="card-img-top"
                  />
                </ButtonContainerGames>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
