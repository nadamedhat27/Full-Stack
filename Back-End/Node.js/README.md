# Node.js Tutorial

## Installation

For installation please referee to [Node.js installation guide](https://nodejs.dev/en/download/package-manager/).

## Hello World Application

Example Node.js Application:

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

To run this snippet, save it as a `server.js` file and run `node server.js` in your terminal.

![run command](./Docs/nodejs-server-run.png)

Firefox browser output:

![server output](./Docs/nodejs-server-output.png)

To include `http` module:

```javascript
const http = require('http');
```

Now your application has access to the HTTP module, and is able to create a server:

The `createServer()` method of `http` creates a new HTTP server and returns it.

Whenever a new request is received, the request event is called, providing two objects: a request (an `http.IncomingMessage` object) and a response (an `http.ServerResponse` object).

Those 2 objects are essential to handle the HTTP call.

The first provides the request details. In this simple example, this is not used, but you could access the request headers and request data.

The second is used to return data to the caller.

```javascript
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

The server is set to listen on the specified port and host name. When the server is ready, the callback function is called, in this case informing us that the server is running.