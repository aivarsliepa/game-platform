import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as io from "socket.io-client";

import App from "./components/general/App/App";
import reducer from "../src/reducers";
import "./index.css";
import { JOIN_SUCCESS } from "../src/event-constants";
import { NEW_ROOM, SOCKET } from "./actions/types";

export const socket = io();
const store = createStore(reducer);

store.dispatch({ type: SOCKET, socket });

socket.on(JOIN_SUCCESS, (room: string) => {
  store.dispatch({
    type: NEW_ROOM,
    room
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
