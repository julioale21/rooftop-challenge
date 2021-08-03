import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import { ToastProvider } from "react-toast-notifications";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ToastProvider autoDismiss autoDismissTimeout={2000} placement="bottom-center">
        <App />
      </ToastProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root"),
);
