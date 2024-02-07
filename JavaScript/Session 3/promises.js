var x = 10;
var myPromise = new Promise(function (resolve, reject) {
  if (x == 10) resolve("success");
  else reject("fail");
});

myPromise
  .then((res) => {
    console.log(res);
    return res;
  })
  .then((res) => console.log(res + " Done"))
  .catch((err) => console.log(err));
