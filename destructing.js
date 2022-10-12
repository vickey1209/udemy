// What is Destructuring in JavaScript?
// The destructuring assignment syntax is a JavaScript expression that makes it possible
//  to unpack values from arrays, or properties
//   from objects, into distinct variables.



const person = {
    name : "vicks",
    age : 26
}
// console.log(person);


const printname = ({name}) =>{
    console.log(name);
}

// printname(person)

const {name , age} =  person;
console.log(name,age);
//============================================================================================================



 //in destructing it unpack the values from array  or properties from object 
const hobbies = ['cricket' , 'football']
const [hobby1, hobby2] = hobbies;
console.log(hobby1 , hobby2 );