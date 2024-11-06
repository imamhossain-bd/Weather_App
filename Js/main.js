const apiKey = "a1b912745f66718432c445ba13261cc8"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherIcon = document.querySelector(".weather_icon")


async function checkWeather() {
    const searchBox = document.getElementById('cityName').value
    const response = await fetch(apiUrl + searchBox + `&appid=${apiKey}`);

    if(response.status = 404){
        document.getElementById("error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }

    let data = await response.json()


    document.getElementById('city').innerHTML = data.name;
    document.getElementById('temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById('humidity').innerHTML = data.main.humidity + "%";
    document.getElementById('wind').innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main = "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main = "Clear"){
        weatherIcon.src= "images/clear.png"
    }
    else if(data.weather[0].main = "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main = "Mist"){
        weatherIcon.src  = "images/mist.png"
    }

    document.querySelector(".weather").style.display = "block"
    document.getElementById("error").style.display = "none"
}

document.getElementById('searchBtn').addEventListener('click', () =>{
    checkWeather()
})


