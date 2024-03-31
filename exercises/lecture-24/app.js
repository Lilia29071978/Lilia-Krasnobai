//exercise 1
const colors = ['blue', 'green', 'white'];

function iter(item) {
    console.log(item);
  }
  colors.forEach(iter);

//exercise 2
function iterate(item, index, array) {
    console.log(`${item} has index ${index}`);
    if (index === array.length - 1) {
      console.log('The last iteration!');
    }
  }
  colors.forEach(iterate);

//exercise 3
const letters = ['a', 'b', 'c'];
function iterates(letter) {
  console.log(this === window);
}
letters.forEach(iterates, window);

//exercise 4
const Numbers = [22, 3, 4, 10];
let even = true;
Numbers.forEach((number) => {
    if (number % 2 !== 0) {
      even = false;
    }
  });
  if (even) {
    console.log('Усі числа  є парними.');
  } else {
    console.log('непарні числа.');
}
//exercise 5
const numbers = [22, 3, 4, 10];
const evens = numbers.every((number) => number % 2 === 0);
if (evens) {
    console.log('Усі числа у масиві є парними.');
  } else {
    console.log('Масив містить непарні числа.');
}

// exercise 6
const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];
const index = fruits.findIndex((fruit) => fruit === "blueberries");
if (index !== -1) {
  console.log("Індекс першого елемента 'blueberries':", index);
} else {
  console.log("Елемент 'blueberries' не знайдено");
}

//exercise 7
const arr = [7, 33, 47, 99, 2, 103, 79];
const GreaterThan10 = arr.find((element) => element > 10);
if (GreaterThan10 !== undefined) {
  console.log('Перший елемент більший за 10:', GreaterThan10);
} else {
  console.log('Елемент не задовольняє умову');
}

//exercise 8
const array = [1, 2, 3, 4, 5];
const EvenNumber = array.some((element) => element % 2 === 0);
if (EvenNumber) {
  console.log('У масиві є одне парне число.');
} else {
  console.log('У масиві немає парних чисел.');
}

// exercise 9
const secondNumbers = [1, 30, 4, 21, 100000];
secondNumbers.sort((a, b) => a - b);
console.log(secondNumbers);
