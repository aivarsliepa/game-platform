import * as React from "react";
import { Component } from "react";
// import * as socketClient from "socket.io-client";
import "./App.css";
import StartPage from "../StartPage/StartPage";

export interface AppState {
  response: boolean | string;
  endpoint: string;
}

class App extends Component<Object, AppState> {
  // constructor() {
  // super({});
  // this.state = {
  //   response: false,
  //   endpoint: "/"
  // };
  // }
  componentDidMount() {
    // const { endpoint } = this.state;
    // const socket = socketClient(endpoint);
    // socket.on("newMsg", (data: string) => this.setState({ response: data }));
  }
  render() {
    // const { response } = this.state;
    return (
      <div>
        <StartPage />
      </div>
    );
  }
}

export default App;
