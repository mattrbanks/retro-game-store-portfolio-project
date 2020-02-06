import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default class Carousel extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { nextBtnCarousel, prevBtnCarousel } = value;
          return (
            <React.Fragment>
              <CarouselWrapper>
                <div className="carousel-container">
                  <div className="container-fluid col-12">
                    <div id="prev-btn-container" className="float-left">
                      <i
                        className="fas fa-arrow-left"
                        id="prev-btn"
                        onClick={() => nextBtnCarousel()}
                      ></i>
                    </div>
                    <div id="next-btn-container" className="float-right">
                      <i
                        className="fas fa-arrow-right"
                        id="next-btn"
                        onClick={() => prevBtnCarousel()}
                      ></i>
                    </div>
                  </div>

                  <figure className="carousel-slide">
                    <img
                      src={"img2/game-4 resized.jpg"}
                      className="carousel-images"
                      id="first-carousel"
                      alt="SegaLogo"
                    />
                    <img
                      src={"img2/game-5 resized.jpg"}
                      className="carousel-images"
                      id="second-carousel"
                      alt="NintendoLogo"
                    />
                    <img
                      src={"img2/game-1 resized.jpg"}
                      className="carousel-images"
                      id="third-carousel"
                      alt="PlaystationLogo"
                    />
                    <img
                      src={"img2/game-3.jpg"}
                      className="carousel-images"
                      id="first-clone"
                      alt="SegaLogo"
                    />
                    <img
                      src={"img2/game-4 resized.jpg"}
                      className="carousel-images"
                      id="first-clone"
                      alt="SegaLogo"
                    />
                  </figure>
                </div>
              </CarouselWrapper>
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}

const CarouselWrapper = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  .carousel-container {
    overflow: hidden;
    width: 60%;
    margin: auto;
    border: 0.5rem solid black;
  }

  .carousel-container figure {
    position: relative;
    width: 500%;
    margin: 0;
    left: 0;
    animation: 20s carousel-container infinite;
  }

  .carousel-container figure img {
    width: 20%;
    float: left;
  }

  figure {
    display: flex;
    height: 100%;
  }

  @keyframes carousel-container {
    0% {
      left: 0;
    }
    20% {
      left: 0;
    }
    25% {
      left: -100%;
    }
    45% {
      left: -100%;
    }
    50% {
      left: -200%;
    }
    70% {
      left: -200%;
    }
    75% {
      left: -300%;
    }
    95% {
      left: -300%;
    }
    100% {
      left: -400%;
    }
  }

  #prev-btn {
    position: absolute;
    z-index: 10;
    font-size: 1rem;
    color: white;

    cursor: pointer;
  }

  #next-btn {
    position: absolute;
    z-index: 10;
    font-size: 1rem;
    color: white;

    cursor: pointer;
  }

  #prev-btn-container {
    margin-left: -0.85rem;
    margin-top: 35%;
  }

  #next-btn-container {
    margin-top: 35%;
  }
`;
