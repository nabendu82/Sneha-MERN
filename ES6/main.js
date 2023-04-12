//const
// const firstAge = 6;
// firstAge = 8;

// const childAges = [5, 6, 8, 10];
// childAges = [5, 6, 8, 10, 12];
// childAges.push(12);
// console.log(childAges);

// const personObj = {name: 'Nabendu', skill: 'JS'};
// personObj.skill = 'React';
// personObj.profession = 'Developer';
// console.log(personObj);

//Default Parameters
// const isEqual = (num1, num2=20) => {
//     console.log(num1);
//     console.log(num2);
//     return num1 === num2;
// }

// console.log(isEqual(10));
// console.log(isEqual(10, 10));

//Object Literals Extensions
// let name = 'Nabendu';
// let age = 40;

// let obj = {
//     name,
//     age
// }

// console.log(obj);

//Dynamic Fields
// let ageField = 'age';

// let es6Obj = {
//     name: 'Shikha',
//     [ageField]: 40
// }

// console.log(es6Obj);

//Rest Operators
// let arrFunc = (...arr) => {
//     console.log(arr)
// }

// arrFunc(23, 12, 45, 54, 32, 89, 72);

// let restFunc = (a, b, ...n) => {
//     console.log(a, b);
//     console.log(n)
// }

// restFunc(12, 45, 54, 32, 89)

//Spread Operator
// let a = [23, 12, 45, 54, 32, 89, 72];
// console.log(Math.min(23, 12, 45, 54, 32, 89, 72));
// console.log(Math.min(...a));
// console.log(Math.max(...a));

//Copying Problem - Copy of Reference
// let x = [54, 32, 89, 72];
// let y = x;
// y.push(12);
// console.log(x);
// console.log(y);

//Solution with Spread
// let c = [23, 12, 45, 54];
// let d = [...c];
// d.push(13);
// console.log(c);
// console.log(d);

//Merging with spread
// let x1 = [1, 2], a1 = [3, 4], c1 = [9, 10];
// let d1 = [...x1, ...a1, ...c1];
// console.log(d1);

//Used in Objects
// let obj1 = { foo: 'bar', x: 42 }, obj2 = { foo: 'baz', y: 13 };
// let clonedObj = {...obj1}
// console.log(clonedObj)

// let mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj)

//Array Destructuring

// const rgb = [255, 200, 0];
// const r = rgb[0];
// const g = rgb[1];
// const b = rgb[2];

// const [r, g, b] = rgb;
// console.log(r, g, b);

//Using Spread operator
// const even = [2, 4, 6, 8, 10];
// const [first, second, ...arr] = even;
// console.log(first)
// console.log(second)
// console.log(arr)

//Skipping items
// const hex = ['#fff', '#000', '#678'];
// const [white, black,] = hex;
// console.log(white)
// console.log(black)

//Object destructuring
// const developer = {
//     firstname: 'Nabendu',
//     lastname: 'Biswas',
//     country: 'India'
//   };

// const firstname = developer.firstname;
// const lastname = developer.lastname;
// const country = developer.country;

// const { firstname, lastname, country } = developer;

// console.log(firstname, lastname, country);

//Skipping items
// const student = {
//     name: 'Hriday',
//     lname: 'Biswas',
//     coun: 'India'
//    };

// const { name, coun } = student;
// console.log(name, coun)

//ES6 classes
class CreateRoom {
    constructor(name){
        this.room = `${name}'s room`;
    }

    cleanRoom(soap){
        console.log(`Cleaning ${this.room} with ${soap}`)
    }
}

const nabsRoom = new CreateRoom('Nabendu');
const shikhaRoom = new CreateRoom('Shikha');

nabsRoom.cleanRoom('Domex');
shikhaRoom.cleanRoom('Lizol');