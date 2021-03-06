/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In the global scope, the this keyword refers to the windows object and it houses all functions defined in the global scope

* 2. When a function is called using the dot notation (e.g obj.test()), the this keyword in that function will refer to the object before the dot notation

* 3. Every time an instance of a class is created using the new keyword, the constructor runs and the this keyword inside that constructor refers to that instance of that class at that time 

* 4. When calling a method using javascripts call() or apply() method, the this keyword is explicitly defined as first arguement.

*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function greet() {
  console.log("Hello World!");
}

greet(); // Outputs 'Hello World!'
this.greet(); // Outputs 'Hello World!'
window.greet(); // Outputs 'Hello World!'

// Principle 2
// code example for Implicit Binding

const person = {
  name: "Melvine",
  greet() {
    console.log(`${this.person} says Hi`);
  }
};

const anotherPerson = {
  name: "Awa",
  greet() {
    console.log(`${this.person} says Hi`);
  }
};

person.greet(); // Outputs 'Melvine says Hi'

// Principle 3
// code example for New Binding
function Person(name) {
  this.name = name;
}

const boy = new Person("John");
console.log(boy.name); // outputs 'John'

// Principle 4
// code example for Explicit Binding

function Animal(name, kind) {
  this.name = name;
  this.kind = kind;
}

Animal.prototype.identifyAnimal = function() {
  console.log(`${this.name} is a ${this.kind}`);
};

const myDog = new Animal("Jack", "dog");
myDog.identifyAnimal(); // Outputs 'Jack is a dog.'

const myDogFunc = myDog.identifyAnimal;
myDogFunc.call(myDog, "Jack", "dog"); // Outputs 'Jack is a dog.' (Explicit Binding with myDog instance)
