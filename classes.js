/*
---This is a class in JavaScript

- Classes can be used to create multiple objects of the same type and perform methods using them 

- They Are created using the "class" keyword along with the name of the class and square brackets beneath 
- The "this" keyword represents the current object , and we can store properties for our class using the "this" keyword 


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
let Billy = new Cat("grey", "small", 30);
let Garfield = new Cat("orange", "extra large", 120);

console.log(Mandy.purr().checkSize().checkWeight())

/*
--- This is class inheritance 
- We don't need a constructor in the extension class, it will use the original classes' constructor by default 
- The class will have all the same functionality (methods & properties) as the original class 
- New methods can be created in the class
*/ 

class SpecialCat extends Cat{
    alphaCat(cat){
        let aplhaKitty = arrayToStoreCats.filter(kitty =>{
            arrayToStoreCats.push(lion);
            return cat == kitty;
        })
        return aplhaKitty
    }

}

let arrayToStoreCats = [Mandy, Billy, Garfield]
let lion = new SpecialCat("brown", "huge", 300);
console.log(Mandy.purr());
