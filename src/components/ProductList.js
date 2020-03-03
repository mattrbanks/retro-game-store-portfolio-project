import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import { ButtonContainerGames } from "./ButtonForGames";
import { Link } from "react-router-dom";
import CarouselSlider from "./CarouselSlider";
import styled from "styled-components";
import ButtonToTop from "../components/ButtonToTop";

export default class ProductList extends Component {
  /*we don't need state here unless we want to console.log something*/
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <StoreTitleWrapper>
              <h1 id="store-title">Matt's Retro Games</h1>
            </StoreTitleWrapper>

            <CarouselSlider />
          </div>
        </div>
        <div className="container">
          <h2>
            We only carry complete in box products in the best condition
            possible. Quality guaranteed!
          </h2>
          <div>
            <ul>
              <li className="list-unstyled text-center mt-5">
                <a href="#games-section">(See Our Games)</a>
              </li>
            </ul>
          </div>
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
                      return null; //return the above or return nothing
                    }
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
        <div className="py-5" id="games-section">
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
                    src={"img/PlayStationLogo resized.png"}
                    alt="product"
                    className="card-img-top"
                  />
                </ButtonContainerGames>
              </Link>
            </div>
          </div>
        </div>
        <ButtonToTop />
      </React.Fragment>
    );
  }
}

const StoreTitleWrapper = styled.div`
  #store-title {
    font-size: 6rem;
    text-align: center;
  }

  @media screen and (max-width: 991px) {
    #store-title {
      font-size: 4rem;
      text-align: center;
  }

  @media screen and (max-width: 835px) {
    #store-title {
      font-size: 3.5rem;
      text-align: center;
  }

  @media screen and (max-width: 700px) {
    #store-title {
      font-size: 3rem;
      text-align: center;
  }

  @media screen and (max-width: 575px) {
    #store-title {
      font-size: 3rem;
      text-align: center;
  }

  @media screen and (max-width: 480px) {
    #store-title {
      font-size: 2.5rem;
      text-align: center;
  }

  @media screen and (max-width: 369px) {
    #store-title {
      font-size: 2rem;
      text-align: center;
  }
`;
