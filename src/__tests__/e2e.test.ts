import "jest";
import request from "supertest";

import App from "../app";

describe("App", function() {
  it("Returns 200", done => {
    request(App)
      .get("/")
      .expect(200, done);
  });

  it("Returns 404", done => {
    request(App)
      .get("/foo/bar")
      .expect(404, done);
  });
});
