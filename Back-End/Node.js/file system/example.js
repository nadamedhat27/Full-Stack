const fs = require('fs');

//Reading files

// Synchronus
const fileContent = fs.readFileSync('./test.txt', 'utf-8');
console.log(fileContent);

// Async
fs.readFile('./test.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});


// Writing


//Synchronus
fs.writeFileSync('./test2.txt', 'FS Testing');
const file2Content = fs.readFileSync('./test2.txt', 'utf-8');
console.log(file2Content);

//Asynchronus
fs.writeFile('./test2.txt', "CSO erehT olleH", { flag: 'a' }, (err) => {  // the a flag here means append, we can remove to overwrite if we want
  if (err) {
    console.log(err);
  } else {
    console.log("File written");
  }
});
