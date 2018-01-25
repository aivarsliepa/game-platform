export interface Message {
  from: string;
  message: string;
  time: number;
}

export function generateMessage(from: string, message: string): Message {
  return {
    from,
    message,
    time: new Date().getTime()
  };
}
