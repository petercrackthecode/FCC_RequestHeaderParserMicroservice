let express = require("express");
let app = express();
let path = require("path");
require("dotenv/config");
const publicIp = require("public-ip");

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
let cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static(path.join(__dirname, "/static/style")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

app.get("/api/hello", (req, res) => {
  res.json({ greeting: "hello API" });
});

app.get("/api/whoami", (req, res) => {
  const language = req.headers["accept-language"],
    software = req.headers["user-agent"];

  let ipv4;

  (async () => {
    ipv4 = await publicIp.v4();
  })()
  .then((message) => {
      console.log('Success: ' + message);
  })
  .catch(error => {
      console.log(error.name + ' ' + error.message);
  });

  console.log(`language= ${language}`);
  console.log(`software= ${software}`);
  console.log(`ipv4= ${ipv4}`);

  res.json({ status: "testing" });
});

app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${process.env.PORT}`);
});

/*
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) {
    resolve("");
  } else {
    reject("failed");
  }
});

p.then(message => {
  console.log(`This is in the then ${message}`);
}).catch(message => {
  console.log(`This is in the catch ${message}`);
});

const userLeft = true;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":("
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User Watching Cat Meme",
      message: "WebDevSimplified < Cat"
    });
  } else {
    callback("Thumbs up and Subscribe");
  }
}

watchTutorialCallback(
  message => {
    console.log("Success: " + message);
  },
  error => {
    console.log(error.name + " " + error.message);
  }
);
*/