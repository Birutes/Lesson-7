var Animal = function(name) {
	this.name = name;
};

Animal.prototype.walk = function() {
    console.log("I am walking!");
};

Animal.prototype.eat = function() {
    console.log("I am eating!");
};

function Cat(name, speech){
	Animal.call(this, name);
	this.speech = speech;
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.purr = function(){
	console.log("Hello, I'm " + this.name + ".");
};

Cat.prototype.meow = function(){
	console.log("Klausiu: " + this.speech);
};

var cat1 = new Cat("Guci", "Kaip sekasi?");
cat1.purr();
cat1.meow();
cat1.walk();
cat1.eat();