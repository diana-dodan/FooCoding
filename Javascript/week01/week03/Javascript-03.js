//1
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let myNewString = "hello this is a difficult to read sentence";
console.log(myNewString);

//2
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");
console.log("The value of the new array will be: 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle'");

console.log(favoriteAnimals);

console.log("The array has a length of:", favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at index:", favoriteAnimals.indexOf("meerkat"));


// More Javascript
// 1
function sumOfThreeNumbers(number1, number2, number3) {
  return number1 + number2 + number3;
}

sumOfThreeNumbers(1,2,3);

//2

function colorCar(color) {
  console.log('a red car');
}

colorCar('red');

// 3

let myHonda = {
  color: "red",
  wheels: 4,
};

function printObjectProperties(obj) {
  for (let key in obj) {
  console.log(key + ": " + obj[key]);
    }
  }

printObjectProperties(myHonda);

//4

function vehicleType(color, code) {
  if (code === 1){
  console.log("a blue car")
  } else if (code === 2) {
  console.log("a blue motorbike")
  }
}
vehicleType("blue", 2);


//5
let newVariable = 3;
/* if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
} */
newVariable === 3 ? console.log(`yes`) : console.log(`no`);


//6 

function vehicleOne(color, code, age) {
   if (code === 1){
  console.log("a blue used car");
  } else if (code === 2) {
  console.log("a blue used motorbike");
  }
}
vehicleOne("blue", 1, 5);

//7
let vehicleList = ["motorbike", "caravan", "bike"];
vehicleList.pop();
console.log(vehicleList);

//9

// function vehicleOne() {
//     vehicleList = ["motorbike", "caravan", "bike"];
 
//     vehicle.apply(null, vehicleList);
// }
 
// function vehicle(color, code, age) {
//     console.log("a green new bike")
// }
// vehicleOne("green", 3, 1);

//10
//11

//12, 13, 14

let emptyObject = {
  teacher1: "htmlcss",
  teacher2: "javascript",
}


//15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
x == y
x === y 
z == y
z == x

//16
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

//17
let bar = 42;
typeof typeof bar;
//typeof always returns a string