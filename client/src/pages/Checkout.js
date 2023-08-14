import React from "react";
import { Link } from "react-router-dom";
import Head from "next/head";
import Script from "next/Script";

const Checkout = ({ feecharge }) => {
  const initiatepayment = () => {
    let TXN_TOKEN;
    let amount;

    let defaultMerchantConfiguration = {
      root: "",
      style: {
        bodyColor: "",
        themeBackgroundColor: "",
        themeColor: "",
        headerBackgroundColor: "",
        headerColor: "",
        errorColor: "",
        successColor: "",
      },
      flow: "DEFAULT",
      data: {
        orderId: Math.random(),
        token: "",
        tokenType: "TXN_TOKEN",
        amount: "",
        userDetail: {
          mobileNumber: "",
          name: "",
        },
      },
      merchant: {
        mid: "",
        name: "",
        redirect: true,
      },
      labels: {},
      payMode: {
        labels: {},
        filter: [],
        order: [],
      },
      handler: {},
    };
  };
  return (
    <div>
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </head>
      <Script
        type="application/javascript"
        crossorigin="anonymous"
        src={`${process.env.PAYTM_HOST}/merchantpgui/checkoutjs/merchants/${process.env.PAYTM_MID}.js`}
        onLoad="onScriptLoad();"
      />
      Checkout
      <div>
        <link ref={"/checkout"}>
          <button onClick={initiatepayment}></button>
        </link>
      </div>
    </div>
  );
};

export default Checkout;
