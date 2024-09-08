const http = require("node:http");

const server = http.createServer((req, res) => {
//   res.end(req.url);

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        name: "bruce",
        song: "wayne",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log("server running on port 3000");
});
