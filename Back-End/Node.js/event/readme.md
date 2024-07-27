# Event 
let's talk more about events in node 

Node.js has ‘events’ module which emits named events that can cause corresponding functions or callbacks to be called

Functions(Callbacks) listen or subscribe to a particular event to occur and when that event triggers, all the callbacks subscribed to that event are fired one by one in order to which they were registered.

## The EventEmmitter class

The event can be emitted or listen to an event with the help of EventEmitter. 
<img src='1 HPnEMvg3pixU0n7Iujxtzg.webp'>

```
const EventEmitter=require('events');
var eventEmitter=new EventEmitter();
```
###### let's practice more and more !!!!!!

the event has two method :
<ul><li>on 
<li>Emit
</ul>
but when we use them ?

on for -> subscription 
---------------------------
emit for-> publishing
---------------------------


```
const event = require('events');
class Dog extends event.EventEmitter { }
const dog = new Dog();

dog.on('bark', () => {
  console.log('Woof! Woof!');
});

dog.emit('bark');
```

output : 
Woof! Woof!
=======================



and there are more methods to use 
## List of most used methods
<ul>
<li>eventNames: Returns an array of strings of the assigned events.
<li>once: Event listener that will be triggered only once.
<li>removeListener: Remove a specific listener.
<li>removeAllListeners: Remove all listeners from the event.
</ul>


let me see how you use them :D 


