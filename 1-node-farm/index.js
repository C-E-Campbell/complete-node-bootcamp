const fs = require("fs");

const textIn = fs.readFileSync("./starter/txt/input.txt", "utf-8");

const textOut = `This is what we now about the avocado:\n${textIn}\nCreated on ${Date.now()}`;

fs.writeFileSync("./starter/txt/output.txt", textOut);
