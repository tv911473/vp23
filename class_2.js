const firstName = "Taavi";
const lastName = "Vendt";

console.log("Programmi autor on: " + firstName + " " + lastName);

function dateOfToday(){

	const monthNameET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	//console.log(monthNameET[8]);
	let timeNow = new Date();
	//console.log(Date());
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	//let dateET = dateNow + "." + (monthNow + 1) + "." + yearNow;
	//let dateET = dateNow + ". " + (monthNameET[8]) + " " + yearNow;
	let dateET = dateNow + ". " + (monthNameET[monthNow]) + " " + yearNow;
	return dateET;
}

let dateETNow = dateOfToday();

console.log("Täna on: " + dateETNow);
console.log("Täna on tõesti: " + dateOfToday());
