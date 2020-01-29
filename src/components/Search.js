import React, { Component } from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";

export default class Search extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { title } = value.products;
          return (
            <div>
              {/* this is new and we are here */}
              <SearchWrapper>
                <input className="form-control" type="text" />
                <button type="button" class="btn btn-info">
                  Search
                </button>
              </SearchWrapper>
              {/* <input type="text" value={value} onChange={this.handleChange} /> */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

const SearchWrapper = styled.div`
  display: flex;
  width: 19rem;
`;
