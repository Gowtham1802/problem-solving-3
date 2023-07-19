// let num1 = 2;
// num2 = 5;
// console.log(num1+num2);

// 2.FizzBuzz: Write a function that prints numbers from 1 to 100. For multiples of 3, print
// &quot;Fizz&quot; instead of the number. For multiples of 5, print &quot;Buzz&quot; instead of the number. For
// numbers that are multiples of both 3 and 5, print &quot;FizzBuzz.&quot;


var i;
for (i=1; i<=100; i++){

  if (i%15 == 0){
    document.write("FizzBuzz" + " ");
  }else if (i%3 == 0){
    document.write("Fizz" + " ");
  }else if (i%5 == 0){
    document.write("Buzz" + " ");
  }else {
    document.write(i + " ");
  }
}



// 3.Factorial: Write a function that calculates the factorial of a given positive integer. The
// factorial of a non-negative integer n is the product of all positive integers less than or
// equal to n.


function fact(){
  
  var i;
  var number; 
  var f;

  f = 1;
  number = document.getElementById("number").value;

  for(i = 1; i <= number; i++)  {
    f = f * i;
  }
  i = i - 1;  

     
  document.getElementById("result").innerHTML = "The factorial of the number " + i + " is: " + f ;
}



// 4.Prime Number: Write a function that determines if a given number is a prime number
// (greater than 1 and only divisible by 1 and itself).


// Function check whether a number
// is prime or not
function isPrime(n)
{
    // Corner case
    if (n <= 1)
        return false;
  
    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
  
    return true;
}
  
// Driver Code
 
    isPrime(5) ? console.log(" true") : console.log(" false");


// 5.Fibonacci Sequence: Write a function that generates the nth Fibonacci number. The
// Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the
// two preceding ones.


function Fibonacci(n)
{
    let a = 0, b = 1, c, i;
    if( n == 0)
        return a;
    for(i = 2; i <= n; i++)
    {
    c = a + b;
    a = b;
    b = c;
    }
    return b;
}
 
// Driver code
 
    let n = 11;
     
    document.write(Fibonacci(n));


// 6.Missing Number: Given an array containing n distinct numbers taken from 0, 1, 2, ...,
// n, write a function to find the missing number. The array is not sorted, and there is only
// one missing number.



function findMissing(arr,N){
  let i;
  let temp = [];
  for (i = 0; i <= N; i++) {
            temp[i] = 0;
        }
 
        for (i = 0; i < N; i++) {
            temp[arr[i] - 1] = 1;
        }
 
        let ans = 0;
        for (i = 0; i <= N; i++) {
            if (temp[i] == 0)
                ans = i + 1;
        }
        console.log(ans);
}


let arr = [ 1, 3, 7, 9, 5, 6, 2, 4 ];
        let n = arr.length;
 
        // Function call
       findMissing(arr,n);



// 7.Reverse a String: Write a function that takes a string as input and returns the string
// reversed.


function reverseString(str) {
    var newString = " ";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('Gowtham'));


// 8.Title Case: Write a function that takes a sentence as input and returns the sentence in
// title case (the first letter of each word is capitalized).


function sentenceCase(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
 
    return str.replace(/\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() +
                txt.substr(1).toLowerCase();
        });
}
 
console.log(sentenceCase('gowtham bala abi'));



// 9.Anagram Checker: Write a function that checks whether two given strings are
// anagrams of each other (contain the same characters but in a different order).


// 10.Longest Word: Write a function that takes a sentence as input and returns the
// longest word in the sentence. If there are multiple words with the same length, return
// the first one.
 

// Sir PDF Q&A : 

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

JavaScript program to convert Celsius to Fahrenheit
var cel = prompt("Enter a celsius value: ");

// conversion factor to convert Celcius to Fahrenheit
var fahrenheit = (cel * 7) + 32

console.log(`${cel} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);


// 4. Write a program that checks if a given number is even or odd. Prompt the user to enter a
// number and display whether it is even or odd.

var number = prompt("Enter a number");

if(number%2 ===0){
  console.log(number + "is even");
}else {
  console.log(number + "is odd");
}


// 5. Write a program that concatenates two strings and displays the result. Prompt the user to
// enter two strings and display the concatenated string.


