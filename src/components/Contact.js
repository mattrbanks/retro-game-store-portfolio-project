import React, { Component } from "react";
import styled from "styled-components";

export default class Contact extends Component {
  render() {
    return (
      <ContactContainer className="container">
        <div className="row shop-message  contact">
          <h1>
            If you have any problems with your purchase, we will be happy to
            replace your product with free shipping. Just mail it back to us
            with the reason for the return.
          </h1>
        </div>
        <div className="row shop-message">
          <h2>
            ADDRESS:
            <br />
            1049 Barnes Avenue, Cincinnati, OH, 45223
          </h2>
        </div>
        <div className="row shop-message">
          <h2>
            Thanks for taking the time to browse my game store. Please contact
            me in one of the following ways. Reach back to your childhood and
            never let it go. -Matt
          </h2>
        </div>
        <div className="row">
          <div>
            <a
              id="profile-link"
              href="https://github.com/mattrbanks"
              target="_blank"
              className=""
            >
              <i
                id="git-hub-icon"
                className="fab fa-github-square icon col"
              ></i>
            </a>
          </div>
          <div>
            <a
              id="profile-link"
              href="https://www.linkedin.com/in/matthewr-banks"
              target="_blank"
              className=""
            >
              <i id="linkedin-icon" className="fab fa-linkedin icon col"></i>
            </a>
          </div>
          <div>
            <a
              id="profile-link"
              href="mailto:banks.matt81@gmail.com"
              target="_blank"
              className=""
            >
              <i
                id="email-icon"
                className="fas fa-envelope-open-text icon col"
              ></i>
            </a>
          </div>
          <div>
            <a
              id="profile-link"
              href="mailto:banks.matt81@gmail.com"
              target="_blank"
              className=""
            >
              <i id="resume-icon" className="fas fa-file icon col"></i>
            </a>
          </div>
        </div>
      </ContactContainer>
    );
  }
}

const ContactContainer = styled.div`
  .icon {
    font-size: 5rem;
    margin-right: 4rem;
  }

  .contact {
    margin-top: 2.5rem;
  }

  #git-hub-icon {
    text-shadow: 0.3rem 0.3rem red;
    color: black;
  }

  #linkedin-icon {
    text-shadow: 0.3rem 0.3rem orange;
    color: black;
  }

  #email-icon {
    text-shadow: 0.3rem 0.3rem yellow;
    color: black;
  }

  #resume-icon {
    text-shadow: 0.3rem 0.3rem green;
    color: black;
  }

  .shop-message {
    margin-bottom: 5rem;
  }
`;
