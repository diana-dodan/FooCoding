//1
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);

let newString = myString.replaceAll(",", " ");
console.log(newString);

//2
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");
console.log(
  "The value of the new array will be: 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle'"
);

console.log(favoriteAnimals);

console.log("The array has a length of:", favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
let index = favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at index:", index);

// More Javascript
// 1
function sumOfThreeNumbers(number1, number2, number3) {
  return number1 + number2 + number3;
}

sumOfThreeNumbers(1, 2, 3);

//2

function colorCar(color) {
  console.log("a " + color + " car");
}

colorCar("red");

// 3

function printObjectProperties(obj) {
  for (let key in obj) {
    console.log(key + ": " + obj[key]);
  }
}

let myHonda = {
  color: "red",
  wheels: 4,
};
printObjectProperties(myHonda);

//4

function vehicleType(color, code) {
  if (code === 1) {
    console.log("a " + color + " car");
  } else if (code === 2) {
    console.log("a " + color + " motorbike");
  }
}
vehicleType("blue", 2);

//5
/* if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
} */
console.log(3 === 3 ? "yes" : "no");

//6

function vehicle(color, code, age) {
  console.log(
    "a " +
      color +
      (age > 1 ? " used" : " new") +
      (code === 1 ? " car" : " motorbike")
  );
}
vehicle("green", 1, 5);

//7
let vehicleList = ["motorbike", "caravan", "bike"];

//8
console.log(vehicleList[2]);

//9

function vehicle(color, pos, age) {
  console.log(
    "a " + color + (age > 1 ? " used " : " new ") + vehicleList[pos - 1]
  );
}
vehicle("green", 1, 2);

// 10 , 11

vehicleList = ["car", "motorbike", "caravan", "bike", "plane"];
function advertisment() {
  let str = "Amazing Joe's Garage, we service ";

  vehicleList = vehicleList.toString();
  vehicleList = vehicleList.replaceAll(",", "s, ") + "s.";
  vehicleList = vehicleList.replace(/,(?=[^,]+$)/, " and");
  str = str + vehicleList;

  console.log(str);
}

advertisment();

// function vehicleOne() {
//     vehicleList = ["motorbike", "caravan", "bike"];

//     vehicle.apply(null, vehicleList);
// }

// function vehicle(color, code, age) {
//     console.log("a green new bike")
// }
// vehicleOne("green", 3, 1);

//12, 13, 14

let languages = {
  teacher1: "htmlcss",
  teacher2: "javascript",
};

//15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y; // [1,2,3]
z.push(4);
console.log(y, z);
console.log(x == y); //false
console.log(x === y); // false
console.log(z == y); // true
console.log(z == x); // false

//16
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

//17
let bar = 42;
console.log(bar); //42
console.log(typeof bar); //number
console.log(typeof typeof bar); //'number' is a string, that's why
//typeof always returns a string
