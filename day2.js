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