// arrays

// const hobbies = ['cricket','fotball'];
// for(let hobby of hobbies)
// {
//     console.log(hobby);
// }

//using reference .push to add in array
const hobbies = ['cricket','fotball'];

console.log(hobbies.map(hobby=>'hobby : ' +hobby));
// hobbies.push("volleyball")
// console.log(hobbies);

//addding new array value in previous array valueby using coppiedarray

// const coppiedarray = hobbies.slice()
// const coppiedarray = [hobbies]
// console.log(coppiedarray);


//fofr without nested array

const coppiedarray = [...hobbies]
console.log(coppiedarray);


