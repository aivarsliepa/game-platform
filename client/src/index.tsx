import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as io from "socket.io-client";

import App from "./components/general/App/App";
import reducer from "../src/reducers";
import "./index.css";
import listeners from "./listeners";
import { SOCKET } from "./constants/actions";
// import devState from "./dev/devstate";

export const socket = io();
const store = createStore(
  reducer,
  // devState,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({ type: SOCKET, payload: { socket } });

listeners(socket, store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
