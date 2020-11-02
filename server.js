//Imports
const http = require("http");
const fs = require("fs");

//JSON function
getJSON = (filename) => {
	return fs.existsSync(filename)
		? JSON.parse(fs.readFileSync(filename).toString())
		: "Wrong filename";
};

//Basic Node server
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
	//Functions
	displayHtml = (filename) => {
		res.writeHead(200, { "Content-Type": "text/html" });
		fs.readFile(filename, "utf8", (err, data) => {
			res.write(data);
			res.end();
		});
	};

	// GET or POST
	switch (req.method) {
		case "GET":
			switch (req.url) {
				case "/":
					displayHtml("./index.html");
					break;
				case "/api/get":
					break;
				default:
					res.statusCode = 405;
					res.end();
			}
			break;

		case "POST":
			res.statusCode = 201;
			res.end();
			break;

		default:
			res.statusCode = 405;
			res.end();
	}
});

server.listen(port, () => {
	console.log("Listening on port: " + port);
});
