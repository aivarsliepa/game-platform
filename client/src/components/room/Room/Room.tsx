import * as React from "react";
import { Component } from "react";
import Chatter from "../Chatter/Chatter";
import SideBar from "../SideBar/SideBar";
import NewMessageForm from "../NewMessageForm/NewMessageForm";
import "./Room.css";

class Room extends Component<Object, Object> {
  render() {
    return (
      <div className="Room">
        <SideBar />
        <Chatter />
        <NewMessageForm />
      </div>
    );
  }
}

export default Room;
