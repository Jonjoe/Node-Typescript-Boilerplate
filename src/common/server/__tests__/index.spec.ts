import "jest";
import request from "supertest";

import Server from "../index";

describe("Server", function() {
  it("Returns 404", done => {
    const App = Server;
    request(App)
      .get("/foo/bar")
      .expect(404, done);
  });
});
