//creating objects 

const person = {
    name : "vicks",
    age : 26
}
console.log(person);

// adding function is object properties(global)
// on global it is globalise it not fetch the initialised name... it shows undefined 

const people = {
    name : "vickey",
    age : 26,
    geet: () =>
    {
        console.log("my name  is " + this.name)

    }
};

people.geet();

// to fetch name from current property of object we need to use function keyword

const offices = {
    name : "sourabh",
    age : 27,
    geet: function()
    {
        console.log("my name  is " + this.name);

    }
};

offices.geet();


// we can fetch name from current property with different approach 

const local = {
    name: "vivek",
    age: 30,
    city:"delhi",

    geet(){
        console.log("hi i am "+ this.name +"")
    }
}

local.geet();