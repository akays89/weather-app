

const api = {
    key: "dbc0e909c76459d6d2b6a5328a9579d5",
    BASE_URL: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector("#city-search");
const button = document.querySelector("#search-button");

button.addEventListener("click", getWeatherInfo);

function getWeatherInfo(event){
    event.preventDefault();
    if(event){
        getCityData(search.value);
        console.log(search.value);
    }
}

function getCityData(){
    fetch(`${api.BASE_URL}weather?q=${search.value}&units=imperial&appid=${api.key}`)
    .then(function(response){
        return response.json();
    })
    .then(getCityLocation);

}
function getCityLocation(response){
    console.log(response);

    if (response.cod === "404"){
        document.querySelector(".error").innerHTML = "Please enter a valid city name";
        search.value = "";
    }  

    let location = document.querySelector("#city-name");
    location.innerHTML = `${response.name}, ${response.sys.country}`;

    let temp = document.querySelector("#temperature");
    temp.innerHTML = `${Math.round(response.main.temp)}°`

  

 let longitude = response.coord.lon;
 let latitude = response.coord.lat;

 fetch(`${api.BASE_URL}onecall?lat=${latitude}&lon=${longitude}&appid=${api.key}`)
 .then(function(response){
     return response.json();
 })
 .then(displayData)
}

 function displayData(response){
    console.log(response);

    
    let timeStamp = response.current.dt;
    let dateNTime = new Date(timeStamp * 1000);
    document.querySelector("#time").innerHTML = (dateNTime.toUTCString());

    let weatherIcon = document.querySelector("#current-picture");
    let weatherIconURL = "http://openweathermap.org/img/w/";
    let weatherIconArr = response.current.weather[0].icon;
    weatherIcon.src = weatherIconURL + weatherIconArr + ".png";

 }

