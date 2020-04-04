const express = require("express");
const app = express();
const path = require("path");
require("dotenv/config");

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static(path.join(__dirname, "/static/style")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

app.get("/api/hello", (req, res) => {
  res.json({ greeting: "hello API" });
});

app.get("/api/whoami", async (req, res) => {
  const language = req.headers["accept-language"],
    software = req.headers["user-agent"];

  let ipv4;

  const url = "https://api.ipify.org/?format=json";
  https.get(url, response => {
    response.setEncoding("utf8");
    let body = "";
    response.on("data", data => {
      body += data;
    });
    response.on("end", async () => {
      body = JSON.parse(body);
      ipv4 = await body.ip;
      res.json({
          ip: ipv4,
          language: language,
          software: software
      });
    });
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${process.env.PORT}`);
});
