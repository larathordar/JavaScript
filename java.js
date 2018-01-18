//Exercise 1


// Create an array and add three numbers to it.
arr = [1 ,2 ,3];
// Use your array to return the second number.
alert(arr[1]);
// What data type is 123/12? "Things in quotes!"? undefined?
number = typeof(123/12);
// number
string = typeof('hello');
// String
unDefined = typeof(undefined);
// undefined var i=0; i<=n; i++

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
