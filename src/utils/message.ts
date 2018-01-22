export interface Message {
  from: string;
  msg: string;
  time: number;
}

export function generateMessage(from: string, msg: string): Message {
  return {
    from,
    msg,
    time: new Date().getTime()
  };
}
