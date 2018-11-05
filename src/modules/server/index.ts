import express from "express";
import * as bodyParser from "body-parser";

class Server {
  public app: express.Application;
  public port: number;

  constructor() {
    this.app = express();
    this.port = 3000;

    this.config();
    this.middleware();
    this.routes();
  }

  private config(): void {
    this.app.set("port", this.port);
  }

  private middleware(): void {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }

  private routes(): void {
    const router: express.Router = express.Router();

    this.app.use("/", router);
  }
}

export default new Server().app;
