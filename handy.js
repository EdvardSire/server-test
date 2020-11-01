// Handle request
if (req.headers["content-type"] != "application/json") {
	res.statusCode = 400;
	res.end();
}

// Get body
let data = "";
req.on("data", (chunk) => {
	data += chunk.toString("utf8");
});

res.setHeader("Content-type", "application/json");
res.setHeader("Access-Control-Allow-Origin", "*");
