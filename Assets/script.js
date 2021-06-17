

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

    var location = document.querySelector("#city-name");
    location.innerHTML = `${response.name}, ${response.sys.country}`;

    var temp = document.querySelector("#temperature");
    temp.innerHTML = `${Math.round(response.main.temp)}°`

  }



    



