import { useState, useContext } from "react";
import { WeatherContext } from "../context/weathercontext";
import axios from "axios";
const WeatherSearch = () => {
    const { city, setCity, setWeather, setDesc, setTemp, setFeelsLike, setHumidity, setPressure, setWindSpeed, setMinTemp, setMaxTemp } = useContext(WeatherContext);

    const handleCity = (evt) => {
        setCity(evt.target.value)
    }
    const handleWeather = () => {
        const weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0efe0b956e513b1217ad609add553e0e`)
        weatherdata.then((success) => {
            console.log(success.data)
            setWeather(success.data.weather[0].main)
            setDesc(success.data.weather[0].description)
            setTemp(Math.round(success.data.main.temp - 273.15))
            setFeelsLike(Math.round(success.data.main.feels_like - 273.15))
            setHumidity(success.data.main.humidity)
            setPressure(success.data.main.pressure)
            setWindSpeed(success.data.wind.speed)
            setMinTemp((success.data.main.temp_min - 273.15).toFixed(1))
            setMaxTemp((success.data.main.temp_max - 273.15).toFixed(1))
        }).catch((error) => {
            console.log(error.response?.data || error.message)
        })
    }

    return (
        <div className="p-3 sm:p-10 md:p-15">
            <header className="flex justify-center items-center gap-2 mb-8">
                <h1 className="text-5xl sm:text-9xl">⛅</h1>
                <div>
                    <h1 className="text-xl font-bold sm:text-3xl">Weather App</h1>
                    <p className="text-xs sm:text-base">Check the weather details of any city</p>
                </div>
            </header>
            <div className="grid grid-cols-3 justify-between items-center gap-2">
                <input className="border border-1 text-xs col-span-2 border-blue-300 rounded-md p-2 sm:p-4 sm:text-base" value={city} type="text" placeholder="Enter the City Name" required onChange={handleCity} />
                <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-violet-500 text-xs text-white p-2 rounded-md sm:p-4 sm:text-base" onClick={handleWeather}><i class="fa-solid fa-magnifying-glass"></i>Get Weather</button>
            </div>
        </div>
    )
}
export default WeatherSearch;