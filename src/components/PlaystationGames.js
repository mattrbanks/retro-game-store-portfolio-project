import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class PlaystationGames extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <div className="py-5">
              <div className="container">
                <Title name="Playstation" title=" Games" />

                <div className="row">
                  <ProductConsumer>
                    {value => {
                      return value.products.map(product => {
                        if (product.id >= 200 && product.id < 250) {
                          return <Product key={product.id} product={product} />;
                        } else {
                          return null;
                        }
                      });
                    }}
                  </ProductConsumer>
                </div>
              </div>
            </div>

            <div className="py-5">
              <div className="container">
                <Title name="Playstation two" title=" Games" />

                <div className="row">
                  <ProductConsumer>
                    {value => {
                      return value.products.map(product => {
                        if (product.id >= 250 && product.id < 300) {
                          return <Product key={product.id} product={product} />;
                        } else {
                          return null;
                        }
                      });
                    }}
                  </ProductConsumer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
