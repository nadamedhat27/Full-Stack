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
C:\Users\Your Name>npm install upper-case 

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
