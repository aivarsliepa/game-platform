import * as React from "react";

interface MessageProps {
  readonly from: string;
  readonly message: string;
  readonly time: number;
}

const Message = ({ from, message, time }: MessageProps) => {
  return (
    <div>
      {from} : {time}
      <p>{message}</p>
    </div>
  );
};

export default Message;
