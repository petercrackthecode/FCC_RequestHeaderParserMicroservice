let express = require("express");
let app = express();
require('dotenv/config');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
let cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static(path.join(__dirname, '/static/style')));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/index.html");
});

app.get("/api/hello", (req, res) => {
    res.json({greeting: 'hello API'});
});

app.get("/api/whoami", (req, res) => {
    
});

app.listen(process.env.PORT, () => {
    console.log(`Your app is listening on port ${process.env.PORT}`);
});