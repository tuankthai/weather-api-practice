
const API_KEY = "43e9d0922f62481ba84abf2c212c4c33"
let city = ""
const weatherInput = document.getElementById("weather-input")
const button = document.getElementById("button")

console.log("weahter exercise")

async function getWeatherData(city) {

    const URL = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`

    try {
        const data = await fetch(URL)
        const datafinal = await data.json();
        console.log(datafinal)

    } catch (error) {

    }

}


weatherInput.addEventListener("input", (event) => {
    city = event.target.value

})

button.addEventListener("click", () => {
    console.log(city)
    getWeatherData(city)
})
