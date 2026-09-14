// console.log("THIS IS JS ! ");

// var age = 25;

// if(true){
//     console.log(age);
// }

// function solve(){

//     var age = 25;
//     console.log(age);
// }
// console.log(age);  //error!
// solve();

// var x =10;
// var x = 20;
// {
// let a =10;
// }
// console.log(a);

// let a =20;
// a = "hello";
// a = 3.3

// const a =3;
// console.log(a);

// let ageOfStudent = 25;

// console.log(ageOfStudent);

// console.log(typeof(ageOfStudent));

//day 2 of JS

/*DataType*/

// -> Primitive DataType
// |_ Non-primitivr DataType

// let  num = 23;
// console.log(num);

// let num = 23.345;
// console.log(num);

// let num = "Hello";
// console.log(num);

// let num = true;
// console.log(num);

// let num;
// console.log(num);

// let num = null;
// console.log(num);

// let num = 634674389203925418654211100000000000004578999999999;
// console.log(num);
// console.log(typeof(num));


/* OPERATORS! -> Arithmetic - Unary, Binary */ 

// let a = 5;
// let b = 9;

// console.log(a+b); //binary

// console.log(++a); //unary

// console.log(--b);

// console.log(2**3);

// a+=10;
// console.log(a);

/* Comparison  */ 

// console.log(1>5);

// let a = 5;
// let b ='5';

// console.log(a==b); //true

// console.log(a===b); //false

// let age =9;
// let eligibility = age >= 18 ? "I can VOTE !" : "I can NOT vote !";
// console.log(eligibility);

// let a = 5;
// let b = 5;

// let ans = (true && true)
// console.log(ans)

// let ans = (false || true)
// console.log(ans);

// let ans = !(false)
// console.log(ans);

// let ans = (false && 7)
// console.log(ans)

// let ans = (9 || true || 7)
// console.log(ans)

// console.log(2 | 5);

// console.log(~(0))

// console.log(5 << 2);

// console.log(20 >> 1);

/* CONDITINOAL */

// let age = 14;
// if(age >= 18) console.log("VOTE ! ");
// else console.log("NOT VOTE !");

// let a = 3;
// if(a == 60) console.log("YES !");
// else if(a == 50) console.log("YES !");
// else console.log(" NO ! ");


// let a =0;
// switch(a){

//     case 1: console.log("ONE !");
//     break
//     case 2: console.log("TWO !");
//     break
//     case 3: console.log("THREE !");
//     break
//     default: console.log("HEH !");

// }

// for(let  i = 1; i<=10; i++){
//     console.log("HELLO ");
// } 

// let i = 1;
// while(i <= 5){
//     console.log("HELLO ! ");
//     i++;
// }

// do{
//     console.log("HEYYY !!!");
//     i++;
// }while(i<=5);

// for(let i=1; i<6; i++){
//     if(i==4) break;
//     console.log(i);

// }

// for(let i =5; i>=1; i--){
//     if(i==3) continue;
//     console.log(i);
// }

/* STRINGS ! */

// let n = "ABCD Xyz";
// let latsname = 'Xyz';

// console.log(typeof(n));
// console.log(n);

// let nme = `Abcd 
// Xyz
// hehe`;
// console.log(nme);

// let naam = new String("Abcd Xyz");
// console.log(naam);

// let op1 = "Xyz ";
// let op2 = "Abc ";
// let ans = op1 + op2;
// let anss = `${op1}and ${op2}`;
// console.log(anss);

// console.log(op2.length);

// console.log(op1.toUpperCase());

// let a = "HelloWorld";
// console.log(a.substring(5,8));

// let sentence  = "Hello \"wassup\"! This is JS!";
// console.log(sentence);
// let words = sentence.split(' ');
// console.log(words);

// let sent = "This is JavaSript Lecture 4.";
// let words = sent.split(' ');
// console.log(words);

// console.log(words.join('~'));



// 1st way:
// function naam(){
//     console.log("Heyyy !")
// }

// console.log("first");
// naam();
// console.log("Okiess");
// naam();

// function conuting(n){  //parameter
//     for(let i = 1; i<=n; i++){
//         console.log(i);
//     }
// }

// conuting(5); //argument

// function avg(num1, num2){
//     let a = num1+num2/2;
//     console.log(a);
// }
// avg(4,10);

// function getsum(a,b,c){
//     let sum = a+b+c;
//     return sum;
// }
// console.log("The sum = ",getsum(1,2,3));

// function getSen(first, last){
//     let sen = first + " " + last;
//     return sen
// }
// console.log(getSen("Hello","World"));



// 2nd way:
// let solve = function(a,b){

//     return a*b;
// }
// console.log(solve(1,4));

// let square = function(num){
//     return num * num;
// }

// console.log(square(8));



//3rd way

// let getExp = (x,y) => {
//     let ans = x**y;
//     return ans;
// }
// console.log(getExp(2,3));



// console.log("Day 6 of JS ! ");

