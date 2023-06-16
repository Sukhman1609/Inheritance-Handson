function Parent() {
    this.parentProperty = "I am a property of the parent object";
  }
  
  Parent.prototype.parentMethod = function () {
    console.log("This is a method of the parent object");
  };
  
  function Child() {
    this.childProperty = "I am a property of the child object";
  }
  Child.prototype = new Parent();
  
  var childObj = new Child();
  
  console.log(childObj.childProperty); 
  console.log(childObj.parentProperty);
  
  childObj.parentMethod();

  var parent = {
    parentProperty: "I am abc",
  };
  
  var child = Object.create(parent);
  child.childProperty = "I am xyz";
  
  console.log(child.childProperty);
  console.log(child.parentProperty);


  Array.prototype.sum = function() {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
      sum += this[i];
    }
    return sum;
  };
  
  var array1 = [1, 2, 3, 4, 5];
  var array2 = [10, 20, 30];
  var array3 = [2, 4, 6, 8];
  
  var sum1 = array1.sum();
  var sum2 = array2.sum();
  var sum3 = array3.sum();
  
  console.log(sum1); 
  console.log(sum2); 
  console.log(sum3); 

 Array.prototype.sum = function() {
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
};

var array1 = [1, 2, 3, 4, 5];
var array2 = [10, 20, 30];
var array3 = [2, 4, 6, 8];

var sum1 = array1.sum();
var sum2 = array2.sum();
var sum3 = array3.sum();

console.log(sum1); 
console.log(sum2); 
console.log(sum3);

function getAllPropertyNames(obj) {
    var propertyNames = [];
  
    for (var key in obj) {
      propertyNames.push(key);
    }
  
    return propertyNames;
  }
  
  var obj = {
    name: "John",
    age: 30
  };
  
  function Person() {
    this.gender = "male";
  }
  
  Person.prototype = obj;
  
  var person = new Person();
  
  var allPropertyNames = getAllPropertyNames(person);
  console.log(allPropertyNames);