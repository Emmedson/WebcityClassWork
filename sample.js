// const buttonA = document.querySelector("#button_A");
// const headingA = document.querySelector("#heading_A");

// function calc2 () {
//   let numbx = Number(document.getElementById("num4").value);
//   let numby = Number (document.getElementById("num5").value);
//   let operator = document.getElementById("operator").value;
//   // document.getElementById("result25").value = a + b;  

//   switch (operator) {
//     case 'add':
//       document.getElementById("result").value = numbx + numby;
//       break;  
//     case 'sub':
//       document.getElementById("result").value = numbx - numby;
//       break;
//     case 'mul':
//       document.getElementById("result").value = numbx * numby;
//       break;
// }
// }

// calc2();

//  let name = 'Laptop';  // variable

//  function greet (name) { // function
//     console.log('Hello ' + name);
// }


// let product = { // object
//   name: "laptop", // property
//   brand: "HP",
//   price: 1000,
//   discount: 10,
//   description: "This is a laptop",

//   greet: function (name) { // method
//     console.log('Hello ' + name);
//   }

// }

// console.log(product.brand);

// let cal34 = {
//   add: function (a, b) {
//     return a + b;
//   },

//   sub: function (a, b) {
//     return a - b; 
//   }
// }

// (cal34.add(4, 5));


// const tommy = document.querySelector("#tommy");
// // let num1 = prompt("Add the first number:");
// // let num2 = prompt("Add second number:");
// // let number1 = Number(num1);
// // let number2 = Number(num2);
// // let number = number1 + number2;
// // tommy.textContent = "This is a test";

// function addvalues() {
//   let a = Number(prompt("Add the first number:"));
//   let b = Number(prompt("Add the second number:"));
//   return a + b  + "good";
// }

// // tommy.textContent = addvalues();



// buttonA.onclick = () => {
//   let nmbx = prompt("Your name please?", "Emmanuel");
//   alert("Hello" + nmbx )
//   // tommy.textContent = `You're Welcome ${nmbx}`;
//   tommy.innerHTML = "You're Welcome" + "<br>" + "Your name is " + nmbx;

// };


// buttonA.onclick = () => {
//   const name = prompt("What is your name?");
//   alert(`Hello ${name}, nice to see you!`);
//   headingA.textContent = `Welcome ${name}`;
// };

// buttonA.onclick = () => {
//   const name = prompt("What is your name too?");
//   alert(`Hello ${name}, nice to see you!`);
//   headingA.textContent = `Welcome ${name}`;
// }

// let calculator = {

//   addition: function () {
//     let input = document.querySelector("#name").value;
//     let result = document.querySelector("#result").value;
//     result = input;

    
//   }

 
// }

// calculator.addition();


// function cal () {
//   let input1 = document.getElementById("numb1").value;
//   let input2 = document.getElementById("numb2").value;
//   let operation = document.getElementById("operator").value; 
 
//   if (operation == "add") {
//     document.getElementById("result").value = Number(input1) + Number(input2);
//   }
  
// }

// function add2 () {
//   let a = Number(document.getElementById("num4").value);
//   let b = Number (document.getElementById("num5").value);
//   document.getElementById("result25").value = a + b;  
// }


// For Loop

// for (declaration; condition; increment/decrement)
// for (let i = 0; i <= 10; i++) 
//   if (i % 2 !== 0) console.log(i);




// // While Loop

// let i = 10;

// while (i < 4) {
//   console.log(i);
//   i++;
// }



// // Do While Loop
// let x = 0;
// do {
//   console.log(i);
//   x++;
// } while (x < 4);

// For Each Loop
// let products = [1, 2, 3, 4, 5];

// products.forEach((product) => {
//   console.log(product * 2);
// } );

// // For In Loop - Used for objects
// let students = {
//   name1: "Emmanuel",
//   name2: "Emeka",
//   name3: "Abigial",
//   name4: "Chris",
// };


// for (let student in students) {
//   console.log(students[student]);
// }

// // For Of Loop - Used for arrays
// let colours = ["red", "green", "blue"];

// for (let colour of colours) {
//   console.log(colour);
// }

// // Break and Continue
// let y = 0;
// while (y <= 10) {
//   if (y === 5) {
//     break;
//   }
//   console.log(y);
//   y++;
// }

// let a = 0;
// while (a < 10){
//   if (a % 2 === 0){
//     a++
//     continue;
//   }
//   console.log(a);
//   a++;
// }

// Return max number

// function max3 (a, b,){
//   //code 
//   if (a > b){
//     console.log(a);
//   }else{
//     console.log(b);
//   }
// }

// console.log(max3(300, 40));

max(55, 80)

let max = {
  
return: function() {
  return (a > b) ? a : b;
}
}
// max(14, 70,);

// FizzBuzz Algorithem
  // Divisible by 3 = Fizz
  // Divisible by 5 = Buzz
  // Divisible by 3 and 5 = FizzBuzz
  // Not Divisible by 3 and 5 = Number
  // Not a Number = "Not a number"

  // function FizzBuzz (numb){
  //   if (typeof numb !== 'number')
  //     return ("not a number")

  //     if (numb % 3 === 0 && numb % 5 === 0){
  //       return ("FizzBuzz")
  //     }

  //     if (numb % 3 === 0){
  //       return ("Fizz")
  //     }
  //     if (numb % 5 === 0){
  //       return ("Buzz")
  //     }
  //   return (numb) 
  // }

  // console.log(FizzBuzz('emeka'));


  // Object Oriented Programming

  let circle = { // Object Literal
   radius: 3, // Property

   location:  { //Nested Object
    xlocation: 20,
    ylocation:5,
    move: function(){ //Netsed Method
      console.log('move')
    }
   },

   draw: function(){ // Method
    console.log('Draw');
   }
   
  };
  circle.location.move();
  circle.draw();

let circle5 = { // Object Literal
    radius: 1,
    location:{
      x: 1,
      y: 2,
      z:4,
      },
    draw: function(){
      console.log('Helow', a)
    }
  };

function Factoryfunction (radius){
  circle5 = { // Object Literal in a factory function
    radius: radius,
    location:{
      x: 1,
      y: 2,
      z:4,
      },
    draw(){ // Method inside a factory function
      console.log('Helow', a)
    }
  };
}



//   // Factory Functions
//   function createCircle (radius){
//     circle = { // Object Literal
//       radius: radius,
//       location:{
//         x: 1,
//         y: 2,
//         z:4,
//         },
//       draw(){
//         console.log('Helow')
//       }
//     };
//   }

//   let circle1 = createcircle(1)
//   let circle2 = createcircle(2)
//   let circle3 = createcircle(3)

//   // Constructor Function
//   function CreateCircle (radius){

//     this.radius = radius,
//     this.draw = function(){
//       console.log('draw')
//     }

//   }

//   const circle4 = new circular(2);

//   let circle11 = new circular(3);

  // let circle1 = createcircle(1)
  // let circle2 = createcircle(2)
  // let circle3 = createcircle(3)\

  let apptime = Date();
  let newdate = new Date(apptime);
  console.log(newdate.getFullYear());
  console.log(newdate.getMonth(1-11))

  // console.log(new Date(Date.now()));

  // console.log(Date.now())

  console.log(Math.min(3,4,6,1,2,345,6));

  let String = 'This is Emmanuel';
  console.log(String.toUpperCase());