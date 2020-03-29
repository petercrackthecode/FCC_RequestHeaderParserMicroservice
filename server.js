const fs = require("fs");

fs.mkdir('./static/script', (err) => {
    if (err) console.log(err);
    else {
        fs.writeFile("./static/script/script.js", "", "utf-8", (err) => {
            console.log(err ? err : "File script.js successfully created");
        });
    }
});

