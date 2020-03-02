import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default class ButtonToTop extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { scrollSmooth } = value;

          return (
            <div>
              <ButtonToTopWrapper
                href=""
                id="fixed-arrow"
                onClick={scrollSmooth}
              >
                <i id="arrow-up" className="fas fa-arrow-up"></i>
              </ButtonToTopWrapper>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

const ButtonToTopWrapper = styled.a`
  #arrow-up {
    background: #232528;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  position: fixed;
  width: 1rem;
  height: 1rem;
  bottom: 2.5rem;
  right: 2.5rem;
  -webkit-transform: translateZ(0);
  z-index: 10;
  text-decoration: none;
  text-align: center;
  line-height: 1rem;
  font-size: 3rem;
  color: #f3f3f3;
  opacity: 0.5;

  @media screen and (max-width: 1024px) {
    #arrow-up {
      background: #232528;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
    position: fixed;
    width: 1rem;
    height: 1rem;
    bottom: 1.5rem;
    right: 1.5rem;
    -webkit-transform: translateZ(0);
    z-index: 10;
    text-decoration: none;
    text-align: center;
    line-height: 1rem;
    font-size: 2rem;
    color: #f3f3f3;
    opacity: 0.5;
  }

  @media screen and (max-width: 835px) {
    #arrow-up {
      background: #232528;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
    position: fixed;
    width: 1rem;
    height: 1rem;
    bottom: 1.5rem;
    right: 1.5rem;
    -webkit-transform: translateZ(0);
    z-index: 10;
    text-decoration: none;
    text-align: center;
    line-height: 1rem;
    font-size: 2rem;
    color: #f3f3f3;
    opacity: 0.5;
  }

  @media screen and (max-width: 768px) {
    #arrow-up {
      background: #232528;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
    position: fixed;
    width: 1rem;
    height: 1rem;
    bottom: 1.5rem;
    right: 1.2rem;
    -webkit-transform: translateZ(0);
    z-index: 10;
    text-decoration: none;
    text-align: center;
    line-height: 1rem;
    font-size: 2rem;
    color: #f3f3f3;
    opacity: 0.5;
  }
`;
