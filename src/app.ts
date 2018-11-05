import Server from "./common/server";

Server.get("/", function(req, res) {
  res.status(200).send("shit");
});

export default Server;
