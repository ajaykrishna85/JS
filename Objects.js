//Object can be created using object literal
var obj1 = {name : "Jimmy", lastname : "Johns"};
console.log(obj1);

//Object can be created using new keyword.
var obj2 = new Object();
obj2.name = "Mc";
obj2.lastname = "Donalds";
console.log(obj2);

//Using an Object Constructor
function obj(name, lastname) {
    this.name = name;
    this.lastname = lastname;
}
var obj3 = new obj("Taco", "Bell");
console.log(obj3);

//Array object using literal
var arr1 = [1,2,3];
console.log(arr1);

//Array using new
var arr2 = new Array();
arr2.push(1);
arr2.push(2);
arr2.push(3);
console.log(arr2);


