const express = require("express");
const { store } = require("./memory-store");
const rateLimit = require("express-rate-limit");

function setupApp() {
  const app = express();

  const first = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    store,
  });
  app.get("/", first, (req, res) => res.send("Hello World!"));

  //   const second = rateLimit({
  //     windowMs: 15 * 60 * 1000, // 15 minutes
  //     max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  //     store,
  //   });
  //   app.get("/", second, (req, res) => res.send("Hello World!"));

  return app;
}

if (require.main === module) {
  setupApp().listen(8000, () => console.log("Listening to Port 8000"));
}

module.exports = setupApp;