// let obj={
//     naam: "Abcfg!",
//     age: 21,
//     courseId: 101,
//     greet : function(){
//         console.log("Hello World !")
//     }
// };
// console.log(obj)
// obj.greet();

//shallow copy:

// let obj2 = obj;


// ARRAY !

// let arr=[1,2,3,5,6,7];
// // console.log(arr);
// let brr = new Array('Hello', 1, 5.6, false);
// // console.log(brr); 
// console.log(brr[2]);
// console.log(arr[5]);

// for(let i = 0; i<3;i++){
//     console.log(arr[i]);
// }


// BUILT-IN Functions :

// let array = new Array(1, 'Adjbc', 21, true);
// // console.log(array);
// array.push('Batch 1');
// // console.log(array);
// array.pop();
// // console.log(array);
// array.shift();
// // console.log(array);
// array.unshift(100);
// // console.log(array);
// // console.log(array.slice(1,3));
// array.splice(0,1,'Hello');
// // console.log(array);
// let arrr = [10,21,300,47,50];

// let ans = arrr.map((number, index)=>{
//     console.log(number+1);
//     console.log(index);
// })
// let ans = arrr.map((number)=>{
//     return number * number;
// })
// console.log(ans);

// let even = arrr.filter((num)=>{

//     return num%2 === 0;
//     // if(num % 2===0){
//     //     return false;
//     // }
//     // else return true;
// })

// console.log(even);

// let garbaage = [1,2,3,14,'h3llo','getSum', null, 0];
// let anss = garbaage.filter((val)=>{
//     if(typeof(val)=='string') return true;
//     else return false;
// })

// console.log(anss);


// let numm = [10,20,30,40,50];
// let sum =numm.reduce((acc,curr)=>{
//     return acc + curr;
// })
// console.log(sum);

// let arr = [9,14,2,33,10,1];
// arr.sort((a,b)=> b-a);
// // console.log(arr)

// console.log(arr.indexOf(33));


//  1. FOR EACH !
// let digits = [10,20,30];
// digits.forEach((value,index)=>{
//     console.log("Number: ", value, "index: ", index);
// })

// 2. FOR IN !

// for(let key in obj){
//     console.log(key," ", obj[key]);
// }

// 3. FOR OF :

// for(let val of arr){
//     console.log(val);
// }

// let naam  = "Alexander";
// for(let val of naam){
//     console.log(val)
// }

// let arrays = [1,2,3,4,5,6,7,8,9,10];
// function getSum(arrays){
//     // let len = arrays.length;
//     // let sum = 0;
//     // for(let i =0;i <len; i++){
//     //     sum+=arrays[i];
//     // }
//     let sum = 0;
//     arrays.forEach(num => {
//         sum+=num;
//     });
//     return sum;
// }

// console.log(getSum(arrays));

// let xv = new Array(10.5,'May',21,'hehh!');
// // xv.forEach((val, index)=>{
// //     console.log("Value: ", val," Index: ",index);
// // })

// xv.push('Bye!')
// xv.shift();
// xv.unshift("14");
// xv.splice(0,2,'10 May');

// for(let val of xv){
//     console.log(val)
// }




//Day 7 of JS !

// console.log("Day 7 of JS ! ");

// Hoisting - is a process, where var or function declaration is shifted to the top of thier scope.

// sayHello("HELLO !! "); //correctly printed
 
// function sayHello(text){
//     console.log(text)
// }

// console.log(age)  //undefined

// var age = 21;

// Function Call Stack !

// function sum(a,b){
//     console.log("Sum = ",a+b);
// }

// function aCalculate(a,b){
//     a=a+5;
//     console.log("A is = ",a);
//     sum(a,b);
// }
// function bCalculate(a,b){
//     b= b-2;
//     console.log("B is = ",b);
//     aCalculate(a,b);
// }

// bCalculate(10,17);

// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }

// let ans = solve(5);
// console.log(ans(10));

// function greetMe(greet, naam){
//     console.log("hello",naam);
//     greet();
// }


// function greet(){
//     console.log("HELLO ! ")
// }

// greetMe(greet, "Sllkelu");

// greet()

// const arr =[
//     function(a,b){
//         return a+b;
//     },

//     function(a,b){
//         return a-b;
//     },

//     function(a,b){
//         return a*b;
//     },

//     function(a,b){
//         return a**b;
//     }
    
// ];

// let first = arr[2]
// console.log(first(10,5));




// console.log("Day 8 of JS ! ");

// var age = 15; //global scope.. (var,let,const)

// console.log(age);

// {
//     console.log(age);
// }

// if(true){
//     console.log(age);
// }

// for(let i =0; i<2; i++){
//     console.log(age);
// }

// function sayAge(){
//     console.log("func: ",age)
// }

// sayAge();



// //function scope - (var, cont, let)

// function sayHello(){
//     var naam = "Earth "
//     console.log("HELLO ",naam);
// }
// // console.log(naam) - not defined!
// sayHello();


