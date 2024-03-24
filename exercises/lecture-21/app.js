//exercise 1
const fruits = ['apple banana cantaloupe blueberries grapefruit'];

//exercise 2
for (i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//exercise 3
let i=0
while (i<fruits.length) {
    console.log(fruits[i]);
    i++; 
}

//exercise 4
let i=0
do{
    console.log(fruits[i]);
    i++; 
}
while (i<fruits.length)

//exercise 5
for (let fruit of fruits){
    console.log(fruit)
}

//exercise 6
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

//exercise 7
const names = ['Batman'];
names.push('Joker');

//exercise 8
const names = ['Batman'];
names.unshift('Joker');

//exercise 9
names = ['Batman', 'Joker', 'Bane'];
names.unshift('Catwoman');

//exercise 10
names = ['Batman', 'Joker', 'Bane'];
let newNames=[names]
newNames.unshift('Catwoman')

//exercise 11
names = ['Batman', 'Joker', 'Bane'];
names.splice(1,0,'Catwoman');

//exercise 12
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names.splice(1,2);
console.log(names);

//exercise 13
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names.splice(1,2,'Alfred');

//exercise 14
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];  
  if(name!=findName){
    names.push('Alfred')
  }

//exercise 15
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
if(names.includes('Alfred')){
let index=names.indexOf('Alfred');
names.splice(index,1)
}