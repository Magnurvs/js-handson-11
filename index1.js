// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

console.log("Que 1");
const parent = {
    sayHello() {
        console.log("Hello from parent!");
    },
};


const child = Object.create(parent);

child.sayHello = function() {
    console.log("Hello from child!");
};

child.sayHello();