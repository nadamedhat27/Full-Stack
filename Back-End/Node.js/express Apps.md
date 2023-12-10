# what is express 

>Express.js is a small framework that works on top of Node.js web server functionality
>Develops Node.js web applications quickly and easily.you can use raw node as we discuss in previous lessons but express is more organized and defined code instead of > raw node 
>Allows you to define application routes using HTTP methods and URLs.
>Allows you to specify a middleware for handling errors. 

----------------------------------------


```
$ mkdir gfg
$ cd gfg 
```

######gfgf->file name


```
$ npm init

```

```
$ npm install express --save
```


# creating an express app 


```
const express = require('express');
const app = express();
app.listen(3000);
app.get('/', (req, res) =>{
res.send("Welocme !");
});

```

# routing and html pages 


 we can do that by adding multiple of these ```app.get()``` command get 
  handlers 



```
const express = require('express');
const app = express();
app.listen(3000);
app.get('/', (req, res) =>{
res.sendFile('./index.html',{root:__dirname});
});

app.get('/about', (req, res) =>{
res.sendFile(./about.html',{root:__dirname});
});




```

## Note 

>the directory is relative path not absolute so we need to handle this situation by adding the {root:__dirname}



# redirecting and 404 pages 

we need to handle a 404 case 

>by using method called use 
>we will know about use and middleware more in upcoming lessons 
>but now we will use it to handle 404 case 



```
const express = require('express');
const app = express();
app.listen(3000);
app.get('/', (req, res) =>{
res.sendFile('./index.html',{root:__dirname});
});

app.get('/about', (req, res) =>{
res.sendFile(./about.html',{root:__dirname});
});

app.use((req,res)=>{
res.sendFile(./404.html',{root:__dirname});
})


```

>use function is going fir for every single request coming in 
>but only if the request reaches this point in the
