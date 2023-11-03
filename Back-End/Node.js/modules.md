# Node.js Modules

- ## What is a Module

    A **Module** is a piece of reusable JavaScript code. It could be a `.js` file or a directory containing `.js` files. You can export the content of these files and use them in other files.

- ## Module Types 

    Node.js includes three types of modules: 

    - Built-in (Core) Modules
    - Local Modules
    - Third Party Modules 
        
    - ### Built-in Modules

        Node.js comes with some modules out of the box. These modules are available for use when you install Node.js.
        
        Common Node.js modules:

        | Module | Description |
        | --- | --- |
        | [http](https://nodejs.org/api/http.html) | http module includes classes, methods and events to create Node.js http server.  |
        | [url](https://nodejs.org/api/url.html) | url module includes methods for URL resolution and parsing.  |
        | [querystring](https://nodejs.org/api/querystring.html) | querystring module includes methods to deal with query string.  |
        | [path](https://nodejs.org/api/path.html) | path module includes methods to deal with file paths.  |
        | [fs](https://nodejs.org/api/fs.html) | fs module includes classes, methods, and events to work with file I/O.  |
        | [assert](https://nodejs.org/api/assert.html) | Provides a set of assertion tests. | 

         A complete list can be found [here](https://www.w3schools.com/nodejs/ref_modules.asp).
         
        - #### Loading Modules

            You load the module with the `require` function. You need to pass the name of the module you're loading as an argument to the require function.
        
            ```js
            const nameOfModule = require('nameOfModule');
            ```
            **Note:** You do not have to name you variable the same name as the module, but it is considered a best practice. Also using `const` ensures that your do not override it.
            
            The first line in [`Hello World`](./README.md) example was including `http` module.
            
            ```js
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

    - ### Local Modules

        Local modules are modules created locally in your Node.js application. These modules include different functionalities of your application in separate files and folders. You can also package it and distribute it via NPM, so that Node.js community can use it. 
        
        - #### Creating Modules
        
            Let's create a `users` module containing an array of usernames.
            
            ```js
            let userNames = ['Mark', 'John', 'Thomas'];
            module.exports = userNames; 
            ```
            
            First, you need to define your array, Then you can export it using `module.exports`.
            
            **Note:** It doesn't have to be a array, your module can export objects, functions or any data type.
            
            You can also have multiple exports.
        
        - #### Loading Local Modules
        
            To load your local module, as with any other type, you use the `require` function. In this case, the path is './users' (which is referencing the `users.js` file).

            ```js 
            let userNames = ['Mark', 'John', 'Thomas'];
            let str = "The quick brown fox jumps over the lazy dog.";

            function printStr() {
                console.log(str);
            }

            module.exports = { userNames, printStr }; 
            // Only 'userNames' array, and 'printStr' function are exported
            ```
            
            ```js 
            const users = require('./users');
            console.log(users);
            ```
            Running our application should result in the following output.

            ![mod 1 output](./Docs/modules/mod-1-output.png)

            Multiple exports can be accessed through the dot `.` operator, or specify their names while loading the module.
            
            ```js
            const users = require('./users');
            console.log(users.userNames);
            users.printStr();
            
            // -- OR --

            // Variable names must match with module exports 
            const { userNames, printStr } = require('./users');
            console.log(userNames);
            printStr();
            ```
            **Notice** that `str` variable is not exported so it can not be accessed outside `users` module.

            ```js
            const { str } = require('./users') ;
            console.log(str); // output -> undefined
            ```

            Again running our application should result in the following output.

            ![mod-2-output](./Docs/modules/mod-2-output.png)
