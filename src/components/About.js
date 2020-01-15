import React, { Component } from "react";
import styled from "styled-components";

export default class About extends Component {
  render() {
    return (
      <AboutContainer>
        <div>
          <img src="img/aboutImg.jpg" alt="" className="aboutImg" />
          <h1>About Matt's Retro Games</h1>
          <h4>
            We are dedicated to everything involving video games and especially
            the great titles from our childhood.{" "}
          </h4>
        </div>
      </AboutContainer>
    );
  }
}
const AboutContainer = styled.div`
  .aboutImg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
`;
