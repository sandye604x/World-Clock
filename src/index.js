
function updateTime() {
//display city name, local date and time
let city = document.querySelector("#city");
city.innerHTML = "Mauritius";
let citydaytime = moment().tz("Indian/Mauritius");
let time = document.querySelector(".time");
time.innerHTML = citydaytime.format("hh:mm:ss [<span class=A>] A[</span>]");
let date = document.querySelector(".date");
date.innerHTML = citydaytime.format("MMMM Do YYYY");

}

setInterval(updateTime, 1000);