//Block Scope - 

// {
//     var height = 163;
// }

// console.log(height); - accessible



// {
//     let height = 159;
// }

// console.log(height);  - unaccesible (const, let)

// Temporal DEADZONE ! 

// console.log(marks)
// console.log("HELLO !"); //temporal dead zone
// console.log(2+5);

// let marks = 100; 


// console.log("Day 9 of JS ! ");

//classes : 

// class human{

//     //properties - public !

//     age = 21;
//     #wt = 80;  //private 
//     ht = 160;

//     //behaviour 

//     walking(){
//         console.log("I am Walking ! ");
//     }

//     running(){
//         console.log("I am running ! ");
//     }

//     weight(){
//         console.log("The weight is : ",this.#wt);
//     }

// }

// let obj = new human();
// console.log(obj.age);
// obj.running();
// console.log(obj.wt);
// obj.weight();

//getter and setter - 

// class person{

//     age = 13;
//     #weight = 45;
//     height = 155;

//     constructor(newAge, newHeight, newWeight){
//         this.age = newAge;
//         this.height = newHeight;
//         this.#weight = newWeight;
//     }

//     studying(){
//         console.log("I am Studying ! ");
//     }

//     get fetchWeight(){
//         return this.#weight;
//     }

//     set modifyWeight(val){
//         this.#weight = val;
//     }

// }

// let obj1 = new person(21,177,89);
// console.log(obj1.fetchWeight);


// Default Parameter -

// function sayHello(fName = "Tom",lName=fName.toLocaleUpperCase()){
//     console.log("Hello,",fName,lName);
// }

// sayHello("Tom");

// function solve(value = {age:15,wt:60}){ //object, arrays
//     console.log("Hello ",value);
// }

// solve();

// function as parameter - 

// function getAge(){
//     return 25;
// }

// function naame(name="Tom",age = getAge()){
//     console.log(name," ",age); 
// }
// naame();



// console.log("Day 10 os JS ! ");

//In-built objects 

// console.log(Math.PI);
// console.log(Math.max(10,23,45,65,78,96,123,9,85));
// console.log(Math.min(10,23,45,65,78,96,123,9,85));
// console.log(Math.round(1.7));
// console.log(Math.floor(2.9));
// console.log(Math.ceil(2.3));
// console.log(Math.abs(-10292));
// console.log(Math.random());
// console.log(Math.sqrt(10));
// console.log(Math.pow(2,10));

// let curr = new Date();
// console.log(curr);
// let newDate = new Date(1998,5,20,7);
// console.log(newDate);
// console.log(curr.getDay());
// console.log(curr.getFullYear())




// console.log("Day 9 of JS !");
// //Object Cloning !

// let obj = {
//     age:21,
//     wt:55,
//     ht:155
// };

// obj.name = "Tom";
// console.log(obj);

// ObjectCloning -> Spread operator {...}
// let src = {
//     age:22,
//     wt:62,
//     ht:166 
// };
// let src2 = {
//     fname:"Tom",
//     roll: 101
// };
// let dest = {...src};
// src.age = 12;
// console.log("SRC: ",src);
// console.log("DEST: ",dest);


// Assign operator 
// let dest = Object.assign({},src,src2);
// console.log(dest);


// iteration cloning -
// let dest = {};
// for(let key in src){
//     let newKey = key;
//     let newVal = src[key];
//     dest[newKey] = newVal;
// }
// src.age=90;
// console.log(src)
// console.log(dest)


// Garbage Collector -
// -> we have no control over GC  and -> it always keep running in bg.




// console.log("Day 10 of JS !");
// Error Handling in JS -
// Error is an event which disrupts the normal flow of execution of the code.
//types -> Compile-time and Run-time

// Compile Time -
// console.log(1;    -syntax-error!

// Run-time -
// console.log(x);      //-Refrence error..


// Handling Error !
// -> try-catch block:-
// try{
//     console.log("Inside the Try: ")
//     console.log("X");
//     console.log("Bbye Try !");
// }
// catch(e){
//     console.log("I am inside Catch block ! ");
//     // console.log("Error is : ",e);
// }
// finally{
//     console.log("The program terminated !");
// }


// Custom Error -> throw keyword

// try{
//     console.log(c);
// }
// catch(e){
//     throw new Error("Bhai Declaration kidhr hai c ki ? ");
// }

// let errorCode = 100;
// if(errorCode==100){
//     throw new Error("Bhai JSON invalid hai !!");
    
// }




// Day 11 - JS DOM manipulation - html
// window - anything which we see on our screen is window.. its functions are opening, closing and it does also operated console 
// DOM - (Documebt Object Model) - html code is coverted into JS object, togetherly known as DOM..
// BOM - (Browser Object Model) - any interaction int browseer except the html thing comes under bom.
// access - getElementByid,classname,tagname AND querySelector, querySelectorAll
// update - innnerHTML, outerHTML, text-content, innerText 
// -> 


