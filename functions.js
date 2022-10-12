// to initializ we can use var , let  and const 

// var name = "vickey" ;
// let age  =  21;
// const city = "nagpur";

// function summarizeuser(username, userage, usercity)
// {
//     return(
//         'name is '+ username +
//          ', age is ' + userage  + 
//          ', he lives at ' + usercity
//     );
// }
// console.log(summarizeuser(name, age , city));

//functions in different ways 
//we can initialise function name in node 

// var name = "vickey" ;
// let age  =  21;
// const city = "nagpur";

// const summarizeuser = function (username, userage, usercity)
// {
//     return(
//         'name is '+ username +
//          ', age is ' + userage  + 
//          ', he lives at ' + usercity
//     );
// }
// console.log(summarizeuser(name, age , city));


// without function keyword also we can use function using arrow function
// name of the function = arguments 
// {function body}

var name = "vickey" ;
let age  =  21;
const city = "nagpur";

const summarizeuser = (username, userage, usercity) =>
{
    return(
        'name is '+ username +
         ', age is ' + userage  + 
         ', he lives at ' + usercity
    );
}
console.log(summarizeuser(name, age , city));

//another function

const add = (a,b,c)=>
{
    return a+b+c;
}
console.log(add(2,3,1));

//if u have only one argument then u dont need of paranthesis

const subtract = a =>
{
    return a-7;
}
console.log(subtract(5))


//u can use function using below syntax also


const addition = () => 7+9;

console.log(addition());
