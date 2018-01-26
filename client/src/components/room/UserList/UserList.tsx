import * as React from "react";
import User from "../User/User";
import { UserState } from "../../../reducers/users/usersReducer";
import { RootState } from "../../../reducers/index";
import { connect } from "react-redux";

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
