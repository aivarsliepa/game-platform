import * as React from "react";
import "./Message.css";

interface MessageProps {
  readonly from: string;
  readonly message: string;
  readonly time: number;
}

const Message = ({ from, message, time }: MessageProps) => {
  return (
    <div className="Message">
      <span className="Message__from">{from} :</span>{" "}
      {new Date(time).toLocaleTimeString()}
      <div className="blue-text text-darken-2">{message}</div>
    </div>
  );
};

export default Message;
