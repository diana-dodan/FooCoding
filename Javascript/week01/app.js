
// 1
console.log("Hola, mundo!")
console.log("Salut, lume!")
console.log("Bonjour, monde!")
console.log("Hello, world!")

// 2
console.log("I'm awesome");
// Here the problem is the apostrophe from "I'm" so instead we should use double quotes 

//3
let x;
console.log("the value of my variable x will be: undefined");
console.log(x);

x = 5;

console.log("the value of x will be 5");
console.log(x)

//4
let y = 'Hello';
console.log("the value of my string will be 'Hello'");
console.log(y)
y = 'Bye';
console.log("the value of my string will be 'Bye'");
console.log(y)

//5
let z = 7.25;
console.log(z);
let a = Math.round(z);

console.log(a)

let k = (z || a);
console.log(k);

//6
let myFavoriteColors = [];
console.log('the value of my array will be empty []')
console.log(myFavoriteColors);

let myFavoriteAnimals = ['penguins', 'dogs', 'cats'];
console.log(myFavoriteAnimals);
myFavoriteAnimals.push('baby pig');
console.log(myFavoriteAnimals);

//7
let myString = "this is a test";
console.log(myString);
myString.length;
console.log(`the lenght of myString is ${myString.length}`);

let foo = 3;
console.log("The value of my variable foo is: " + foo);

let foo1 = 'Hello';
console.log("The value of my variable foo is: " + foo1);

let foo2 = true;
console.log("The value of my variable foo is: " + foo2);

let foo3 = null;
console.log("The value of my variable foo is: " + foo3);

let foo4 = 3;

console.log("the value of my variables are: number, string, boolean, null and number");
console.log(typeof 3);
console.log(typeof 'Hello');
console.log(typeof true);
console.log(typeof null);
console.log(typeof 3);

//8

if (foo === foo1) {
    console.log('Same type');
} else{
    console.log('Different type');
  }

if (foo === foo4) {
    console.log('Same type');
} else{
    console.log('Different type');
  }

//9
x = 7;
x = x % 3;
console.log("% represents the remainder operator");
console.log("The remainder (%) operator returns the remainder left over when one operand is divided by a second operand");
console.log("It always takes the sign of the dividend");

//10
let dataTypes = ['gray', 2, true, false, null, undefined];
console.log(dataTypes);
console.log(6/0 === 10/0);
typeof Infinity;
Infinity === Infinity;
Infinity > Infinity;
Infinity * Infinity;
console.log('An array can include different data types as shown in the example above');
console.log('Infinites can be compared');
