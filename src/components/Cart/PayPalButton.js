import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

export default class MyApp extends React.Component {
  render() {
    const onSuccess = (payment) => {
      // Congratulations, it came here so everything's fine!
      console.log("The payment was successful!", payment);
      this.props.clearCart();
      this.props.history.push("/");
    };

    const onCancel = (data) => {
      // User pressed "cancel" or close Paypal's popup!
      console.log("The payment was cancelled!", data);
    };

    const onError = (err) => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log("Error!", err);
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };

    let env = "sandbox"; // you can set here to 'production' for production
    let currency = "USD"; // or you can set this value from your props or state
    // the variable total could be set equal to 1, which is the same as above. This is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    //fixed sandbox problem
    const client = {
      sandbox: process.env.REACT_APP_APP_ID,
      production: "YOUR-PRODUCTION-APP-ID",
    };

    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={this.props.total}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    );
  }
}
