import * as React from "react";
import { Component } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import StartPage from "../StartPage/StartPage";
import Room from "../../room/Room/Room";
import "./App.css";
import { RootState } from "../../../reducers";

export interface AppProps {
  room: string | null;
}

class App extends Component<AppProps, Object> {
  render() {
    const room = this.props.room;
    return (
      <div className="App blue lighten-1">
        <BrowserRouter>
          <Switch>
            <Route
              exact={true}
              path="/"
              render={() =>
                room ? <Redirect to={`/room/${room}`} /> : <StartPage />
              }
            />
            <Route exact={true} path="/room/:id" component={Room} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ room }: RootState): AppProps {
  return { room };
}

export default connect(mapStateToProps)(App);
