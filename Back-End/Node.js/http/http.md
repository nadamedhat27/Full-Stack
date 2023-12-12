# HTTP Module 
>now lest discuss what **http** module is built-in module called HTTP 
>allows  Nodejs to transfer data over the Hyper Text transfer protocol 
---
to include the http module use the ```require ()```  method :
```
var http =require ('http');
//create a server object :
http.createServer(function(req,res){
    res.write('hello World!' );
    res.end();

}).listen(8080);


```
---
To create an HTTP server, call the ```http.createServer()``` function. It accepts a single
argument, a callback function, that will be called on each HTTP request received by
the server. This request callback receives, as arguments, the request and response objects
---
# Read The Query String 

```
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080); 



```
---
let's summarize this journey 


1.An HTTP client, like a web browser,initiates an HTTP.


2.Node accepts the connection,and incoming request data is given to the HTTP server.


3.The HTTP server parses up to the end of the HTTP headers and then hands control over to the request callback.


4.The request callback performs application logic, in this case responding immediately with the text “Hello World”.


5.The request is sent back through the HTTP server, which formats a proper HTTP response for the client.


---

