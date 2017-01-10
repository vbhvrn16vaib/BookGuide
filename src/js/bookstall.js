import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";

import Layout from "./components/Layout";
import store from "./stores/BookStores";

const app = document.getElementById('app');

 ReactDom.render(<Provider store={store}>
  <Layout />
   </Provider>
  ,app
);
