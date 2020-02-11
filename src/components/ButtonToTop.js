import React, { Component } from "react";
import styled from "styled-components";

export default class ButtonToTop extends Component {
  render() {
    return (
      <ButtonToTopWrapper href="#" id="fixed-arrow">
        <i id="arrow-up" className="fas fa-arrow-up"></i>
      </ButtonToTopWrapper>
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
`;
