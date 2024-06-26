// exercise 1
function calculator(operation, initialValue, numbers) {
    let result = initialValue;
    for (const number of numbers) {
      result = operation(result, number);
    }
    return result;
    }
  
// sum() - це функція, яка описує операцію додавання.
function sum(n1, n2) {
return n1 + n2;
}

// multiply() - це функція, яка описує операцію множення.
function multiply(n1, n2) {
return n1 * n2;
}

console.log(calculator(sum, 0, [1, 2, 4])); // => 7
console.log(calculator(multiply, 1, [1, 2, 4])); // => 8

// exercise 2
let student_names = ['Wick', 'Malcolm', 'Smith'];

student_names.map((name, index, array) => {
  console.log(
    `name: ${name} | index: ${index} | array: [ ${array.join(", ")} ]`
  );
});

//exercise 3
let students_information = [
    { name: "Wick", degree: 375 },
    { name: "Malcolm", degree: 405 },
    { name: "Smith", degree: 453 },
  ];
  
let maxGrade = 600;

let result = students_information.map((student) => {
let percentage = (student.degree / maxGrade) * 100;
return { name: student.name, degree: student.degree, percentage: percentage };
});

result.forEach((item) => console.log(item));

// exercise 4

let arr = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];

let oneDimensional = arr.reduce((accumulator, currentValue) => {
  if (Array.isArray(currentValue)) {
    return accumulator.concat(currentValue);
  } else {
    accumulator.push(currentValue);
    return accumulator;
  }
}, []);

console.log(oneDimensional);

Array.prototype.upperCase = function () {
  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] === 'string') {
      this[i] = this[i].toUpperCase();
    }
  }
};

//exercise 5
function myFunc() {
  let arr = ['Algorithm', 'Data Structure', 'Operating System', 'html'];
  arr = arr.map(function(item) {
  return item.toUpperCase();
  });
  console.log(arr);
  }
  
  myFunc();
