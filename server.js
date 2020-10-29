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
	// Handle request
	if (req.headers["content-type"] != "text/plain") {
		res.statusCode = 400;
		res.end();
	}

	let data = "";
	req.on("data", (chunk) => {
		data += chunk.toString("utf8");
	});

	req.on("end", () => {
		//Create response
		res.setHeader("Content-type", "application/json");
		res.setHeader("Access-Control-Allow-Origin", "*");

		res.statusCode = 200;
		res.end();
		console.log(data);
		//JSON.stringify(getJSON("data.json"))
	});
});

server.listen(port, () => {
	console.log("Listening on port: " + port);
});
