/* 
rest and spread operator

rest(....)
spread(....)

rest


*/

//function mutiples number passed in the parameter
//...args mean u can take as many arguments as possible
//takes the args and convert them into a array
function multiply(...args){ //rest operator
    //body
    //console.log(args);
    let product = 1;
    //this 2 for loop are the same
    for(let i in args)
    {
        product = product * args[i];
    }
    /*for(index =0; index < args.length; index++)
    {
        console.log(args[index]);
    }*/
    console.log(product);
}
/*
function multiply(patmater,otherParmeter,...args){ //rest operator but the first 2 paramter aren't part of the args array
    //body
    //console.log(args);
    let product = 1;
    //this 2 for loop are the same
    for(let i in args)
    {
        product = product * args[i];
    }
    
    console.log(product);
} */

multiply(2,4);
multiply(1,2,3,4,5);


/* Spread operator 
opposite of rest
turns the array into indvisual variable for each parameter
*/

function sum(x,y,z){
    return x + y + z;
}

const numbers = [1,2,3];
console.log(sum(...numbers)); //spread operator

/*
myFuctions(...iterableObject)

*/

let t = document.getElementById("myDog");
console.log(t)//return the text with the id myDog

let v = document.getElementById("my");
console.log(v)//return null

let t1 = document.getElementsByClassName("dog");
//console.log(t1); //isnt a array but still an object

let t2 = document.getElementsByTagName("div");
console.log(t2);

/*we can be able to use querySelector, querySelectorAll

Searching using css selectors
1.class seletor
2. id selector
3. element selector

*/

//The querySelector will return only the first element that matches the CSS selector
let t3 = document.querySelector(".dog"); //return only 1 element that matches the septify CSS selector
console.log(t3);

 //this return all elements that matches the septify CSS selector(s)
let t4 = document.querySelectorAll(".dog");
console.log(t4); //print all the class dog node
//console.log(t4[0]); //prints the 1st with class dog node
//console.log(Array.isArray(t4)); isnt a array


/* array.from(object) returns an array object from the given object*/
let arrayT4 = Array.from(t4);
//console.log(Array.isArray(arrayT4)); //return true

let arrayT4B = [...t4];
console.log(arrayT4B);

//post the 1st child node of mainbody
let x = document.getElementById("mainbody").firstChild;
console.log(x);

//post the next sibiling node of mainbody
x = document.getElementById("mainbody").nextElementSibling; 
console.log(x);

//add css using JS
let x1 = document.getElementById("mainbody"); 
x1.style.backgroundColor= "yellow";

//creating a p to the "mainbody" id
let newParagraph = document.createElement("p");
newParagraph.innerHTML = "this is our new paragraph";
document.getElementById("mainbody").appendChild(newParagraph);

//if you wanna add p to body
let newParagraphB = document.createElement("p");
newParagraphB.innerHTML = "this is our new paragraph in body";
document.body.appendChild(newParagraphB);

/*
JS EVENTS

syntax for addEventListener
document.addEventListener(event,function, useCapture);

event: This specifies the name of the event

function: this specifies the function that should run when the event happens
The 1st and 2nd parameter are required


useCapture: boolean value that specifies that whether that the event should be excuted in the capturing
and bubbing phase. 
*/
//if you click on elements with mydog u get an event
document.getElementById("myDog").addEventListener("click", test);

function test(){
    alert("today");
}

document.getElementById("myFriend").addEventListener("click", test1);

function test1(name1){
    alert("today" + name1);
}
    