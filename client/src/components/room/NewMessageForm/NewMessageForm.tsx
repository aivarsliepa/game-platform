import * as React from "react";
import { Component, FormEvent } from "react";
import "./NewMessageForm.css";

class NewMessageForm extends Component {
  constructor() {
    super({});
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
  }
  render() {
    return (
      <div className="NewMessageForm teal lighten-5">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              id="msg"
              className="materialize-textarea"
              placeholder="Write a message"
              maxLength={140}
              type="text"
            />
          </div>
          <button className="waves-effect waves-light btn-large">Send</button>
        </form>
      </div>
    );
  }
}

export default NewMessageForm;
