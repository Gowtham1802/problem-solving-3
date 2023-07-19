// let num1 = 2;
// num2 = 5;
// console.log(num1+num2);

// 2.FizzBuzz: Write a function that prints numbers from 1 to 100. For multiples of 3, print
// &quot;Fizz&quot; instead of the number. For multiples of 5, print &quot;Buzz&quot; instead of the number. For
// numbers that are multiples of both 3 and 5, print &quot;FizzBuzz.&quot;


// var i;
// for (i=1; i<=100; i++){

//   if (i%15 == 0){
//     document.write("FizzBuzz" + " ");
//   }else if (i%3 == 0){
//     document.write("Fizz" + " ");
//   }else if (i%5 == 0){
//     document.write("Buzz" + " ");
//   }else {
//     document.write(i + " ");
//   }
// }



// 3.Factorial: Write a function that calculates the factorial of a given positive integer. The
// factorial of a non-negative integer n is the product of all positive integers less than or
// equal to n.


// function fact(){
  
//   var i;
//   var number; 
//   var f;

//   f = 1;
//   number = document.getElementById("number").value;

//   for(i = 1; i <= number; i++)  {
//     f = f * i;
//   }
//   i = i - 1;  

     
//   document.getElementById("result").innerHTML = "The factorial of the number " + i + " is: " + f ;
// }



// 1. Write a program that calculates the sum of two numbers and displays the result.

var num1 = 7;
var num2 = 5;
var sum = num1+num2;
console.log("Sum = " + sum);

// 2. Write a program that calculates the area of a rectangle. Prompt the user to enter the length
// and width of the rectangle and display the result.

var length = prompt("Enter a whole number for the length of your rectangle.");
var width = prompt("Enter a whole number for the width of your rectangle.");
  function area(length, width) {
    return length * width;
}
  function perimeter(length, width) {
    return 2*( length + width);
}
        
document.writeln('The area of your rectangle is  ' + area(length, width)); 

document.writeln('The perimeter of your rectangle is  ' + perimeter(length, width));


// 3. Write a program that converts a temperature from Celsius to Fahrenheit. Prompt the user to
// enter the temperature in Celsius and display the equivalent temperature in Fahrenheit.

//JavaScript program to convert Celsius to Fahrenheit
var cel = prompt("Enter a celsius value: ");

// conversion factor to convert Celcius to Fahrenheit
var fahrenheit = (cel * 1.8) + 32

console.log(`${cel} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);
