/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

                                                /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
function isAdult(age) {
if (age >=18) {
    return "adult";
} else {
    return "minor";
 }
}

console.log('Exercise 2 Result:', isAdult(21));

function isCharAVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
  }
  
// for (let i = 0; i < vowels.length; i++)
//console.log(vowels[i]) accesses each value and displays it
//let vowelChar = vowels[i]

// if (vowelChar === char) {
//     return true

//   }  else {
//     return false
//   }


  console.log('Exercise 3 Result:', isCharAVowel("b"));

  function generateEmail(name, domain) {
    
    const email = name.toLowerCase().replace(/\s+/g, '_') + "@" + domain;
    return email;
  }
// return $[name}@S{domain}]   
  
  console.log('Exercise 4 Result:', generateEmail("John Smith", "example.com"));
  
  function greetUser(name, timeOfDay) {
    const greeting = {
      morning: 'Good morning',
      afternoon: 'Good afternoon',
      evening: 'Good evening'
    };
  
    return `${greeting[timeOfDay]}, ${name}!`;
  }
  
  console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

  function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  
  console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

  function calculateTip(billAmount, tipPercentage) {
    // Calculate the tip amount by multiplying the bill amount by the tip percentage and dividing by 100
    const tip = (billAmount * tipPercentage) / 100;
    return tip;
  }
  
  console.log('Exercise 7 Result:', calculateTip(50, 20));

  function convertTemperature(temperature, scale) {
    if (scale === 'C') {
      // Convert Celsius to Fahrenheit
      return (temperature * 9/5) + 32;
    } else if (scale === 'F') {
      // Convert Fahrenheit to Celsius
      return (temperature - 32) * 5/9;
    } else {
      // Handle invalid scale
      throw new Error('Invalid scale: ' + scale);
    }
  }
  
  console.log('Exercise 8 Result:', convertTemperature(32, "C"));

  function basicCalculator(num1, num2, operation) {
    switch (operation) {
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        if (num2 === 0) {
          throw new Error('Division by zero is not allowed.');
        }
        return num1 / num2;
      default:
        throw new Error('Invalid operation: ' + operation);
    }
  }
  
  console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

  function calculateGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
  }
  console.log('Exercise 10 Result:', calculateGrade(85));

  function createUsername(firstName, lastName) {
    let username = "";
    for (let i = 0; i < 3; i++) {
      username += firstName[i].toLowerCase();
      username += lastName[i].toLowerCase();
    }
    username += firstName.length + lastName.length;
    return username;
  }

  console.log('Exercise 11 Result:', createUsername("Sammy", "Greenburg"));

  function numArgs() {
    let count = 0;
    for (let i = 0; i < arguments.length; i++) {
      count++;
    }
    return count;
  }

  console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));
  