const app = require("../server.js");

describe("Test Suite", () => {
  beforeAll(() => {
    app.listen(5000, () => console.log(`Server started on port 5000`));
  });

  //   test("Routes are active", done => {
  //     app.get("/api/", (req, res) => {
  //       console.dir(req);
  //     });
  //     expect(app).toBeDefined();
  //   });

  afterAll(() => {
    app.close(() => console.log("Server Closed"));
  });
});
