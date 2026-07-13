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

                <hr>

                <a href="/">Home</a> |
                <a href="/about">About</a> |
                <a href="/contact">Contact</a>

            </body>

            </html>
        `);

    }

    else if (req.url === "/about") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <!DOCTYPE html>
            <html>

            <head>
                <title>About</title>
            </head>

            <body>

                <h1>About Page</h1>

                <p>This is our About Page.</p>

                <hr>

                <a href="/">Home</a> |
                <a href="/about">About</a> |
                <a href="/contact">Contact</a>

            </body>

            </html>
        `);

    }

    else if (req.url === "/contact") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <!DOCTYPE html>
            <html>

            <head>
                <title>Contact</title>
            </head>

            <body>

                <h1>Contact Page</h1>

                <p>Welcome to Contact Page.</p>

                <hr>

                <a href="/">Home</a> |
                <a href="/about">About</a> |
                <a href="/contact">Contact</a>

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

                <p>The page you are looking for doesn't exist.</p>

                <hr>

                <a href="/">Go Home</a>

            </body>

            </html>
        `);

    }

});

server.listen(5000, () => {

    console.log("Server Running at http://localhost:5000");

});