const monthNameET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

const dateOfToday = function(){
	//const monthNameET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	let timeNow = new Date();
	let dateET = timeNow.getDate() + ". " + (monthNameET[timeNow.getMonth()]) + " " + timeNow.getFullYear();
	return dateET;
}

const dayOfToday = function(){
	const dayNameET = ["pühapäev","esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
	let timeNow = new Date();
	return (dayNameET[timeNow.getDay()]);
	}

const timeOfToday = function(){
	let timeNow = new Date();
	const hours = String(timeNow.getHours()).padStart(2, '0');
	const minutes = String(timeNow.getMinutes()).padStart(2, '0');
	const seconds = String(timeNow.getSeconds()).padStart(2, '0');
	return `${hours}:${minutes}:${seconds}`;
}

const timeOfDay = function(){
	let partOfDay = "suvaline hetk";
	let hourNow = new Date().getHours();
	if(hourNow >= 6 && hourNow < 10){
		partOfDay = "hommik";
	}
	if(hourNow >= 10 && hourNow < 14){
		partOfDay = "lõuna";
	}
	if (hourNow >= 14 && hourNow < 18){
		partOfDay = "pärastlõuna";
	}
	if(hourNow >= 18){
		partOfDay = "õhtu";
	}
	return partOfDay;
}

//ekspordin koik asjad
module.exports = {dateOfToday: dateOfToday, timeOfToday: timeOfToday, timeOfDay: timeOfDay, dayOfToday: dayOfToday}