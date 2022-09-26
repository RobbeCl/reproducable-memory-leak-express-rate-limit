const request = require("supertest");
const setupApp = require("./index");
const { store } = require("./memory-store");

let server;

beforeEach(() => {
  server = setupApp();
});

afterAll(() => {
  store.shutdown();
});

test("memory leak", async () => {
  const res = await request(server).get("/");
  expect(res.status).toBe(200);
});
