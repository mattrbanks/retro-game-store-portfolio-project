import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  /*we don't need state here unless we want to console.log something*/
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Matt's Retro Games" />
          </div>
        </div>

        <div className="py-5">
          <div className="container">
            <Title name="our" title=" Consoles" />

            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    if (product.id < 50) {
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

        {/* When we map through the products array, which is connected to the objects storeProducts, We render what the product component exports for each product in the object . */}
        <div className="py-5">
          <div className="container">
            <Title name="Sega CD" title=" Games" />

            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    if (product.id >= 50 && product.id < 100) {
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
            <Title name="Sega Genesis" title=" Games" />

            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    if (product.id >= 100 && product.id < 150) {
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
      </React.Fragment>
    );
  }
}
