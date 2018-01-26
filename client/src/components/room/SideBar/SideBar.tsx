import * as React from "react";
import "./SideBar.css";
import { RoomState } from "../../../reducers/room/roomReducer";
import { RootState } from "../../../reducers/index";
import { connect } from "react-redux";
import UserList from "../UserList/UserList";

interface SideBarProps {
  room: RoomState;
}

const SideBar = ({ room }: SideBarProps) => {
  return (
    <div className="SideBar light-blue lighten-4 card-panel">
      <div className="SideBar_title">{room}</div>
      <div>
        <UserList />{" "}
      </div>
    </div>
  );
};

function mapStateToProps({ room }: RootState): SideBarProps {
  return { room };
}

export default connect(mapStateToProps)(SideBar);
