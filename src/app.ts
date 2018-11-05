import Server from "./modules/server";

Server.get("/", function(req, res) {
  res.status(200).send("shit");
});

export default Server;
