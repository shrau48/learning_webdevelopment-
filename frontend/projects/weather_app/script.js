

const searchButton = document.getElementById("search")

const input = document.getElementById("input")


const city = document.getElementById("city")
const conditon = document.getElementById("condition")
const temp = document.getElementById("temp")
const mintemp = document.getElementById("minTemp")
const maxtemp = document.getElementById("maxTemp")





const showWeather = () => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '229d3e4f14mshb0dfc03ec100401p14b7f9jsn21cfaa014b40',
            'X-RapidAPI-Host': 'bestweather.p.rapidapi.com'
        }
    };
    
    fetch('https://bestweather.p.rapidapi.com/weather/1600%20Pennsylvania%20Avenue%20NW%20Washington,%20D.C/today?unitGroup=us', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

}

searchButton.onclick = () => showWeather()


