// SWITCH STATEMENT

var day = "Friday";

switch(day) {
	case "Monday":
		console.log("BOOOOO.");
		break;
	case "Friday":
		console.log("PARTAYYYY!");
		break;
	default:
		console.log("it's not monday.");
}

if(day === "Monday"){
	console.log("BOOOOO.");
} else if (day === "Friday"){
	console.log("PARTAYYYY!");
} else {
	console.log("it's not monday.");
}

// ARRAY

var fruit = ["cherries", "apples", "bananas"];
var fruitString = fruit.join(" cats ");
console.log("fruit string", fruitString);


// STRING METHOD OF ARRAY

var catColors = 'green,red,yellow,black';
var catColorsArray = catColors.split(",");
console.log("catColorsArray", catColorsArray);


var reverseFruit = fruit.reverse();
console.log("reverseFruit", reverseFruit);

var alphaFruit = fruit.sort();
console.log("fruits in alphabetical order", alphaFruit);

var nums = [9,6,8,2,4,11,66];
var numSort = nums.sort(
	function(a,b){
		return a-b;
	}
);
console.log("sorting numbers in order", numSort);

var animals = ["cats", "turtles", "fish", "bears", "tigers"];
console.log("fish index", animals.indexOf("fish"));

var animals2 = animals.slice(2,4);
console.log("animals2", animals2);

animals.splice(1,1);
console.log("no turtles", animals);


var colors = ["red", "blue", "gold", "pink", "orange"];

// SORT, REVERSE, AND MAKE A STRING

var finalAnswer = colors.sort().reverse().join(" cat ");
console.log("finalAnswer", finalAnswer);




































