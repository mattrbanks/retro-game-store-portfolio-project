import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import Search from "./Search";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <div className="navbar">
          <Link to="/">
            <img src={logo} alt="store" className="navbar-brand" />
          </Link>

          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>

          <Link to="/cart" className="ml-auto">
            <ButtonContainer nav>
              <span className="mr-2">
                <i className="fas fa-cart-plus" />
              </span>
              my cart
            </ButtonContainer>
          </Link>
        </div>
        <div className="navbar">
          <Search />
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  display: block;
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
