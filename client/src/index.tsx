import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as io from "socket.io-client";

import App from "./components/general/App/App";
import reducer from "../src/reducers";
import { Message } from "../src/reducers/roomMessages/roomMessagesReducer";
import "./index.css";
import { JOIN_SUCCESS, NEW_ROOM_MSG } from "../src/event-constants";
import { NEW_ROOM, SOCKET, ADD_ROOM_MSG } from "./actions/types";

import devState from "./dev/devstate";

export const socket = io();
const store = createStore(
  reducer,
  devState,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({ type: SOCKET, socket });

socket.on(
  JOIN_SUCCESS,
  ({ room, users }: { room: string; users: string[] }) => {
    store.dispatch({
      type: NEW_ROOM,
      room,
      users
    });
  }
);

socket.on(NEW_ROOM_MSG, (msg: Message) => {
  store.dispatch({ type: ADD_ROOM_MSG, ...msg });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
