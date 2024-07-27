## File System Module (fs) in Node.js

The `fs` module in Node.js provides an API for interacting with the file system. It allows you to read, write, update, and delete files.

### How to Use It

Install the fs package

```sh
npm i fs
--OR--
bun i fs
```

To use the `fs` module, you need to require it in your script:

```javascript
const fs = require('fs');
```

### Reading Files

#### Synchronously

You can read the content of a file synchronously using the `readFileSync` method. This method blocks the execution of the code until the file is read.

Assume we have a file named `file.txt` containing "hello world".

```javascript
const fs = require('fs');
const fileContent = fs.readFileSync('./file.txt', 'utf-8');
console.log(fileContent);
```

Output:
hello world

#### Asynchronously

Using the `readFile` method, you can read the content of a file asynchronously, which is non-blocking and preferred for better performance.

```javascript
const fs = require('fs');
fs.readFile('./file.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
```
### Writing Files

#### Synchronously

To write content to a file synchronously, you can use the `writeFileSync` method. This method blocks the execution until the file is written.

```javascript
const fs = require('fs');
fs.writeFileSync('./file2.txt', 'FS Testing');
const fileContent = fs.readFileSync('./file2.txt', 'utf-8');
console.log(fileContent);
```

Output:
FS Testing

#### Asynchronously

The `writeFile` method allows you to write content to a file asynchronously, which is non-blocking.

```javascript
const fs = require('fs');
fs.writeFile('./test.txt', "CSO erehT olleH", { flag: 'a' }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written");
  }
});
```

The `{ flag: 'a' }` option appends the content to the file. If you want to overwrite the file, omit this option.

### Why Prefer Asynchronous Methods?

Asynchronous methods (`readFile`, `writeFile`) are preferred in Node.js because they do not block the execution of other code. This is particularly important in a server environment where you want to handle multiple requests efficiently. Synchronous methods (`readFileSync`, `writeFileSync`) block the execution until the operation is complete, which can degrade performance.

### Summary

- **Synchronous methods**: Block the execution until the file operation is complete (`readFileSync`, `writeFileSync`).
- **Asynchronous methods**: Non-blocking and handle file operations efficiently (`readFile`, `writeFile`).

Using asynchronous methods is generally recommended for better performance and responsiveness, especially in a server environment.
