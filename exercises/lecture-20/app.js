//1 exercise
let person = {
    name:'Lilia',
    age:46
};
console.log(person);
// 2 exercise
let person = {
    userName:{
        firstName:'Lilia',
        lastName:'Krasnobai'
    },
    age:46
}
console.log(person);
// 3 exercise
let person = {
    userName:{
        firstName:'Lilia',
        lastName:'Krasnobai'
    },
    age:46,
    bio(){
        return 'name' +' '+ `${this.userName.firstName}\n`+
               'surname' +' '+ `${this.userName.lastName}\n`+
               'age'+' '+ `${ this.age }`
    }
}
console.log(person.bio());
//exercise 4
let person = {
    userName:{
        firstName:'Lilia',
        lastName:'Krasnobai'
    },
    age:46,
    introduceSelf(){
        return 'Hi!' +' '+'I\'m'+' '+ `${this.userName.firstName}`
    }
}
console.log(person.introduceSelf());
//exercise 5
function createPerson(name){
    return{
      name:name,
         introduseSelf:function(){
           return 'Hello, my name is' +' '+`${this.name}`
         }
        }
     }   
  
let person1=createPerson('Lilia');
let person2=createPerson('Nikita');
console.log(person1.introduseSelf())
console.log(person2.introduseSelf())
//exercise 6
function person(name){
    this.name = name;
    this.introduseSelf=function(){
            return'Hello, my name is' +' '+ `${this.name}`
        }
    }   
 
    let person_1=new person('Mary');
    let person_2=new person('Tom');
    console.log(person_1.introduseSelf());
    console.log(person_2.introduseSelf())

    
    
    if('prop' in person_1){
      console.log('Mary містить \'prop\'')
    }else{
      console.log('Mary не містить \'prop\'')
    }
//exercise 7 
let dirtyMartini = {
    gin: '6 fluid ounces gin',
    dryVermouth: '1 dash dry vermouth (0.0351951ml) ',
    oliveBrine: '1 fluid ounce brine from olive jar',
    olives: '4 stuffed green olives',    
english_please() {
    return 'ingredients:\n' +
        `${this.gin}\n` +
        `${this.dryVermouth}\n` +
        `${this.oliveBrine}\n` +
        `${this.olives}`
}, excuse_my_french() {
     return 'ingrédients:\n' +
        '170.4786 ml de gin\n' +
        '1 trait de vermouth sec (0.0351951ml)\n' +
        '28.4131 ml de saumure du pot d\'olive \n' +
        '4 olives vertes farcies'
}
}
console.log(dirtyMartini.english_please());
console.log(dirtyMartini.excuse_my_french());