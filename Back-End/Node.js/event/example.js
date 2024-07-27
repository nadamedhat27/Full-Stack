const EventEmitter = require('events');

class Dog extends EventEmitter {} // class dog now inherits the functions of eventEmitter

const dog = new Dog(); // this creates a new object of the Dog class which inherits the functions of the EventEmitter Class

//functions
const barkListener = () => console.log('Woof');
const whineListener = () => console.log('Whine!');
const growlListener = () => console.log('Grrr!');

// on: lets the object always listen for the event (the first argument) which then fires the function (second argument) which could be pre-defined
//      or an arrow function

// once: listens to the object for an event, when the event happened the function is fired, but the listener is removed so its basically a listen once.


dog.on('bark', barkListener);
dog.once('whine', whineListener);
dog.on('growl', growlListener);

// Emit events: this fires the listeners for the called event

dog.emit('bark');  // Output: Woof!
dog.emit('whine'); // Output: Whine!
dog.emit('whine'); // No output
dog.emit('growl'); // Output: Grrr!

// list event names
console.log(dog.eventNames()); // Output: ['bark', 'growl']

// remove specific listener
dog.removeListener('bark', barkListener);
dog.emit('bark');  // No output

// Remove all listeners
dog.removeAllListeners();
console.log(dog.eventNames()); // Output: []

