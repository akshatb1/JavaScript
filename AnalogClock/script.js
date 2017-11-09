const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



function runTheClock(){
	var date = new Date();
	console.log("Present date is : " + date);

	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();



	let hrPosition = hours*360/12 + (minutes*360/60)/12;
	let minPosition = minutes*360/60 + (seconds*360/60)/60;
	let secPosition = seconds*360/60;


	HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";

	MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";

	SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}


var interval = setInterval(runTheClock, 1000)



