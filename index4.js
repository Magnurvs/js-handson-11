// Write a JavaScript function to retrieve all the names of object's own and inherited properties.
console.log("Que 4");

function getAllPropertyNames(obj) {
    var props = [];


    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            props.push(prop);
        }
    }

    var proto = Object.getPrototypeOf(obj);
    while (proto) {
        var inheritedProps = Object.getOwnPropertyNames(proto);
        for (var i = 0; i < inheritedProps.length; i++) {
            if (props.indexOf(inheritedProps[i]) === -1) {
                props.push(inheritedProps[i]);
            }
        }
        proto = Object.getPrototypeOf(proto);
    }

    return props;
}

var obj = {
    foo: 1,
    bar: 2
};


var obj2 = Object.create(obj);
obj2.baz = 3;

var propNames = getAllPropertyNames(obj2);

console.log(propNames);