import * as React from "react";
import { connect } from "react-redux";

import "./SideBar.css";
import UserList from "../UserList/UserList";
import { RoomState, RootState } from "../../../interfaces/states";

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

function mapStateToProps({ room }: RootState): SideBarProps {
  return { room };
}

export default connect(mapStateToProps)(SideBar);
