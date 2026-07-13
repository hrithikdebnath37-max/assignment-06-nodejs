const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Server is Running");

});

server.listen(5000, () => {
    console.log("Server Running at http://localhost:5000");
});