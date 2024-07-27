console.log("Start");

async function exampleAsync() {
  console.log("Inside async function");

  await new Promise(resolve => {
    setTimeout(() => {
      console.log("Inside await");
      resolve();
    }, 0);
  });

  console.log("After await");
}

exampleAsync();

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

setTimeout(() => {
  console.log("setTimeout 2");
}, 100);

Promise.resolve().then(() => {
  console.log("Promise 1");
}).then(() => {
  console.log("Promise 2");
});

console.log("End");
