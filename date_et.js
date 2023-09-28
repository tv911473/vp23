exports.dateOfToday = function(){
	const monthNameET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	let timeNow = new Date();
	//let dateNow = timeNow.getDate();
	//let monthNow = timeNow.getMonth();
	//let yearNow = timeNow.getFullYear();
	let dateET = timeNow.getDate() + ". " + (monthNameET[timeNow.getMonth()]) + " " + timeNow.getFullYear();
	return dateET;
}