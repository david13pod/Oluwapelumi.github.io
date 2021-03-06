// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array

function addnew() {
    var name = prompt("Enter the new student's name: ")
    roster.push(name)
}


// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//
function remove() {
    var name = prompt("Enter the student you want to remove: ")
    const index = roster.indexOf(name);
    roster.splice(index,1)
}




// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display() {
    console.log(roster)
}

// Start by asking if they want to use the web app
var ask = prompt("Do you want to use this app? Enter y or n")
// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
while (ask=="y") {
    var use = prompt("What do you want to do? add,remove,display or quit. Type one of these operations ")
    if (use=="add") {
        addnew()
    } else if (use == "remove") {
        remove()
    } else if (use == "display") {
        display()
    }else if (use =="quit") {
        ask="n"
    } else {
        alert("Wrong input, please retry...")
    } 
    }