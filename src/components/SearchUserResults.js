import React, { Component } from "react";
import { ProductConsumer } from "../context";
import Title from "./Title";
import NoSearchResults from "./NoSearchResults";
import Product from "./Product";

export default class SearchResults extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            //We destructured the state so cart is a property that is included in the destructured state inside value in context.js.
            const { searchResults } = value;
            //cart is an empty array to start with so the .length array method works here.
            if (searchResults.length > 0) {
              return (
                <React.Fragment>
                  <div className="py-5">
                    <div className="container">
                      <Title name="your" title=" search results" />

                      <div className="row">
                        <ProductConsumer>
                          {value => {
                            return value.searchResults.map(product => {
                              return (
                                <Product key={product.id} product={product} />
                              );
                            });
                          }}
                        </ProductConsumer>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            } else {
              return <NoSearchResults />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
