//|| = or operater, for "or" statements only 1 side needs to be true for the code to mvoe on
// && = and operater, for "and" statements both sides need to be true for the code to work
// ! = Not operater, this returns true if the expressions is false
// if and else statements can only have 1 else statement inside the {brackets}. Else if can have as many as you want
// Operatrer precedence ((!) Not has a higher precednece than && and ||) && has a higher precedence than
//|| but these can be altered with ()//

//The switch statement is used to perform different actions based on different conditions.
//     ex. switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;

//Objects are a collection of zero or more properties.
//So what's a property? A property consists of a key: value pair, where the:
//   key is a string (JS will coerce the type automatically), and the
//   value is any JS expression (code that evaluates to a single value or thing), including other objects (yes, functions too)
//Difference between objects and arrays - arrays use [] brackets and objects use {} bracket
//Objecy stores key-value pairs
    //ex. const car = {
//           color: 'blue', //Color is the key while 'blue' is the value
//           hp: 4000,
//           year: 1989,
// } 
//console.log(car) this wil/ show the entire list above in the object

//key is like an index in an array, but is has a name and is unique
//A value is what a key refers too, and can be any datatype

// Adding to the objects uses . method to add whatever value you wish
// car.previousOwner = ['Chan', 'Yang', 'Chu', 'Sara']
// console.log(car)

/You can use object properties with conditionals, loops, etc
// Conditional example
// const obj = {
// 	salutation: 'hi',
// 	count:4
// }
// if (obj.salutation === "hi") {
// 	console.log('ok');
// }
//  For loop example
// for (let i = 0; i < obj.count; i++) {
// 	console.log(i);
// }

//Classes are used to create objects (Think of classes as the blueprints used to create objects of a certain 'type'
//Encapsulation is a key principle of Object Orieneted programming.
//Encapsulation is the concept of bundling data (properties/attributes) and related behavior (methods) within an object.

//example of encapsulating data (attributes/properties) & behavior (methods)
// const cohort = {
//   id: 'SEIR Flex Madeline',
//   students: ['Diana', 'Julio', 'Cory'],
//   instructors: ['Arthur', 'Nando', 'Teo', 'Sean'],
//   addStudent: function(name) {
//     name = name[0].toUpperCase() + name.substr(1).toLowerCase();
//     this.students.push(name);
//   },
//   pickRandomStudent: function() {
//     const rndIdx = Math.floor(Math.random() * this.students.length);
//     return this.students[rndIdx];
//   }
// };

//When creating a class FIRST LETTER MUST BE CAPITALIZED
//Instantiating a class
// instance: An object created by a class
// instantiate: We instantiate a class to create an object
// instantiation: The process of creating an object

//In JS, we create objects using the newkeyword when invoking (instantiating) the class:
//example
// let Rav4 = new Vehicle()
//let Corolla = new Vehicle()
// class Vehicle {
// }

// The constructor Method
// *When a class is being instantiated, the special constructormethod in the class will automatically be called:*
//example
// class Vehicle {
// 	constructor(vin, make) {
// 		this.vin = vin;
// 		this.make = make;
	// return is not needed
	// because the new object is returned by default
// 	}
// }
// const plane = new Vehicle('X123Y', 'Boeing');
// The purpose of the constructormethod is to initialize the data properties of the new object being created (represented by this).
// If there are no properties to initialize, the constructormethod is optional (a hidden default constructor is called).

// Defining Methods in a Class
// There are two types of methods that can be added to a class:
// Prototype (instance) methods
// Static (class) methods

// Overriding Methods
// Thanks to another OOP principle called inheritance, subclasses inherit methods from their parent classes.
// JS is different from class-based languages like Java or Python in that its inheritance implementation is prototype-based.

let rating = 2 

if (rating === 3) {
    console.log('You Are a Superstar');
}
else if (rating === 2) {
    console.log("Not it");
}
else if (rating === 1) {
    console.log('Winner Winner');
}
else {
    console.log('Invalid')
}

let highScore = 1450;
let userScore = 1445;

if(userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log(`Good try. Your score of ${userScore} did not overtake the high score of ${highScore}`);
}
