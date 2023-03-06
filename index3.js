// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
console.log("Que 3");
Array.prototype.sum = function() {
    return this.reduce(function(sum, value) {
        return sum + value;
    }, 0);
};


var array1 = [1, 2, 3, 4, 5];
var array2 = [10, 20, 30];
var array3 = [-1, 0, 1];
var array4 = [5, 4, 6];


var sum1 = array1.sum(); // sum1 = 15
var sum2 = array2.sum(); // sum2 = 60
var sum3 = array3.sum(); // sum3 = 0
var sum4 = array4.sum(); // sum4 = 15

console.log(sum1, sum2, sum3, sum4);