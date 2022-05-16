/*
This is a class in JavaScript

Classes can be used to create multiple objects of the same type and perform methods using them 

They Are created using the "class" keyword along with the name of the class and square brackets beneath 
The "this" keyword represents the current object , and we can store properties for our class using the "this" keyword 


*/

class Cat {
    constructor(color, size, weight){
        this.color = color;
        this.size = size;
        this.weight = weight;
    }
    purr(){
        console.log(`Purr from the ${this.color} cat!`)
        return this;
    }
    checkWeight(){
        console.log(`The ${this.color} cat weighs ${this.weight} pounds!`)
        return "Done!"
    }
    checkSize(){
        console.log(`The ${this.color} cat weighs ${this.weight} pounds, so it's ${this.size}!`)
        return this;

    }

}

// To chain multiple class methods, make sure not to return "undefined" and return the "this" keyword (the current object)

let Mandy = new Cat("black", "large", 102);

console.log(Mandy.purr().checkSize().checkWeight())