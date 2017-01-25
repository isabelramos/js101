// 1. How many hours are in a year
// 2. How many minutes are in a decade
// 3. How many seconds old they are
// 4. If they are older than some arbitrary number, console "I'm old", else "I'm young"

var hoursInADay = 24;
var daysInAYear = 365;
var hoursInAYear = (hoursInADay * daysInAYear);
console.log("hours in a year: ", hoursInAYear);

var minutesInAYear = 525600;
var minutesInADecade = (minutesInAYear * 10);
console.log("minutes in a decade ", minutesInADecade);

var personAgeInYears = 25;
var secondsPerMinute = 60;
var minutesPerHour = 60;
var yearsPerDecade = 10;
var secondsOld = personAgeInYears * daysInAYear * hoursInADay * minutesPerHour * secondsPerMinute;
console.log("how many seconds old: ", secondsOld);

if (personAgeInYears > 80){
	console.log("I'M OLD.");
} else {
	console.log("woo, i'm young! :]");
}