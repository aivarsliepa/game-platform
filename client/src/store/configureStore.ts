import { createStore, Store, Dispatch, Action } from "redux";

import { RootState } from "../interfaces/states";
// import devState from "../dev/devState";
import reducer from "../reducers";

const addLoggingToDispatch = (store: Store<RootState>): Dispatch<RootState> => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    return rawDispatch;
  }

  return <A extends Action>(action: A) => {
    console.group(action.type);
    console.log("%c prev state", "color: gray", store.getState());
    console.log("%c action", "color: blue", action);
    const returnValue = rawDispatch(action);
    console.log("%c next state", "color: green", store.getState());
    console.groupEnd();
    return returnValue;
  };
};

const configureStore = (): Store<RootState> => {
  // @ts-ignore
  // const reduxDevTools =
  //   process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__
  //     ? window.__REDUX_DEVTOOLS_EXTENSION__()
  //     : undefined;
  console.log("configureStore called...");
  const store = createStore(
    reducer
    // devState
    // reduxDevTools
  );

  if (process.env.NODE_ENV !== "production") {
    store.dispatch = addLoggingToDispatch(store);
  }

  return store;
};

export default configureStore();
