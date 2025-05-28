//Read
//Write
//Update
//Delete

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
