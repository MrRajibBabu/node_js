// 1 require
const http = require("http");
const fs = require("fs");

// 2 data
const PORT = 2000;
const HOSTNAME = "localhost";

// 3 read pages
const home = fs.readFileSync("./index.html","utf-8");
const about = fs.readFileSync("./about.html","utf-8");

// 4 make server
const server = http.createServer((req, res) => {
   if (req.url === "/") {
    return res.end(home);
   }
   if (req.url === "/about") {
    return res.end(about);
   }
   else {
    return res.end("404 page not found");
   }
});

// 5 get server link
server.listen(PORT, HOSTNAME, () => {
    console.log(`server is working on http://${HOSTNAME}:${PORT}`);
});
