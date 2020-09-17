import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            platform,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>platform: {platform}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price: <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div className="row">
                    <Link to="/" className="ml-auto mr-auto">
                      <ButtonContainer>home</ButtonContainer>
                    </Link>
                    <DetailsAnchorWrapper>
                      <a href="javascript:history.back()">
                        <ButtonContainer>go back</ButtonContainer>
                      </a>
                    </DetailsAnchorWrapper>
                    <ButtonContainer
                      className="ml-auto mr-auto"
                      cart /* Anywhere this prop is present we will be turning the button yellow. See the Button component for details. The cart prop is passed from this component to other components.*/
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

const DetailsAnchorWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
