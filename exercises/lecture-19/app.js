//1 exercise
let str1 = 'I\'m a string!';//Рядки однакові
let str2 = "I'm a string!";//Рядки однакові
console.log(str1.length);
console.log(str2.length);
console.log(str1 === str2);
//2 exercise
let string5 = 'Hello World';
onsole.log(string5[0]);
console.log(string5.charAt(0));
//3 exercise
let str3 = "Hello Javascript";
console.log(str3.match('J'));
//4 exercise
console.log(str3[str3.length - 1]);
console.log(str3.charAt(str3.length - 1));
//5 exercise
    //1
    function lastChar(str3) {
        return (str3[str3.length - 1])
    }
    console.log(lastChar(str3))

    //2
    let lastChar2=function (str3) {
        return (str3.charAt(str3.length - 1));
    }
    console.log(lastChar2("Hello Javascript"))
    //3
    let lastChar = str3 => str3.charAt(str3.length-1);
    console.log(lastChar(str3));
// 6 exercise
    let a = 'When candles are out,';
    let b = 'all cats are grey.';
    console.log(a.concat(b));
// 7 exercise
    let fact = "Fifteen is the same as"
    let a = 5;
    let b = 10;
    console.log(fact + ' ' + (a + b));
// 8 exercise
    let firstName = "Tom";
    let lastName = "Cat";
    function getFullName(name,surname) {
        return (name +' '+surname);    
    }
    console.log(getFullName(firstName, lastName));
// 9 exercise
function greeting(callback) {
    callback = getFullName(firstName, lastName);
    let name = callback;
    return 'Hello,' + `${name}`+'!';
}
// 10 exercise
    let div = document.createElement('div')
    console.log(div);
    document.body.append(div);
    let heading = document.querySelector('div')
    div.insertAdjacentHTML('afterbegin', '<h1></h1>')
    let head = document.querySelector('h1')
    head.innerHTML=greeting()
// 11 exercise
    let string1 = "  The name of our game  ";
    console.log(string1)
    console.log(string1.trim());
    console.log(string1.trimStart());
    console.log(string1.trimEnd());

    const phoneNumber = '\t  555-123\n ';
    console.log(phoneNumber);
    console.log(phoneNumber.trim());
    console.log(phoneNumber.trimStart());
// 12 exercise
    let sentence = 'Always look on the bright side of life';
    console.log(sentence.match('look up'));
    console.log(sentence.includes('look on'));

    let String=sentence.match('look on',8)
    console.log(String);
// 13 exercise 
    let sentence = 'Always look on the bright side of life';
    console.log(sentence.indexOf('l'));
    console.log(sentence.indexOf('l', 3));
    console.log(sentence.indexOf('L'));
// 14 exercise
    let sentence = 'Always look on the bright side of life';
    console.log(sentence.slice(7));
    console.log(sentence.slice(0, 7));
    console.log(sentence.slice(7, 11));
// 15 exercise
    let checkuserName = /^[a-z0-9_-]{8,16}$/;
// 16 exercise
    let checkemail = /^[^\s@]+@[\s@]+\.[^\s@]+$/;
// 17 exercise 
    let sentence = 'Always look on the bright side of life';
    //1.
    function truncateText(sentence) {
    return (sentence.substring(0,50))
    }
    console.log(truncateText(sentence));
    //2.
    let truncateText = sentence => sentence.substr(0,50);
    console.log(truncateText(sentence));


