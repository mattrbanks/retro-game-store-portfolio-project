import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

/* This is our main file in our Cart folder and that is stated in the package.json file that is inside the Cart folder. This avoids having to show a complete path when importing to App.js 
because this is now the main file in the Cart folder so we just point to the Cart folder itself. Cart.js could also have been turned into another index.js but that gets confusing really 
fast with other index.js files also in the app. */
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            //We destructured the state so cart is a property that is included in the destructured state inside value in context.js.
            const { cart } = value;
            //cart is an empty array to start with so the .length array method works here.
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  {/*With Product.js and ProductList.js we pulled properties from the consumer directly but here we specify access for CartList.js to everything in context.js*/}
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
