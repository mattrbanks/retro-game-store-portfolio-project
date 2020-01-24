import React, { Component } from "react";
import { ProductConsumer } from "../context";

export default class Search extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { title } = value.products;
          return (
            <div>
              {/* this is new and we are here */}
              <input class="form-control" type="text" />
              {/* <input type="text" value={value} onChange={this.handleChange} /> */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
