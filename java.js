//Exercise 1


// Create an array and add three numbers to it.
arr = [1 ,2 ,3];
// Use your array to return the second number.
console.log(arr[1]);
// What data type is 123/12? "Things in quotes!"? undefined?
typeof(123/12); //is a number
// number
typeof("Things in quotes!"); //is a string
// String
typeof(undefined); //is undefined

// Write an if statement that returns true.
var a = 2;
var b = 1;

if (a > b) { console.log(true);}
else { console.log(false);}

// Consider these two arrays: myArray = ['Thomas', 'Amber', 'Raoul']
// and emptyArray = [].
// Use a for loop to add our names to emptyArray.
//  (Hint: n needs to be the length of the array.
// Google a helper method for finding the length of an array in Javascript.
// Is it the same as Ruby?)
myArray = ['thomas', 'Amber', 'Raoul'];
emptyArray = [];

for (var i=0; i<myArray.length; i++) {
  emptyArray.push(myArray[i]);
}
console.log(emptyArray)


//Javascript Exercises #2 !!

//Write a function that returns your first name. Call it.

function me(){
  return "Lara"
}

me() //Lara


//Write a new function that takes your name as an input. The function should return your first name, plus your last name, as one string. (Hint: strings can be combined with a +)
function name(first, last){
  console.log(`My name is ${first} ${last}`)
}

name('Lara', 'Thordardottir')

//Javascript Exercise #3
//What is this? Does it have an equivalent in Ruby?

//this is determined by how a function is called. It is similar to self in Ruby.

//What is this? Does it have an equivalent in Ruby?


//Convert the above Person class to an ES2015 version using the new class syntax

class Person
function(first, last) {

    this.first = first;
    // public variables -- reference current object
    this.last = last;

    var privateFn = function(first, last){
    // private function
    }

    this.setName = function(first, last){
        // public function
        this.first = first;
        this.last = last;
    }

}

fullName = () => {
    // extend prototype
    return this.first + ' ' + this.last;
    // even at runtime!
}

var bob = new Person("Thomas", "Ochman");
    // "new" creates an object
bob.fullName();
    // "Thomas Ochman"

    const privateFn = (first, last) => {
      // private function
    };

    this.setName = (first, last) => {
        // public function
        this.first = first;
        this.last = last;
    };
  }
}
