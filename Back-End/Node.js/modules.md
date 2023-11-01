# Modules in Node.js

*Module* is the idea of break the globalization of the variable in JS all `variable` can be access but by using the idea of module we introduce the same idea as including libraries **set of functions**

***

```js
#mainFile

var mod=['mark','johan','thomas'];
var mars=[3,2,1];
module.exports=mod;
#Now only mod is avaiable 
```

***

```js
#peopleFile
const Pp=require('./main');
console.log(Pp);
```

***
`exports` keyword make them available for outside the modules file

### Now let's try to export all the module now 

***

```js
#main
var mod=['mark','johan','thomas'];
var mars=[3,2,1];

module.exports={
mod,mars

};
```

***

### The otherside

***

```js
#people
const Pp=require('./main');
console.log(Pp.mod,Pp.mars);
```

***

### Another way

***

```js
#people 
const{mod ,mars }=require('./main');
console.log(mod,mars);
```

***

### Let's see if something might go **wrong**

***

```js people
const {mod}=require('./main') ;
console.log(mod,mod.mars);
```

***
`mod.mars` is not access ~~the right way~~

#### Let's call it for today
