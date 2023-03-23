// console.log("Hello JavaScript");
// var firstName = 'Nabendu';
// let age = 40;
// const isDeveloper = true;
// console.log(firstName);
// console.log(age);
// console.log(isDeveloper);

// function varExp(){
//     if(true){
//         var num1 = 10;
//         console.log("Inside if var " + num1);
//     }
//     console.log("Outside if var " + num1);
// }

// varExp()
// console.log("Outside function var " + num1);

// if(true){
//     let num2 = 20;
//     console.log("Inside if let " + num2);
// }
// console.log("Outside if let " + num2);

// const num3 = 34;
// num3 = 35;

//Data Types - String, Numbers, Boolean, null, undefined, Symbol.
// const name = 'Nabendu';
// const age = 40;
// const rating = 9.5;
// const isDeveloper = true;
// const x = null;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isDeveloper);
// console.log(typeof x);
// console.log(typeof z);

//String concatenation
// const name = 'Nabendu';
// const age = 40;

//old way
// console.log('My name is ' + name + ' and i am ' + age + ' year\'s old.');

//New way
// console.log(`My name is ${name} and i am ${age} year's old.`);

//String methods
// const str = 'Hello JavaScript';

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.substring(0, 7));
// console.log(str.includes('Java'));
// console.log(str.includes('Cobol'));

//Array
// const lang = ['JavaScript', 'Java', 'C++', 'Golang', 'Kotlin', 5, true];
// console.log(lang[2]);

// lang[3] = 'C';
// console.log(lang);

// lang.pop();
// lang.pop();
// console.log(lang);

// lang.push('Pascal');
// lang.unshift('Swift');
// console.log(lang);

// lang.shift();
// console.log(lang);

// console.log(Array.isArray(lang));
// console.log(Array.isArray('JavaScript'));
// console.log(lang.includes('Java'));
// console.log(lang.includes('Cobol'));

//Objects
// const person = {
//     firstName: 'Nabendu',
//     'Last Name': 'Biswas',
//     age: 40,
//     isDeveloper: true,
//     hobbies: ['coding', 'youtubing','teaching'],
//     address: {
//         hno: 95,
//         city: 'Bhopal',
//         state: 'MP'
//     }
// }

// console.log(person);
// console.log(person.firstName);
// console.log(person['Last Name']);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// console.log(Object.keys(person));
// console.log(Object.values(person));

//For loop
// for(let i=0; i<=10; i++){
//     console.log(`Loop Number - ${i}`)
// }

//While loop
// let i=0;
// while(i<=10){
//     console.log(`Loop Number - ${i}`)
//     i++;
// }

//Do-while loop
// let i=0;
// do{
//     console.log(`Loop Number - ${i}`)
//     i+=11;
// }while(i<=10)

//Arrays of object
// const lang = [
//     {id: 1, name: 'Pascal', year: 1970},
//     {id: 2, name: 'C', year: 1972},
//     {id: 3, name: 'C++', year: 1985},
//     {id: 4, name: 'Java', year: 1995},
//     {id: 5, name: 'JavaScript', year: 1996},
//     {id: 6, name: 'Kotlin', year: 2011}
// ];

//Traditional for loop
// for(let i=0; i<lang.length; i++){
//     console.log(lang[i].id)
// }

//for..of loop
// for(let item of lang){
//     console.log(item.name)
// }

//forEach loop
// lang.forEach(item => console.log(item.year))

//Conditionals


//if statement
// const x = '10';
// if(x == 10) {
//     console.log('x is 10');
// }

//if else statement
// const y = '20';
// if(y === 20){
//     console.log('y is 20');
// } else {
//     console.log('y is string 20');
// }

//if-else if-else statement
// const z = 69;
// if(z > 100) {
//     console.log('z is greater then 100');
// } else if(z > 80) {
//     console.log('z is greater then 80');
// } else if(z > 60) {
//     console.log('z is greater then 60');
// } else if(z > 40) {
//     console.log('z is greater then 40');
// } else if(z > 20) {
//     console.log('z is greater then 20');
// } else {
//     console.log('z is less then 20');
// }

//OR and AND operators
const x = 20;
const y = 30;

if(x === 20 || y === 40){
    console.log('Any one of the statement are true');
}

if(x === 20 && y === 30){
    console.log('Both of the statement are true');
}

//Ternary Operator
// const z = 10;
// let color;

// if(z > 10){
//     color = 'red'
// } else {
//     color = 'blue'
// }

// console.log(color);

// const color2 = z > 9 ? 'red' : 'blue';
// console.log(color2);

//Switch statement
const color = 'purple';

switch (color) {
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break;
    case 'purple':
    case 'brown':
        console.log('color is purple or brown')
        break;
    case 'yellow':
        console.log('color is yellow')
        break;
    default:
        console.log('No color matched')
        break;
}

//Functions

//Method #1 - Function decleration
function addNums(num1, num2) {
    console.log(num1 + num2);
}

addNums(30, 20);

//Method #2 - Function expressions
const multiNums = function(num1, num2) {
    return num1 * num2;
}

console.log(multiNums(30, 20));

//Method #3 - Arrow Function
const modNums = (num1, num2) => {
    return num1 % num2;
}

console.log(modNums(30, 20));

//Method #4 - Condensed Arrow Function
const divNums = num1 => num1 / 5;

console.log(divNums(30));




