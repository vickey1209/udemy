//spread operator 
const person = {
    name : "vicks",
    age : 26
}
// console.log(person);

//spread operator pulls out all the properties of object or array 
const copiedperson = {...person};
console.log(copiedperson)

// ========================================================================================================================================




//IN THE BELOW CODE IT ONLY GIVES 3 ARGUEMENTS
// to fetch number of arguments in o/p we need to use rest operator

// const toArray = (arg1, arg2 , arg3) =>
// {
//     return [arg1, arg2 , arg3]
// }
// console.log(toArray(1,2,3))


// ==========================================================================================================================================



//Rest Operator
//in this operator it takes all the arguements 
//or if we want to pass more arguments then we use rest operator

const toArray = (...args) =>
{
    return args
}
console.log(toArray(1,2,3,4,5))