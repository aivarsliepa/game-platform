import { connect, MapStateToProps } from "react-redux";
import * as React from "react";

import { UserState, RootState } from "../../../interfaces/states";
import User from "../User/User";

interface UserListProps {
  users: UserState;
}

const UserList = ({ users }: UserListProps) => {
  return (
    <div className="UserList">
      {users.map(user => {
        return <User key={user} name={user} />;
      })}
    </div>
  );
};

const mapStateToProps: MapStateToProps<UserListProps, null, RootState> = ({
  users
}) => ({ users });

export default connect(mapStateToProps)(UserList);
