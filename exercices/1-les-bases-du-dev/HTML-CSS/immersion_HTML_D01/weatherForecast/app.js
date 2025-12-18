const API_key_OW = `3c8d1d744cbc43d84c84fafca9e14ffa`
const API_key_OCD = `3456114c599c400fbcbafa7852f29bc4`
let cityInput = document.getElementById('meteo').value

function getDataFromAPI_OCD(city) {
    console.log(city)   
    let OpenCageData = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${API_key_OCD}&pretty=1&no_annotations=1&limit=1`
    // OpenWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key_OW}`
    return fetch(OpenCageData)
    .then(res => {
        if(res.ok) {
            return res.json()
        }
        else console.log('Error')
    })
    .then(result => {
        let lat = result.results[0].geometry.lat
        let lon = result.results[0].geometry.lng
        //console.log(lat, lon)
        let position = {lat, lon}
        //console.log(position)
        return position

    })
    .catch(error => console.log(`${error}Error de fou`))
}

function getDataFromAPI_OW(city_position) {
    let OpenWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${city_position.lat}&lon=${city_position.lon}&cnt=7&exclude=minutely,hourly&units=metric&appid=${API_key_OW}`
    return fetch(OpenWeather)
    .then(res => {
        return res.json()
    })
    .then(result => {
        console.log(result.current.weather[0].main)
        let meteo = result.current
        // console.log(meteo)
        return meteo
    })
    .catch(console.log('Error API for OpenWeather'))
}

function getWeatherNameFromweatherNumber(pourcent) {
    //TODO: switch
    switch(pourcent) {
        default:
            console.log(pourcent)
    }
}



// lancement des deux fonctions ci-dessus
document.addEventListener('DOMContentLoaded', () => {
    let search_button = document.querySelector('#search_button')
    search_button.addEventListener("click", () => {
        let cityInput = document.getElementById('meteo').value
        getDataFromAPI_OCD(cityInput)
        .then(position => {
            let weather = getDataFromAPI_OW(position)
            weather.then(pourcent => {return pourcent})
            let weatherName = getWeatherNameFromweatherNumber(pourcent)


        })
        .catch(error => console.log(error))
    })
})

