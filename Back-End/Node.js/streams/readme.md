# ip address and domain 


in node we manually create server to request from browser 
actively for request and response to it 
to require a core http module
use method 
call back function   gonna run every time a request


---------------------------


# creatimg a server 


comes in  in our server
get access to two different object req and res 
req ->example www.anywebsite.com/about 
res->it will re direct me to about page 
we have to invoke the listen method
we need to pass in an argument into this


----------------------------


# localhost and port number 


port number  we goin listen to two argument server.listen
3000 ,local host this is the default value to 
local host like domain name on the web 
spceific ip address called a loop back ip adress
127.0.0.1 
request it and going back to your computer 
acting as a host for our website 
a port number is like a specif channel or port on your computer
that server should communicate through



# request object 



lets investigate request object more closer 

-----------------------


```
const server= http.createServer((req,res)=>{
    console.log(req);
});

```


 >in the terminal will load different things of object it contains headers ,response type,URL(the user has visited)


```
const server= http.createServer((req,res)=>{
    console.log(req.url,req.method);
});

```

> /the root of the website ,the method is GET request 

# response object 

we want to formulate some kind of response for the request of the user by the browser
first thing first is to formulate the response headers give the browser "what kind of response is coming back to it "
(text -html -json .... etc )
also headers can set cookies 

----------------------------------------

```
const server= http.createServer((req,res)=>{
    console.log(req.url,req.method);
    res.setHeader('Content-Type','text/plain');
    res.write('hello');
    res.end();
});

```

-------------------------------------



```
const server= http.createServer((req,res)=>{
    console.log(req.url,req.method);
    res.setHeader('Content-Type','text/html');
    res.write(<p>'hello'</p>);
    res.end();
});

```


>returning html pages 

>lets be more defined and instead of returing resonse with the tags or plain text ,return html page



```
const fs=require ('fs');
const server= http.createServer((req,res)=>{
    console.log(req.url,req.method);
    res.setHeader('Content-Type','text/html');
   fs.readFile('./index.html',(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    }
    else{
        
        res.end(data);
    }
   })
});

```

# basic routing 


 now we have a lot of route directory to handle it 

```
const fs=require ('fs');
const server= http.createServer((req,res)=>{
    console.log(req.url,req.method);
    res.setHeader('Content-Type','text/html');
   let path='/file';
   switch(req.url){
    case'/':
       path+='index.html';
       break;
     case'/about':
       path+='about.html';
       break; 
    default:
       path+='404.html';
       break;     
   }

   fs.readFile('./index.html',(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    }
    else{
        
        res.end(data);
    }
   })
});

```


# status code 


status code describe the type of response sent to the browser 


>200 = ok 
>301 = resource moved 
>404-not found 
>500-internal server error

### lets try this 


```
const fs=require ('fs');
const server= http.createServer((req,res)=>{
    console.log(req.url,req.method);
    res.setHeader('Content-Type','text/html');
   let path='/file';
   switch(req.url){
    case'/':
       path+='index.html';
       res.statusCode=200;
       break;
     case'/about':
       path+='about.html';
       res.statusCode=200;
       break; 
    default:
       path+='404.html';
       res.statusCode=404;
       break;     
   }

   fs.readFile('./index.html',(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    }
    else{
        
        res.end(data);
    }
   })
});

```

try to redirect your response ;)



