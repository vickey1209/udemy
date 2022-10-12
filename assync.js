const fetchdata = ()=>{
const promise = new Promise ((resolve,reject)=>
{
    setTimeout(()=>{
     resolve('done..!');
    },1500);
});
return promise;
};

setTimeout(() => {
    console.log("timer is done  ") ;
    fetchdata()
    .then(text=>{
        console.log(text);
        return fetchdata();

    })
    .then(text2 =>{
        console.log(text2);
    });
 },2000);













// const fetchdata = callback =>{
//     setTimeout(()=>{
//         callback('done..!')
//     },12000);
// };




// setTimeout(() => {
//    console.log("vickey shrivastava") 
// },5000);
// console.log("hello");
// console.log("hiii");


// setTimeout(() => {
//     console.log("timer is done") 
//     fetchdata(text =>{
//         console.log(text)
//     })
//  },20000);
//  setTimeout(() => {
//     console.log("vickey shrivastava") 
//  },4000);
//  setTimeout(() => {
//     console.log("vickey shrivastava") 
//  },6000);
//  setTimeout(() => {
//     console.log("vickey shrivastava") 
//  },8000);
//  setTimeout(() => {
//     console.log("vickey shrivastava") 
//  },10000);