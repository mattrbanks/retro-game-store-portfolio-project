import React, { Component } from "react";
import styled from "styled-components";

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer className="card-footer">
        <div className="row">
          <div className="col">
            <p>This website was developed by Matthew R. Banks.</p>
          </div>
          <div className="col">
            <p>This store is not making any money and uses a sandbox PayPal.</p>
          </div>
          <div className="col">
            <p>Any images used are for a personal projects portfolio.</p>
          </div>
          <div className="col">
            <p>See the contact section of this site for more info.</p>
          </div>
        </div>
      </FooterContainer>
    );
  }
}

const FooterContainer = styled.div`
  background: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  text-align: center;
`;
