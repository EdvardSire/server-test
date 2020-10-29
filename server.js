//Basic Node server
const http = require("http");
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200); // status code

    let content = {
        "id":123
    };
    let data = JSON.stringify(content);

    res.end(data);
});

server.listen(port, () => {
    console.log("LIstening on port")
});