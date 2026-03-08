/*function Alien(name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = "alien"
}
Alien.priototype.fly() = () => console.log("geetanshi jain")
Alien.prototype.sayPhrase = () => console.log(this.phrase)
const alien1 = new Alien("Ali", "I am Ali the Alien");
console.log(alien1.name)
console.log(alien1.phrase)
alien1.fly() 
*/
/*
function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log('Dog barks');
};
var dog = new Dog('Buddy');
dog.speak(); // Output: Animal speaks
dog.bark(); // Output: Dog barks
*/

let person = {
    name: 'John',
    age: 30
};

let john = Object.create(person);
john.occupation = 'Engineer';

console.log(john.name); // Output: John
console.log(john.age); // Output: 30
function Vehicle() { }
Vehicle.prototype.start = function () {
    console.log('Vehicle started');
};
function Car() { }
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.start = function () {
    console.log('Car started');
};
var vehicle = new Vehicle();
var car = new Car();
vehicle.start(); // Output: Vehicle started
car.start(); // Output: Car started
