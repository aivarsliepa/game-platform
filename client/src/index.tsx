import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as io from "socket.io-client";

import App from "./components/general/App/App";
import "./index.css";
import listeners from "./listeners";
import { SOCKET } from "./constants/actions";
import store from "./store/configureStore";

export const socket = io();

store.dispatch({ type: SOCKET, payload: { socket } });

listeners(socket, store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
