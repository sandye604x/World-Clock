
function updateTime() {

let currentcity = document.querySelector("#currentcity");
let citydaytime = moment().tz("Europe/Switzerland");
let currenttime = currentcity.querySelector(".time");
currenttime.innerHTML = citydaytime.format("hh:mm:ss [<span class=A>] A[</span>]");
let currentdate = currentcity.querySelector(".date");
currentdate.innerHTML = citydaytime.format("MMMM Do YYYY");

}


function updateCity(event) {
    let citychosen = event.target.value;
    let cityName = citychosen.replace("_", " ").split("/")[1];
    
    if (citychosen === "current") {
       citychosen = moment.tz.guess();
    }
    
    let cityTimezone = moment().tz(citychosen);
   
    let displaycity = document.querySelector("#displaycity");    
    
    displaycity.innerHTML = ` <div id="city">${cityName}
    <div class="date">${cityTimezone.format("MMMM Do YYYY")}</div></div>
    <div class="time">${cityTimezone.format("hh:mm:ss [<span class=A>] A[</span>]")}</div>`;
      
}
let displaycity = document.querySelector("#cityselected");
displaycity.addEventListener("change", updateCity);

 updateTime();
 setInterval(updateTime, 1000);
