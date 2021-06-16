initPage();  function pageInit () {

    const inputEl = document.getElementById("city-search");
    const searchBtnEl = document.getElementById("search-button");
    const historyEl = document.getElementById("history")
    const clearHistoryEl = document.getElementById("clear-history-btn");
    const cityNameEL = document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-picture");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");
    const currentUvEl = document.getElementById("UV-index");

    let searchHistory = Json.parse(localStorage.getItem("search")) || [];
    console.log(searchHistory);


} 



    



