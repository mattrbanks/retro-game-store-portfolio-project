import React, { Component } from "react";
import styled from "styled-components";

export default class About extends Component {
  render() {
    return (
      <AboutContainer>
        <div>
          <img src="img/aboutImg2.jpg" alt="" className="aboutImg" />
          <div id="about-store">
            <h1>About Matt's Retro Games</h1>
            <h4>
              We are dedicated to everything involving video games and
              especially the great titles from our childhood. We focus on
              collectors who want their products in the best condition
              available. As a result we have a smaller but high quality
              selection of game consoles and games. We sell products from Sega,
              Nintendo, and Playstation. All games and consoles are complete in
              box and as a result our supply is limited. We are strictly an
              online store. We hope we can help scratch that nostalgia itch and
              that you leave our site satisfied. Happy gaming!{" "}
            </h4>
          </div>
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
    width: 90%;
  }

  #about-store {
    margin: 3rem;
    padding: 3rem 3rem 7rem 3rem;
  }
`;
