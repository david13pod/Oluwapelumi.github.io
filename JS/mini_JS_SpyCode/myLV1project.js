var fname = prompt("Enter your first name please ");
var lname = prompt("Enter your last name please ");
var age = prompt("Enter your age please ");
var height = prompt("What is your height in cm ");
var pname = prompt("Enter your pet's name please ");

if (fname[0]==lname[0] && (age > 20 || age < 30) && height >= 170 && pname.slice(-1)[0] =="y" ) {
    console.log("Welcome agent "+fname+ ". We will give you a secured connection shortly. \n Loading...")    
} else {
    console.log("Sorry we do not have anything for you at the moment")
}