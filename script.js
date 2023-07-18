let num1 = 2;
num2 = 5;
console.log(num1+num2);

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



