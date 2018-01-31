import * as React from "react";

import "./User.css";

interface UserProps {
  name: string;
}

interface UserState {
  visible: boolean;
}

class User extends React.Component<UserProps, UserState> {
  constructor(props: UserProps) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handleClick() {
    this.setState({ visible: !this.state.visible });
  }

  challenge(event: React.MouseEvent<HTMLButtonElement>) {
    console.log("hey");
  }

  render() {
    return (
      <div className="card-panel User" onClick={() => this.handleClick()}>
        <div>{this.props.name}</div>
        <button
          className={`User__challenge btn waves-effect red lighten-1 ${
            this.state.visible ? "visible" : ""
          }`}
          onClick={e => this.challenge(e)}
        >
          Challenge!
        </button>
      </div>
    );
  }
}

export default User;
