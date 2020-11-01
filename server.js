//JSON function
const fs = require("fs");

getJSON = (filename) => {
	return fs.existsSync(filename)
		? JSON.parse(fs.readFileSync(filename).toString())
		: "Wrong filename";
};

//Basic Node server
const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
	// GET or POST
	switch (req.method) {
		case "GET":
			res.statusCode = 200;
			res.end();

		case "POST":
			res.statusCode = 201;
			res.end();

		default:
			response.writeHeader(200, { "Content-Type": "text/html" });
			response.write(html);
			response.end();
	}
});

server.listen(port, () => {
	console.log("Listening on port: " + port);
});
