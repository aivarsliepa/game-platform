import * as React from "react";

interface UserProps {
  name: string;
}

const User = ({ name }: UserProps) => {
  return <div className="card-panel">{name}</div>;
};

export default User;
