import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

//This is the equivalent to the createStore method of Redux.
const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  //context API
  /* We can import the context and use it to create our provider, which we’re calling ProductProvider. 
  In it, we initialize a state with some values, which you can share via value prop from our provider component. */
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [], //We set this to storeProducts temporarily in order to have values to work. Otherwise the cart will always be empty and we can't see anything.
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    searchResults: [], //resulting search object to render in SearchUserResults
    search: "" //input from user
  };
  /*we don't want our original data object reference to change so we handle the state this way with copies.*/
  /*lifecycle method. We say this once but can put many methods inside it. Look into this further.*/
  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  /* utility method that gets the item according to id */
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product }; //detailProduct can transform into any of the products that we grab by id with getItem in order to render a detail page for any product in our data objects.
    });
  };
  addToCart = id => {
    let tempProducts = [...this.state.products];
    /* we use index instead of find here because we want the product to display back in the same position on the products page after it is added to the cart. With .find the product would be moved around on the product page I guess. */
    /* We reuse the getItem utility method here to get the index using the id of the desired product. */
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        /* We are filling our empty cart array with the product that was added to the cart using the button. */
        /* By using ...this we are destructuring everything that is in the cart */
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        //This callback function runs immediately after adding stuff to cart.
        this.addTotals();
        //console.log(this.state);
      }
    );
  };
  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  //While creating components and methods that will be available to the components, we can use console logs as placeholders to test functionality. This avoids having to go back and forth a lot.
  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct); //We need the specific index location of the item in the tempCart.
    const product = tempCart[index]; //We use the index to find the specific product.

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals(); //This callback function will run immediately when incrementing to give a fresh total after every change.
      }
    );
  };
  decrement = id => {
    //increment and decrement could be one method to avoid repeating these four lines of code again but that is what we did here. This is not considered best practice, however.
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct); //We need the specific index location of the item in the tempCart.
    const product = tempCart[index]; //We use the index to find the specific product.

    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals(); //This callback function will run immediately when incrementing to give a fresh total after every change.
        }
      );
    }
  };
  /* This entire method runs after you click the trash can icon in the cart.  */
  removeItem = id => {
    let tempProducts = [...this.state.products]; //I believe these variables are re-declared and re-useable because of scope.
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id); //tempCart = everything in the cart but the single item you remove.

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index]; //Our removed item gets these values reset to nothing so it is removed from the cart along with removing totals.
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          //The state is refreshed with the remaining items.
          cart: [...tempCart],
          products: [...tempProducts]
        };
      },
      () => {
        this.addTotals(); //the totals are recalculated from the remaining items and refreshed.
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        //We run these two methods, in a callback function, to reset functionality back to default for inCart and beginning totals so that we don't still have false totals and cart status after clearing it.
        //This is just recalculating back to nothing.
        this.setProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1; /* 10% tax */
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };

  //handleChange
  updateSearch = event => {
    this.setState({ search: event.target.value.substr(0, 20) });
  };

  searchFilter = () => {
    let tempProducts = [...this.state.products];
    let tempSearchResults = [];
    tempProducts.filter(item => {
      if (
        item.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      ) {
        tempSearchResults.push(item);
      } else if (
        item.platform.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      ) {
        tempSearchResults.push(item);
      } else if (
        item.company.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      ) {
        tempSearchResults.push(item);
      }
      this.setState(() => {
        return { searchResults: [...tempSearchResults] };
      });
    }); // I am here. Need to reset searchResults for the next search.
    // return { searchResults: [] };
  };

  enterKeyPressed = event => {
    let tempProducts = [...this.state.products];
    let tempSearchResults = [];
    if (event.key === "Enter") {
      tempProducts.filter(item => {
        if (
          item.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1
        ) {
          tempSearchResults.push(item);
        } else if (
          item.platform
            .toLowerCase()
            .indexOf(this.state.search.toLowerCase()) !== -1
        ) {
          tempSearchResults.push(item);
        } else if (
          item.company
            .toLowerCase()
            .indexOf(this.state.search.toLowerCase()) !== -1
        ) {
          tempSearchResults.push(item);
        }
        this.setState(() => {
          return { searchResults: [...tempSearchResults] };
        });
      }); // I am here. Need to reset searchResults for the next search.
      // return { searchResults: [] };
    }
    if (event.key === "Enter") {
      document.getElementById("search-btn").click();
    }
  };

  render() {
    console.log(this.state.searchResults);
    //console.log(this.state.searchResults);
    console.log(this.state.search);
    //console.log(this.prevBtnCarousel());
    //console.log(this); /* ProductProvider is this. */
    //The value in Context.Provider can be anything, even an object. We are using this.anyMethodName but we could also put the whole method in value as well.
    //Here we are using destructuring so study that more.
    //We are sharing ...this.state along with our methods that manipulate the state. We can think of these methods as reducers in Redux.
    return (
      <ProductContext.Provider
        value={{
          ...this.state, //Destructuring the state. We got the values from ...this.state but we still need to get the methods one by one below.
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment, //The cart component is using the consumer and these four methods will be available in the consumer.
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          searchFilter: this.searchFilter,
          updateSearch: this.updateSearch,
          enterKeyPressed: this.enterKeyPressed,
          handleEnterKeyRoute: this.handleEnterKeyRoute
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

//We declare the consumer and export it, from here, along with the provider.
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

/* The Context API solves some of our prop drilling problems. It lets you pass data to all of the components in the tree without writing them manually in each of them. 
Shared data can be anything: state, functions, objects, you name it, and it is accessible to all nested levels that are in the scope of the context. */
