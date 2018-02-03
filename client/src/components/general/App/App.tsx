import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as React from "react";

import StartPage from "../StartPage/StartPage";
import Room from "../../room/Room/Room";
import "./App.css";

class App extends React.Component<Object, Object> {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={StartPage} />
            <Route exact={true} path="/room/:id" component={Room} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
