# 3rd party packages 

packages that is not part of the core Node.js library. These dependencies can be used to add new features to your Node.js application, or to improve the performance or reliability of your application.


installing packages globally 

for example To install a third-party dependency, you can use the npm install command

```
npm install express

```

the packages .json file and installing 
packages locally

after installing the packages you should definitely create a package JSON file 
 by typing into terminal 
```
npm init 
```

 >this initializes as a package JSON file
 > then series of questions will appear asking about project and it give a default value 

 >you can override those by typing in a new one  
 >then the file is created in your files of nodejs project 

# another example install a upper case package 

```
npm install upper-case 

```


-------------------------


```
 var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080); 

```
------------------------------------


>Save the code above in a file called "demo_uppercase.js", and initiate the file:



-------------------------------------


```
C:\Users\Your Name>node demo_uppercase.js 

```

 # dependencies and sharing code 

the sharing of the code will be hard as load of different packages and dependencies inside it 
send them or upload them you aren't going to see node modules folders 
if you delete the file "node modules" and run it ,you get an error 
then you have to install all of the different packages the project uses


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

######gfg->file name


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





# ejs view Engine 

EJS stands for Embedded JavaScript - which means you can pull JS from the server to dynamically create page elements.

------------
```


<!DOCTYPE html> 
<html> 
<head> 
    <title>View Engine Demo</title> 
</head> 
<body> 
  
  <!- For printing variable these 
      tags are used: <%= %>  --> 
  <h1> <%= title %> </h1> 
     
  <!- For business logic these 
      tags are used: <% %> --> 
  <% if(true){ %> 
      <h4> hi everyone </h4>  
  <% } %> 
</body> 
</html> 


```
----------------------------

EJS lets you use that loop to dynamically write HTML to the page. On the client side, if a user views source, all they see is the fully rendered page - they don’t see what kind of object was passed or how the page was constructed.
passing data 


#### here we need to view multiple blog content  so we use ejs to loop in and make much easier to render in the page 


-------------------------------

<img src='Screenshot (196).png'>

----------------------------------

<img src='Screenshot (197).png'>

--------------------------------------



# partials

When using the default view engine (ejs), Sails supports the use of partials (i.e. "view partials"). Partials are basically just views that are designed to be used from within other views.

They are particularly useful for reusing the same markup between different views, layouts, and even other partials.


```
<%- partial('./partials/navbar.ejs') %>
```
### Notes

 Partials are rendered synchronously, so they will block Sails from serving more requests until they're done loading. It's something to keep in mind while developing your app, especially if you anticipate a large number of connections.

 Built-in support for partials in Sails is only for the default view engine, ejs. If you decide to customize your Sails install and use a view engine other than ejs, then please be aware that support for partials (sometimes known as "blocks", "includes", etc.) may or may not be included, and that the usage will vary. Refer to the documentation for your view engine of choice for more information on its syntax and conventions.



# add css 


```
import path from 'path';
import {fileURLToPath} from 'url';

const express = require('express');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'bobbyhadz.com',
    message: 'Example message: bobbyhadz.com',
    salary: 500,
  });
});

```
