import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    //We import the context and wrap our component with it which injects the context argument in the component.
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>item added to cart</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : $ {price}</h5>
                      {/* If you have an about or information home page you would
                      need to guide the link back to the products page to
                      continue shopping but here the products page is the home
                      page or / */}
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          store
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          go to cart
                        </ButtonContainer>
                      </Link>
                      <ButtonContainer cart onClick={() => closeModal()}>
                        stay here
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  #modal {
    background: var(--mainWhite);
  }
`;
