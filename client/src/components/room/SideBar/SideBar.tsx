import * as React from "react";

import { RoomState } from "../../../interfaces/states";
import UserList from "../UserList/UserList";
import "./SideBar.css";

interface SideBarProps {
  room: RoomState;
}

const SideBar = ({ room }: SideBarProps) => {
  return (
    <div className="SideBar light-blue lighten-4 card-panel">
      <div className="SideBar_title">{room}</div>
      <UserList />{" "}
    </div>
  );
};

export default SideBar;
