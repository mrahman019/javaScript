//Read
//Write
//Update
//Delete

//object comes with variable name and with key value pair
//left side is key 
//right side is value 

//All these in object

let person ={
    firstName: "Rahman",
    lastName: "Mohammed",
    email: "m.a.armaan09.ry@gmail.com",
    phoneNumber: "72976239",
    isAlive: "true"
}

console.log(person) 
person.aadhar= "56757575575" //add 
console.log(person)

delete person.phoneNumber //delete
console.log(person)

person.email= "mrahman08@gmail.com"//update
console.log(person)


//Arrays: collection of data and its data types 
//stores data in a index formats starts with 0

let fruits = ["Apple","Mango","Orange"]

console.log(fruits)
let cities = ["Mumbai","Hyderabad","Bangalore"]
console.log(cities)

let friends  = ["prathima","shrestha","poplu"]
console.log(friends)


console.log(friends[2])

cities[1]="nepal" //updating array elements
console.log(cities)
cities[1]="nepal"
cities[3]="Rajasthan"//add element
console.log(cities)

delete cities[1] // delete mumbai
console.log(cities)