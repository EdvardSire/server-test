//JSON function
const fs = require("fs");

getJSON = (filename) => {
    return fs.existsSync(filename)
    ? JSON.parse(fs.readFileSync(filename).toString())
    : "Error";
};


//Basic Node server
const http = require("http");
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200); // status code

    let data = JSON.stringify(getJSON("dat.json"));

    res.end(data);
});

server.listen(port, () => {
    console.log("LIstening on port");
});