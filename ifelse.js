// condition based checking variables



let age = 20;
if (age > 18) {
    console.log("you can drive")
}else{
    console.log("you cannot drive")
}

//example 
let isAlive = true 

if (isAlive == true){
    console.log("I am Alive")
}else{
    console.log("I am dead")
}

const marks =82
let grade;

if (marks >= 70){
    grade = 'A+';
}else if (marks >= 50){
    grade = 'A';
}else if (marks >=40){
    grade = 'B';
}else if (marks >=30){
    grade = 'C';
}else if (marks >=20){
    grade = 'D'
}else if (marks >=10){
    grade = 'F';
}else {
    grade = "Fail";
}
console.log(grade)