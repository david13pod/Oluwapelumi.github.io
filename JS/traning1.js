// Only change code below this line
var a=5;
var b=10;
var c="I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";


//Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    var answer = “”;
    // Only change code below this line
    switch (val) {
    case “1”:
    case “2”:
    case “3”:
    answer = “Low”;
    break;
    case “4”:
    case “5”:
    case “6”:
    answer = “Mid”;
    break;
    case “7”:
    case “8”:
    case “9”:
    answer = “High”;
    }
    
    // Only change code above this line
    return answer;
    }
    
    // Change this value to test
    sequentialSizes(2);


//Replacing If Else Chains with Switch
**if** (val === "bob") {
    answer = "Marley";
  } **else if** (val === 42) {
    answer = "The Answer";
  } **else if** (val === 1) {
    answer = "There is no #1";
  } **else if** (val === 99) {
    answer = "Missed me by this much!";
  } **else if** (val === 7) {
    answer = "Ate Nine";
  }

function chainToSwitch(val) {
    var answer = “”;
    // Only change code below this line
    switch (val) {
    case “bob”:
    answer = “Marley”;
    break;
    case 42:
    answer = “The Answer”;
    break;
    case 1:
    answer = “There is no #1”;
    break;
    case 99:
    answer = “Missed me by this much!”;
    break;
    case “John”:
    answer = “”;
    break;
    case 156:
    answer = “”;
    break;
    default:
    answer = “Ate Nine”;
    }

    // Golf Code
    function golfScore(par, strokes) {
        // Only change code below this line
        var response = “”;
        switch(strokes){
        case (1):
        response = “Hole-in-one!”;
        break;
        case (strokes <= par -2):
        response = “Eagle”;
        break;
        case (strokes === par -1):
        response = “Birdie”;
        break;
        case (strokes === par):
        response = “Par”;
        break;
        case (strokes === par +1):
        response = “Bogey”;
        break;
        case (strokes === par +2):
        response = “Double Bogey”;
        break;
        case (strokes >= par +3):
        response = “Go Home!”;
        }
        
        return response;
        // Only change code above this line
        }




    //blackjack card count

    var count = 0;

function cc(card) {
  // Only change code below this line
switch (card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count ++;
    break;
  case 7:
  case 8:
  case 9:
    count += 0;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count --;
    break;
}
if (count <= 0){
  return count +" Hold";
}
else if (count > 0) {
  return count + " Bet";
}
else {
  return "Change Me";
  // Only change code above this line
}
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


// Objects as in dictionaries in python
var myDog = {
    // Only change code below this line
    name: "jack", legs:4, tails:1, "friends":["humans", "monkey"]
    
    // Only change code above this line
    };

//Using Objects for Lookups

// Setup
function phoneticLookup(val) {
    var result = "";
  
    // Only change code below this line
    var lookup={
      alpha:"Adams", bravo:"Boston",charlie:"Chicago",delta:"Denver",echo:"Easy",foxtrot:"Frank"
    };
  
  result=lookup[val];
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");
  

  //Testing Objects for Properties
  function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty( checkProp )) {
    return obj[checkProp];
    }
    else{
      return "Not Found";
    }
    // Only change code above this line
  }



  //Record Collection
  // Setup
// Setup
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(object, id, prop, value) {
     if ( value ==='' ){
      delete object[id][prop];
      return object;
    } 
    else if (prop !== "tracks" && value !==''){
      object[id][prop]=value;
      return object;
    }
    else if (prop === "tracks"){
      object[id][prop]=object[id][prop] || []
      object[id][prop].push(value);
      return object;
    }
  }
  
  updateRecords(collection, 5439, 'artist', 'ABBA');

  //// for loop odd nos
  var myArray = [];
for (var i=1; i<10; i+=2){
    myArray.push(i);
}

// do.... while loop

var myArray = [];
var i = 10;

// Only change code below this line
do{
  myArray.push(i);
  i++;
}
while (i < 10) {
  
}

///recursion
function sum(arr, n) {
    // Only change code below this line
        if (n <= 0) {
          return 0;
      } else {
          return sum(arr, n - 1) + arr[n - 1];
      }
    // Only change code above this line
  }





//profile lookup
// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
var i=0;
while ( name !== contacts[i]["firstName"] || i<contacts.length){
//for (var i=0; i<contacts.length; i++){
    if (name === contacts[i]["firstName"] ){
        if (contacts[i].hasOwnProperty(prop))
        return contacts[i][prop];
        else{
            return "No such property";
        }
    }
i++;
if (i>=contacts.length){
    return "No such contact";
}
}

// Only change code above this line
}

lookUpProfile("Akira", "likes");



//recursive
// Only change code below this line
function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
  }
  // Only change code above this line

  function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) {
        return [endNum];
      } else {
        const countArray = rangeOfNumbers(startNum, endNum-1);
        countArray.push(endNum);
        return countArray;
  }
  }