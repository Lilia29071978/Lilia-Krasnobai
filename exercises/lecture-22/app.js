// exercise 1
const classes = ['first', 'second', 'third', 'fourth'];
const element = document.querySelector('h1');
console.log(typeof element);
console.log(element.length);

for (let i = 0; i < element.length; i++) {
  console.log(element[i]);
}

// exercise 2
const p1 = document.querySelector('#p1');
p1.style.backgroundColor = 'gold';

// exercise 3
const p2 = document.querySelector('#p2');
p2.style.backgroundColor = 'gold';
p2.style.backgroundColor = 'gold';
p2.style.color = 'blue';
p2.style.fontSize = '2rem';

// exercise 4
const p3 = document.querySelector('#p3');
p3.classList.add('third');

// exercise 5
const p4 = document.querySelector('#p4');
p4.classList.add('fouth,border');

// exercise 6
const container = document.querySelectorAll('.container');

for (let i = 0; i < container.length; i++) {
    const firstElement = container[i].firstElementChild;
    console.log(firstElement);
}

// exercise 7
for (let i = 0; i < container.length; i++) {
    const firstElementContent = container[i].firstElementChild.textContent;
    console.log(firstElementContent);
}

// exercise 8
let header=document.querySelectorAll('.container header')

for(let i=0;i<header.length;i++) {
    let firstTag = header[i].firstElementChild;
    let text=firstTag.textContent;
    let attrId=firstTag.getAttribute('id');
    let attrClass=firstTag.getAttribute('class');
    let newHtml="<h"+(i+1)+">"+text+"</h"+(i+1)+">";
    firstTag.innerHTML=newHtml;
    firstTag.setAttribute('id',attrId);
    firstTag.setAttribute('class',attrClass)
    console.log(newHtml)
    console.log(firstTag.getAttribute('id'))
    console.log(firstTag.getAttribute('class'))
}
