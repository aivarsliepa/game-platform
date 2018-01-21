import * as express from "express";
import { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send({ msg: "Hello There!" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export = app;
