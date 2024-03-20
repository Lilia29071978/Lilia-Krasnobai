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

