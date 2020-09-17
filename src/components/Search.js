import React, { Component } from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Search extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { searchFilter, updateSearch, search, enterKeyPressed } = value;

          return (
            <div>
              <SearchWrapper>
                <input
                  className="form-control"
                  type="search"
                  name="searchInput"
                  value={search}
                  onChange={updateSearch}
                  onKeyPress={enterKeyPressed}
                />
                <Link to="/search-user-results">
                  <button
                    id="search-btn"
                    type="button"
                    disabled={search === "" ? true : false}
                    className="btn btn-info"
                    onClick={searchFilter}
                  >
                    Search
                  </button>
                </Link>
              </SearchWrapper>
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
