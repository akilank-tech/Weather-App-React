import Header from "./header";
import { useContext } from "react";
import { WeatherContext } from "../context/weathercontext";
import axios from "axios";


import { Search } from "lucide-react";
const WeatherSearch = () => {
    const { inputCity, setInputCity, city, setCity, searchcity, setSearchCity, setWeather, setDesc, setTemp, setFeelsLike, setHumidity, setPressure, setWindSpeed, setMinTemp, setMaxTemp, setIcon, setDate, setTime } = useContext(WeatherContext);

    const handleCity = (evt) => {
        setInputCity(evt.target.value)

    }

    const handleWeather = () => {
        if (!inputCity.trim()) {
            alert("Enter your city name")
            return
        }
        const searchName = inputCity.trim()
        const weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${searchName}&appid=0efe0b956e513b1217ad609add553e0e`)

        weatherdata.then((success) => {

            console.log(success.data)
            setCity(success.data.name)
            setSearchCity(success.data.name)

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
            setInputCity("")


        }).catch((error) => {
            if (error.response?.status === 404) {
                alert("Invalid cityname ! Please enter a correct city name.")
            } else {
                alert("Something went wrong. Please try again.")
            }
            console.log(error.response?.data || error.message)
        })
    }

    return (
        <div className="p-3 sm:p-10 md:p-16 bg-[#EBF1FF]">
            <Header />
            <div className="grid grid-cols-3 justify-between items-center gap-2 relative">
                <input className="border border-1 ring-blue-200 ring-2 focus:outline-none focus:border-blue-500 focus:border-2 focus:ring-2 focus:ring-blue-200 text-xs col-span-2 border-blue-300 rounded-md p-2 sm:p-4 sm:text-base" value={inputCity} type="text" placeholder="Enter the City Name" required onChange={handleCity} />
                <button onClick={handleWeather} className="w-full flex items-center justify-center gap-2  bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-3 sm:py-4.5 sm:px-6 rounded-xl shadow-lg hover-shadow-xl transition-all duration-300 transform active:scale-95 text-xs outline-none sm:text-xl cursor-pointer"><Search className=" w-4 h-4 sm:w-5 sm:h-5" />Get Weather</button>
            </div>
        </div>
    )
}
export default WeatherSearch;