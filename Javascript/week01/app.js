
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



//WEEK03

const bookTitles = [
  "solaris",
  "one_hundred_years_of_solitude",
  "murmur_of_bees",
  "around_the_day_in_eighty_worlds",
  "the_body_multiple",
  "van_gogh_letters_to_his_brother",
  "worlds_in_the_making",
  "the_tell_tale_heart",
  "augmenting_alice",
  "walden",
];

function generateList() {
  const newList = document.createElement("ul");
  for (let i = 0; i < bookTitles.length; i++) {
    const book = bookTitles[i];
    newList.innerHTML += `<li id=${book}>${book}</li>`;
  }
  return newList;
}

let newFavoriteList = {
  solaris: {
    title: "Solaris",
    language: "English",
    author: "Stanislaw Lem",
  },

  one_hundred_years_of_solitude: {
    title: "One Hundred Years of Solitude",
    language: "Spanish, English",
    author: "G.G. Marquez",
  },

  murmur_of_bees: {
    title: "The Murmur of Bees",
    language: "Spanish, English",
    author: "Sofia Segovia",
  },

  around_the_day_in_eighty_worlds: {
    title: "Around the Day in Eighty Worlds",
    language: "English",
    author: "Martin Savransky",
  },

  the_body_multiple: {
    title: "The Body Multiple",
    language: "English",
    author: "Annemarie Mol",
  },

  van_gogh_letters_to_his_brother: {
    title: "Van Gogh's Letters to his Brother",
    language: "Dutch, English",
    author: "Van Gogh",
  },

  worlds_in_the_making: {
    title: "Worlds in the Making",
    language: "English",
    author: "Martin Savransky",
  },

  the_tell_tale_heart: {
    title: "The Tell Tale Heart",
    language: "English",
    author: "Edgar Allan Poe",
  },

  augmenting_alice: {
    title: "Augmenting Alice",
    language: "English",
    author: "Galit Ariel",
  },

  walden: {
    title: "Walden",
    language: "English",
    author: "Henry David Thoreau",
  },
};

// function generateList() {
//   let html = "<ul class='book-list'>";
//   for (let key in newFavoriteList) {
//     html += `<li id='${key}'><h3 class='title'>${newFavoriteList[key].title}</h3>`;
//     html += `<p>${newFavoriteList[key].language}</p>`;
//     html += `<p><b>${newFavoriteList[key].author}</b></p>`;
//     html += `</li>`;
//   }
//   html += "</ul>";
//   return html;
// }
// document.body.innerHTML = generateList();

function generateList() {
  let ul = document.createElement("ul");
  ul.setAttribute("class", "book-list");
  for (let key in newFavoriteList) {
    let li = document.createElement("li");
    li.setAttribute("id", key);

    let h3 = document.createElement("h3");
    h3.setAttribute("class", "title");
    h3.innerText = newFavoriteList[key].title;

    li.append(h3);

    let p = document.createElement("p");
    p.innerHTML = newFavoriteList[key].language;

    let p2 = document.createElement("p");
    let b = document.createElement("b");
    b.innerText = newFavoriteList[key].author;
    p2.append(b);

    ul.append(li);
    ul.append(p);
    ul.append(p2);
  }
  document.getElementsByTagName("body")[0].append(ul);
}
generateList();

let bookImages = {
  murmur_of_bees: "the-murmur-of-bees.jpg",
  van_gogh_letters_to_his_brother: "letters-of-van-gogh.png",
  worlds_in_the_making: "a-world-of-many-worlds.png",
  the_body_multiple: "the-body-multiple.png",
  the_tell_tale_heart: "the-tell-tale-heart.png",
  around_the_day_in_eighty_worlds: "around-the-day-in-eighty-worlds.png",
  augmenting_alice: "augmenting-alice.png",
  one_hundred_years_of_solitude: "one-hundred-years-of-solitude.jpg",
  walden: "walden.png",
  solaris: "solaris.jpg",
};

function addBookImage() {
  const bookImgArr = Object.keys(bookImages);
  console.log(bookImgArr);
  for (let book of bookImgArr) {
    // document.getElementById(
    //   book
    // ).innerHTML += `<img class='book-image' src='./pics/${bookImages[book]}' alt='${book}'>`;

    let element = document.getElementById(book);
    let img = document.createElement("img");
    img.setAttribute("class", "book-image");
    img.setAttribute("src", `./pics/${bookImages[book]}`);
    img.setAttribute("alt", book);
    element.append(img);
  }
}
addBookImage();
