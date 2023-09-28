const firstName = "Taavi";
const lastName = "Vendt";
const dateValue = require("./date_et");
const timeValue = require("./time_et");
const dayValue = require("./day_et");
console.log("Programmi autor on: " + firstName + " " + lastName);

//let dateETNow = dateValue.dateOfToday();
//let timeETNow = timeValue.timeOfToday();
//let dayETNow = dayValue.dayOfToday();

//console.log("Täna on: " + dateETNow);

console.log("Täna on: " + dayValue.dayOfToday() + ", " + dateValue.dateOfToday() + ", kell " + timeValue.timeOfToday())