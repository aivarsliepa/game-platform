import { Route, Switch, Router } from "react-router-dom";
import * as React from "react";

import GameSwitch from "../GameSwitch/GameSwitch";
import StartPage from "../StartPage/StartPage";
import Room from "../../room/Room/Room";
import history from "../../../history";
import "./App.css";

class App extends React.Component<Object, Object> {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact={true} path="/game/:game" component={GameSwitch} />
            <Route exact={true} path="/room/:id" component={Room} />
            <Route exact={true} path="/" component={StartPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
