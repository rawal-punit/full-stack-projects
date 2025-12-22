// 01 find number of digit a number
// 


// let num = Number(prompt("enter number"));
// let count = 0;
// while (num > 0){
//     let digit = num % 10;
//     count++;
//     num=(num-digit)/10
// }
// console.log("number of digit is "+count);







// 02 find sum of first and last digit of a number
// 


// let number = Number(prompt("enter number"));
// let lastdigit = number % 10;
// while (number >= 10){
//     let digit = number % 10;
//     number=(number-digit)/10
// }
// let sum = lastdigit + number;
// console.log("sum of first and last digit is "+sum);






//03  find of first and last digit of a number
// 


// let number = Number(prompt("enter number"));
// let lastdigit = number % 10;
// while (number >= 10){
//     let digit = number % 10;
//     number=(number-digit)/10
// }
// console.log("first digit is "+number);
// console.log("last digit is "+lastdigit);





//04 find reverse of a number
//


// let num = Number(prompt("enter number"));
// let reverse = 0;    
// while (num > 0){
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num=(num-digit)/10
// }
// console.log("reverse of number is "+reverse);





//05 factorial of a number
//



// let num = Number(prompt("enter number"));
// let factorial = 1;
// for (let i = 1; i <= num; i++){
//     factorial = factorial * i;
// }
// console.log("factorial of number is "+factorial);



// 06 fibonacci series
//
 
// let n = Number(prompt("enter number of terms"));
// let a = 0;
// let b = 1;
// for (let i = 1; i <= n; i++){
//     console.log(a);
//     let c = a + b;
//     a = b;
//     b = c;
// }


// 07 check prime number
// 

// let num = Number(prompt("enter number"));
// flag = true;
// if(num==0 || num==1){
// }
// for(let i=2; i<=num/2; i++){
//     while(num%i==0){
//         flag = false;
//         break;
//     }
//     if(flag){
//         console.log("a prime number");
//     }
//     else{
//         console.log("not a prime number");
//     }
// }



// 08 prime fact
// 

// let num = Number(prompt("enter number"));
// for(let i=2; i<=num; i++){
//     while(num%i==0){
//         console.log(i);
//         num = num / i;
//     }
// }

// 09 armstrong number
// 

// let num = Number(prompt("enter number"));
// let sum = 0;
// let temp = num;
// while (temp != 0){
//     let digit = temp % 10;
//     sum = sum + (digit * digit * digit);
//     temp = (temp - digit) / 10;
// }
// if (sum == num){
//     console.log("armstrong number");
// }
// else{
//     console.log("not armstrong number");
// }