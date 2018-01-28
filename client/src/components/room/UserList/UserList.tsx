import * as React from "react";
import { connect } from "react-redux";

import User from "../User/User";
import { UserState, RootState } from "../../../interfaces/states";

interface UserListProps {
  users: UserState;
}

const UserList = ({ users }: UserListProps) => {
  return (
    <div>
      {users.map(user => {
        return <User key={user} name={user} />;
      })}
    </div>
  );
};

function mapStateToProps({ users }: RootState): UserListProps {
  return { users };
}

export default connect(mapStateToProps)(UserList);
