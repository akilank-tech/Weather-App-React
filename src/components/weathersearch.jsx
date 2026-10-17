import { useContext } from "react";
import { WeatherContext } from "../context/weathercontext";
import axios from "axios";
import CurrentLocation from "./currentlocation";
import WeatherIcon from "../assets/image/Cloud.jpeg";
const WeatherSearch = () => {
    const { city, setCity, searchcity, setSearchCity, setWeather, setDesc, setTemp, setFeelsLike, setHumidity, setPressure, setWindSpeed, setMinTemp, setMaxTemp, setIcon, setDate, setTime } = useContext(WeatherContext);

    const handleCity = (evt) => {
        setSearchCity(evt.target.value)
    }

    const handleWeather = () => {
        const weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&appid=0efe0b956e513b1217ad609add553e0e`)

        weatherdata.then((success) => {

            console.log(success.data)
            setCity(searchcity)
            setWeather(success.data.weather[0].main)
            setDesc(success.data.weather[0].description)
            setTemp(Math.round(success.data.main.temp - 273.15))
            setFeelsLike(Math.round(success.data.main.feels_like - 273.15))
            setHumidity(success.data.main.humidity)
            setPressure(success.data.main.pressure)
            setWindSpeed(success.data.wind.speed)
            setMinTemp((success.data.main.temp_min - 273.15).toFixed(1))
            setMaxTemp((success.data.main.temp_max - 273.15).toFixed(1))
            setIcon(success.data.weather[0].icon)
            const dateTime = new Date(success.data.dt * 1000)
            setDate(dateTime.toLocaleDateString("en-IN"))
            setTime(dateTime.toLocaleTimeString("en-IN"))
        }).catch((error) => {
            if (error.response?.status === 404) {
                alert("City not found! Please enter a correct city name.")
            } else {
                alert("Something went wrong. Please try again.")
            }
            console.log(error.response?.data || error.message)
        })
    }

    return (
        <div className="p-3 sm:p-10 md:p-16 bg-[#EBF1FF]">
            <header className="flex justify-between items-center gap-2 mb-8">
                <div className="flex gap-3">
                    <img src={WeatherIcon} alt="Weather" className="w-16 h-16 sm:w-39 sm:h-39 text-xl sm:text-3xl opject-contain" />
                    <div className="flex flex-col justify-center">
                        <h1 className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent text-xl font-bold sm:text-5xl">Weather App</h1>
                        <p className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent text-xs sm:text-base">Check the weather details of any city</p>
                    </div>
                </div>
                <CurrentLocation />
            </header>
            <div className="grid grid-cols-3 justify-between items-center gap-2 relative">
                <input className="border border-1 ring-blue-200 ring-2 focus:outline-none focus:border-blue-500 focus:border-2 focus:ring-2 focus:ring-blue-200 text-xs col-span-2 border-blue-300 rounded-md p-2 sm:p-4 sm:text-base" value={searchcity} type="text" placeholder="Enter the City Name" required onChange={handleCity} />
                <button className="relative cursor-pointer focus:outline-none bg-gradient-to-r from-cyan-500 to-violet-500 text-xs text-white p-2 rounded-md sm:p-4 sm:text-base" onClick={handleWeather}>
                    <i className="fa-solid fa-magnifying-glass absolute left-[4%] top-[50%] sm:left-[10%] -translate-y-1.5 z-10 text-white text-xs sm:text-base"></i>
                    <span className="block text-center">Get Weather</span>
                </button>

            </div>
        </div>
    )
}
export default WeatherSearch;