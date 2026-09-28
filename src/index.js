
//function updateTime(daytime) {


//let time = document.querySelector(".time");
//setInterval(1000);

//time.innerHTML = citydaytime.format("hh:mm:ss [<span class=A>] A[</span>]");
//let date = document.querySelector(".date");
//date.innerHTML = citydaytime.format("MMMM Do YYYY");

//}



function updateCity(event) {
    let citychosen = event.target.value;
   
    if (citychosen === "current") {
       citychosen = moment.tz.guess();
    }
    let cityTimezone = moment().tz(citychosen);

    let cityName = citychosen.replace("_", " ").split("/")[1];
    
    let displaycity = document.querySelector("#displaycity");    
    displaycity.innerHTML += ` <div id="city">${cityName}
    <div class="date">${cityTimezone.format("MMMM Do YYYY")}</div></div>
    <div class="time">${cityTimezone.format("hh:mm:ss [<span class=A>] A[</span>]")}</div>`;
    
    //updateTime(setInterval, 1000);
    
}
let displaycity = document.querySelector("#cityselected");
displaycity.addEventListener("change", updateCity);
