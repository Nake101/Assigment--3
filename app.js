// // // Chapter 6-9
// // // chapter 6
// // // Q1
// // // ----------------------------------------------------
x=x+1
x=++1
X=1++

// Q2
 x= 100-1;

// //  Q3
var x=50;
var y=x++;
Y=50;

// Q4
var y=50;
var z=--y;
var Z=50-1;
z=49;

// Q5
var newNum= --num;

// Q6
var newValue = oldValue + 1;

// // Q7

var num= 2;
var newnum= ++num
alert(" the new num is 3")

// Chapter 7
// ----------------------------

// Q1

var calculatedNum = 2 + (2 * 6);
console.log("14");

var calculatedNum = (2 + 2) * 6;
console.log(24)


var calculatedNum = (2 + 2) * (4 + 2);
console.log(24)

var calculatedNum = ((2 + 2) * 4) + 2;
console.log(18)

var cost = (2 + 2) * (4 + 10); 
var totalCost=(56)

var result = 2+((2*4)+10)
var totalresult=(20)

// Chapter 8
// Q1
var num = "2" + "2";
console.log(num);

var Message =("Hello" + "Dolly");
console.log(Message);

var num =("33" + 3);
console.log(num)

var part1 = "Pakistan";
var part2 = "Zindabad";
var concatenated = part1 + " " + part2;
alert(concatenated);

var myVariable = "This is a string with a number: " + 42;
console.log(myVariable)

var string1 = "Hello";
var string2 = "World";
var result = string1 + string2;
console.log(result)


// Chapter 9
// -------------------------------------------

// Q1
var firstName = prompt("Enter first name");
if(firstName == "amjad") {
    console.log("Amjad is a good person")
}

var cityName = prompt("Enter city name");
if(cityName === "china") {
    console.log("china is a country")
}

var yourName =prompt("Enter your name");

var defaultName = "John"; 
var userResponse = prompt("Please enter your name:", defaultName);

if (userResponse === null) {
  
  console.log("You canceled the prompt.");
} else {
  console.log("Hello, " + userResponse + "!");
}

// chap 10
// ----------------------

var city = "Karachi";
if (city === "Karachi") {
console.log("The City OF Lights")}


if (x === y) {
    console.log("theses are equal values")
}

var zipCode =prompt("Enter the code");
if (zipCode === "10010"){
    console.log("karachi")
}
else ( zipCode === "lahore") {
    console.log("please enter right name")
}

chapter 11
------------------------------------------------------

if (variable1 !== variable2) {
    // Your code here if variable1 is not equal to variable2
  }

  if (variable1 >= variable2) {
    // Your code here if variable1 is greater than or equal to variable2
  }

  var firstName =prompt("Enter your Name");
  if (firstName === "alam"){
    console.log("Right ans")
  } else{
    console.log("No Match")
  }

var a = 2, b = 1;
var a = 2- --a ;
var a = 1- --b ;
var a = 1- 0 + ++b ;
var a = 1-0 + 1 ;
var a = 1 - 0 + 1 + 1
var a = 1 - 0 + 1 + 0
var a = 1-1
var a =0


// chapter 9-11

var a=prompt();
var b=prompt();
console.log(a + b);

var a = parseInt(prompt());
var b = parseInt(prompt());
console.log(a + b);

var userFirstName = prompt("enter your first name");
var userLastName = prompt("enter your last name");
console.log("Hello mr." + userFirstName + "" + userLastName);

var city = prompt("where do you live");
if (city ==="karachi")
{
    console.log("it is biggest city of pakistan..");
}
var age = 20;
if (age === 20)
console.log("Hello")

var percentage= +prompt("Enter your percentage")
if (percentage >=80 && percentage <=100)
{alert("A+")}
else if(percentage >=70 && percentage <=80)
{alert("A")}
else if (percentage >=60 && percentage <=70)
{alert("B")}
else if(percentage >=50 && percentage <=60)
{alert("C")}
else if(percentage >=40 && percentage <=50)
{alert("D")}
else if(percentage >=33 && percentage <=400)
{alert("F")}

var Gender = prompt("enter your gender");
message="";

var age = +prompt("enter yoour age");
var weight = +prompt("enter yoour weight");
var gender = prompt("enter yoour gender");
 if(age =>30 && weight == 60 && Gender === "male")
 {alert
    ("come to try out")
}
 else {
    alert(" sorry ")
 }
--------------------------------


var city = prompt("where do you live");
if (city ==="karachi")
{
    console.log("Welcome to the city of Lights..");
}
var Gender = prompt("Enter your gender");
if (Gender ==="male")
{
    alert("Welcom sir..")
}else if (Gender ==="female")
{
    alert("Welcom madam..")
}

var Rules = prompt("follow rules");
if (Rules ==="red")
{
    alert("Must stop")
}else if (Rules ==="yellow")
{
    alert("Ready to move")
}
else if (Rules ==="green")
{
    alert("move")
}

----------------------------------------

var Fuel = prompt("fuel");
if (Fuel <= 0.25)
{
    alert("Please refill the fuel in your car")
}

--------------------------------------

a. var a = 4;
if (++a === 5){
alert("given condition for variable a is true");}

b. var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
c. var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
d. var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
e. if (true){
alert("True");
}
if (false){
alert("False");
}
User Input & Conditional Statement | JAVASCRIPT
Page 3 of 4
f. if("car" < "cat"){
alert("car is smaller than cat");
}
// ------------------------------------------------------


// 

var num1= 5;
var num = +prompt("enter a new num 1 to 10");
if (num == num1){
    console.log("correct")
}
else if (num + 1 == num1){
    console.log("closer")
}

