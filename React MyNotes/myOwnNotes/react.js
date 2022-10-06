// const age = 15;
// let result;
// if (age >= 18) {
// result = "You are legal.";
// } else {
// result = "You are not legal yet.";
// }
// console.log(result);

//! ternary


// const age = 15;
// let result = (age >= 18) ? "you are legal." : "you are not legal yet";
// console.log(result);
//


//! Functions Declaration

// function sayHi(userName) {
// console.log(`Hello! ${userName}`);
// }
// sayHi('Mark');
//

//! arrow function

// const sayHi = (userName) => {
// console.log(`Hello! ${userName}`);
// }
//
// sayHi('Mark');

//! map()

// let users = [
    // { firstName: "Suan", lastName: "Steward", age: 14 },
    // { firstName: "Daniel", lastName: "Longbottom", age: 16 },
    // { firstName: "Bruno", lastName: "Black", age: 56 },
    // { firstName: "Jacob", lastName: "Joyo", age: 15 },
    // { firstName: "Sam", lastName: "Drogo", age: 64 },
// ];

// let usersFullName = users.map((users) => {
// let fullName = users.firstName + ' ' + users.lastName;
// return fullName
// });
//
// console.log(usersFullName)
//
// Output
// ['Susan Steward',
// 'Daniel Longbottom',
// 'Bruno Black',
// 'Jacob Joyo',
// 'Sam Drogo']


//! Filter()
// const youngPeople = users.filter((person) => {
// return person.age <= 15;
// });
// console.log(youngPeople);
// Output
// [{ firstName: 'Susan', lastName: 'Steward', age: 14 },
// { firstName: 'Jacob', lastName: 'Joyo', age: 15 }]


//! find ()
// aranan dizi boyunca döner arananı bulunda aramayı sonlandırır
// const Bruno = users.find((person) => person.firstName === "Bruno");
// console.log(Bruno);
// Output
// { firstName: 'Bruno', lastName: 'Black', age: 56 }

//! Objects

// const itSchool = {
    // name: 'Clarusway',
    // location: 'U.S.',
    // established: '2019',
// };
//
// dot notation
// console.log(itSchool.name); // Expected Output : 'Clarusway'
// bracket notation
// console.log(itSchool["location"]); // Expected Output : "U.S."
//

//! Object Destructuring

// const note = {
    // id: 1,
    // title: 'My first note',
    // date: '01/01/1970',
    // author: {
        // firstName: 'John',
        // lastName: 'Doe',
        // email: 'johndoe@example.com',
    // },
// };
// traditional way
// const id = note.id;
// const title = note.title;
// const firstName = note.author.firstName;
// destructuring
// const { id, title, date, author: { firstName, lastName, email } } = note;
// console.log(`${firstName} ${lastName}`, id, title, date, email);

// Spread Operator
// copy array using spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, 11, ...arr2, 7, 8, 9];
// console.log(arr3); // expected output: [1, 2, 3, 11, 4, 5, 6, 7, 8, 9]
//

//! Object Example

// const person = {
    // name: 'John',
    // age: 30,
// };
//
// const newPerson = {
    // ...person, // spread operator
    // city: 'New York',
// };
//
// console.log(newPerson);
// newPerson will be { name: 'John', age: 30, city: 'New York' }

//! Asynchronous Programming
//!🏄‍♂️➤ Fetch API
// const fetchData = fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
    // .then(json => console.log(json))
    // .catch((err) => console.log(err));
// fetchData();
//! 🏋️‍♂️ ➤ Async / Await
// const fetchData = async () => {
    // let response = await fetch('https://jsonplaceholder.typicode.com/users');
    // let data = await response.json();
    // console.log(data)
// }
// fetchData();
// 