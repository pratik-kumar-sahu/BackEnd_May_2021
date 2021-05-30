const express = require("express");
const publicData = require("./data.json");
const rateLimiter = require("express-rate-limit");
const app = express();

const limitingRate = rateLimiter({
  windowMs: 1 * 60 * 1000,
  max: 12,
  message: "Request exceeded!! Try again after 1 minute",
  headers: true,
});

app.use(limitingRate);

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
    publicApiEndpoint: "/public",
  });
});

let i = 0;
app.get("/public", (req, res) => {
  i++;
  if (i > 10) {
    setTimeout(() => {
      res.send({
        status: "success",
        data: publicData,
      });
    }, 5000);
  } else {
    res.send({
      status: "success",
      data: publicData,
    });
  }
});

const port = 8000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
