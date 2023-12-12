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
