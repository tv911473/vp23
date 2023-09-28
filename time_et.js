exports.timeOfToday = function(){
	let timeNow = new Date();
	//let hoursNow = timeNow.getHours();
	//let minNow = timeNow.getMinutes();
	//let secNow = timeNow.getSeconds();
//esimene variant
	//let timeET = timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();
	//return timeET;
//teine variant
	return timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();
}