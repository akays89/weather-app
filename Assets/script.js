

const api = {
    key: "9a8800d200eea3cb3f3e91778e91b00c",
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
    temp.innerHTML = `Temperature: ${Math.round(response.main.temp)}°`

  

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

    let description = document.querySelector("#weather-desc");
    description.innerHTML = `${response.current.weather[0].description}`

    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `Humidity: ${response.current.humidity}%`

    let windSpeed = document.querySelector("#wind-speed");
    windSpeed.innerHTML = ` Wind Speed: ${response.current.wind_speed} MPH`;

    let uvIndex = document.querySelector("#UV-index");
    uvIndex.innerHTML = `UV Index: ${response.current.uvi}`;

    }

    
  
  

