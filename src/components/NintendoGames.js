import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class NintendoGames extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="py-5">
            <div className="container">
              <Title name="Super Nintendo" title=" Games" />

              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      if (product.id >= 150 && product.id < 200) {
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
              <Title name="Nintendo Entertainment System" title=" Games" />

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
        </div>
      </React.Fragment>
    );
  }
}
