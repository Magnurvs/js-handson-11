// Write code to explain prototype chaining

console.log("Quen 2");
var paren = {
    sayHello: function() {
        console.log("Hello!");
    }
};


var child1 = Object.create(paren);


child1.sayHello();


paren.sayGoodbye = function() {
    console.log("Goodbye!");
};


child1.sayGoodbye();