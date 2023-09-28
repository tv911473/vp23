exports.dayOfToday = function(){
	const dayNameET = ["pühapäev","esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
	let timeNow = new Date();
	//let dayNow = timeNow.getDay();
//esimene variant
	//let dayET = (dayNameET[timeNow.getDay()]);
	//return dayET;
//teine variant
	return (dayNameET[timeNow.getDay()]);
}