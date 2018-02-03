import * as React from "react";

import "./Message.css";

interface MessageProps {
  readonly from: string;
  readonly message: string;
  readonly time: number;
  readonly setRef?: (el: HTMLDivElement | null) => void;
}

const Message = ({ from, message, time, setRef }: MessageProps) => {
  return (
    <div className="Message" ref={el => (setRef ? setRef(el) : null)}>
      <span className="Message__from">{from} :</span>{" "}
      {new Date(time).toLocaleTimeString()}
      <div className="blue-text text-darken-2">{message}</div>
    </div>
  );
};

export default Message;
