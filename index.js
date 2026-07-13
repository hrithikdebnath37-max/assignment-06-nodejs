const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home</title>
            </head>
            <body>
                <h1>Home Page</h1>
                <p>Welcome to our Home Page.</p>
            </body>
            </html>
        `);

    }

    else {

        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>404</title>
            </head>
            <body>
                <h1>404 - Page Not Found</h1>
            </body>
            </html>
        `);

    }

});

server.listen(5000, () => {
    console.log("Server Running at http://localhost:5000");
});