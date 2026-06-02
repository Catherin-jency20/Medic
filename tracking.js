// LOCATION

if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position){

        document.getElementById("userLocation").innerHTML =
        "📍 Latitude: " +
        position.coords.latitude.toFixed(4) +
        "<br>Longitude: " +
        position.coords.longitude.toFixed(4);

        let zones = [
            "Zone A - City Hospital",
            "Zone B - Medical Center",
            "Zone C - Emergency Care"
        ];

        let randomZone =
        zones[Math.floor(Math.random()*zones.length)];

        document.getElementById("zone").innerHTML =
        "🚑 Nearest Response Unit: " + randomZone;

    });

}


// AMBULANCE MOVEMENT

const ambulance = document.getElementById("ambulance");
const statusText = document.getElementById("statusText");
const eta = document.getElementById("eta");

let position = 10;
let minutes = 6;

const move = setInterval(() => {

    position += 40;

    ambulance.style.left = position + "px";

    minutes--;

    eta.innerHTML = minutes + " Minutes";

    if(minutes === 4){
        statusText.innerHTML = "Ambulance En Route";
        document.getElementById("step4").classList.add("active");
    }

    if(minutes === 2){
        statusText.innerHTML = "Patient Reached";
        document.getElementById("step5").classList.add("active");
    }

    if(minutes === 0){

        statusText.innerHTML = "Hospital Arrival";

        document.getElementById("step6")
        .classList.add("active");

        eta.innerHTML = "Arrived";

        clearInterval(move);
    }

},2000);