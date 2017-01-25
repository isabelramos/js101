// Take the contents of the sonnet div and place it in a variable
var element = document.getElementById("sonnet");
var sonnet = element.innerHTML;


// Find and output the starting position of the word "orphans"
var indexOfOrphans = sonnet.indexOf("orphans");
console.log("indexOfOrphans", indexOfOrphans);


// Output the number of characters in the sonnet
console.log("sonnet char length", sonnet.length);


// Replace the first occurance of the string "winter" with "yuletide"
var newSonnet = sonnet.replace("winter", "yuletide");


// Replace all occurances of the string "the" with "a large"
var globalReplace = newSonnet.replace(/the /g, "a large ");


// Set the content of the sonnet div with the new string
element.innerHTML = globalReplace;