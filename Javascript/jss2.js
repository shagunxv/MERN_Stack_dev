// let mydiv = document.querySelector('#myDiv');
// let newEle=document.createElement('span');
// newEle.textContent = "This is JS! ";
// mydiv.insertAdjacentElement('afterbegin',newEle);

// let child = document.querySelector('#fpara');
// mydiv.removeChild(child);





// Day 11 of JS !

// Changing CSS -> inline, external, internal


// let Pele = document.getElementById('spara');
// console.log(Pele);
// Pele.style.backgroundColor = 'blue';

// let secondDiv = document.getElementById('sdiv');
// console.log(secondDiv.style.cssText);
// secondDiv.style.cssText = "background-color:black; color: white; padding: 0.5rem"

// let firstDiv = document.querySelector('#fdiv');
// firstDiv.setAttribute('class','divclass');
// firstDiv.setAttribute('style',"color: pink","font-weight: bold");  //it replaces styles whichever was set before ..









// Day 12 of JS -

// function changeText(){
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Thank You!"
// }

// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click', changeText);

// fpara.removeEventListener('click',changeText);

// Phases of event -> Capturing phase - Going towards target. -> At-target - Target reached. -> Bubbling Phase - Goint back to the root node.

// Event Object -> event-trigger -> addEventListener(event)
// function changeText(event){
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Thank You!"
// }

// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click', changeText);

// Default action - 
// let Eleanchor = document.getElementById('fanchor');
// Eleanchor.addEventListener('click', function(event){
//     event.preventDefault();
//     Eleanchor.textContent = 'Googled !!';
// });


// let paras = document.querySelectorAll('p');
// for(let i = 0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', function(){
//         alert("You have Clicked on para " + (i+1));
//     })
// }

// let paras = document.querySelectorAll('p');
// function alertPara(event){
//     alert("You Have CLicked On " + event.target.textContent)
// }
// // for(let i =0; i<paras.length; i++){
// //     let para = paras[i];
// //     para.addEventListener('click', alertPara);
// // }

// let mydiv = document.getElementById('wrapper');
// document.addEventListener('click',alertPara);











// Day 13 of JS - Code Performance -

// Code 1 - 100 reflow and 100 repaint 

// const t1 = performance.now();

// for(let i = 1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is Para " + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();
// console.log("Time taken by code 1: " + (t2-t1));


// // Code 2 - 1 reflow and 1 repaint 

// const t3 = performance.now();

// let mydiv = document.createElement('div');

// for(let i = 1; i<=100; i++){
//     let para = document. createElement('p');
//     para.textContent = "This is Para number "+i;
//     mydiv.appendChild(para);
// }

// document.body.appendChild(mydiv);

// const t4 = performance.now();
// console.log("Time taken by code 2: " + (t4-t3)); //faster

// why?

//Reflow and Repaint -

// Reflow - Process of calculating position/dimension - computational intesnive..
// Repaint - Process of displaying content/ element pix by pix - faster



// Document Fragment - light weight document object, it doesn't take reflow or repaint..
// Best Code - 

// let fragment = document.createDocumentFragment();

// for(let i = 1; i<=100; i++){
//     let para = document. createElement('p');
//     para.textContent = "This is Para number "+(i+100);
//     fragment.appendChild(para); // No reflow and No repaint
// }

// document.body.appendChild(fragment) // 1 reflow and 1 repaint








// Day 14 of JS - Event Loop - 
// 1. Synchronous code - A piece of code which gets executed at the same time of flow of execution.
// 2. Async code - It doesn't necessarily get executed at the same time.

// Event Loop - call stack, browser, callback queue
// call stack handover the async code to browser, browser starts the timer.. here after handover the stack removes the entry and moves to another function..
// after the timeout completed the function goes to callback queue, now the event loop makes sure if the stack is empty, only then the front of queue gets executed..
/*LOUPE*/










// Day 15 of JS - Promises 
// The Promise object represents the eventual completeion (of failure ) of an asynchronous operation and its resulting value.

// let fpromise = new Promise((resolve, reject) => {
//     console.log("Hello world");
//     // resolve(1001);
//     // reject(new Error("Internal server Error ! "));
// })

// function sayHello() {
//     console.log("Hello world");
// }

// setTimeout(sayHello, 10000);

// let fPromise = new Promise ((resolve, reject) => {
//     setTimeout(function sayHello() {
//         console.log("Hello World");
//     }, 10000);
//     resolve(1);
// });

// let promise1 = new Promise((resolve, reject) => {
//     let success =  false;
//     if(success){
//         resolve("Peomise fulfilled ! ");
//     }

//     else {
//         reject("Promise failed !");
//     }
// });

// promise1.then((message) => {
//     console.log("Then msg  : "+ message);
//     return "It's done bro !";
// }).then((message) => {
//     console.log("Second msg : " + message);
// }).catch((error) => {
//     console.log("The error: " + error);
// })

// let promise10 = new Promise((resolve, reject) => {
//     setTimeout(resolve,2000,"First");
// })
// let promise20 = new Promise((resolve, reject) => {
//     setTimeout(resolve,3000,"Second");
// })
// let promise30 = new Promise((resolve, reject) => {
//     setTimeout(resolve,5000,"Third");
// })
// Promise.all([promise10, promise20, promise30])
// .then((values) => {
//     console.log(values);
// })







// Day 16 of JS - async await & fetch API

// async function getData() {
//     setTimeout(function() {
//         console.log("I am Inisde set Timeout block ! ")
//     }, 3000);
// }

// getData();

// Fetch API - Provides an interface for fetching resources.
// async function getData() {
//     // get request - async
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/20');
//     let ans = await response.json();
//     console.log(ans);
// }
// getData();
// scenario:
// prepare url / api endpoint -> sync
// await // fetch data -> network call -> async
// process data -> sync

// const myHeader = new Headers();
// myHeader.append("Content-Type", "application/json");
// const url = "https://jsonplaceholder.typicode.com/posts";
// const options = {
//     method: "POST",
//     body: JSON.stringify({ username: "Jerry" }),
//     headers: myHeader,
// }
// async function getData(){
//     const url = "https://dummy.json.com/posts";
//     const response = await fetch(url);
//     let data = await response.json();
//     console.log("Get data response: ", data);
// }
// async function postData() {
//     const resp = await fetch("https://dummyjson.com/posts/add",{
//         method: 'POST',
//         headers: { 'Content-Type': "application/json" },
//         body: JSON.stringify({
//             title: 'Hello World ! ',
//             userId: 5,
//         })
//     });

//     let data = await resp.json();
//     console.log("Post data: ", data);
 
// }
// async function processData(){
//     await postData();
//     await getData();
// }
// processData();











// Day 17 of JS - Closures
// A closure is the combination of a function bundled together with refrences to its surrounding state.
// -> {function + required data or Lexical scope or surrounding state}

function init() {
    let namee = "Mozilla"; // block scope

    function displayName() {
        console.log(namee);
    }
    
    return displayName;
}
let inner = init();
inner();
// init();
// displayName();