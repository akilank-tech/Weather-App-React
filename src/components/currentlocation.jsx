import { WeatherContext } from "../context/weathercontext";
import { useContext } from "react";
import axios from "axios";
import { MapPinned } from "lucide-react";

const API_KEY = "0efe0b956e513b1217ad609add553e0e"
const CurrentLocation = () => {

    const { setCity,setSearchCity, setWeather, setDesc, setTemp, setFeelsLike, setHumidity, setPressure, setWindSpeed, setMinTemp, setMaxTemp, setIcon, setDate, setTime } = useContext(WeatherContext);
    const handleLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.");
            return;
        }
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                try {
                    const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
                        params: {
                            lat,
                            lon,
                            appid: API_KEY,
                            units: "metric",
                        },
                    }
                    )
                    const data = response.data;
                    setCity(data.name)
                    setSearchCity(data.name)
                    setWeather(data.weather[0].main)
                    setTemp(Math.round(data.main.temp))
                    setDesc(data.weather[0].description)
                    setFeelsLike(Math.round(data.main.feels_like))
                    setHumidity(data.main.humidity)
                    setPressure(data.main.pressure)
                    setWindSpeed(data.wind.speed)
                    setMinTemp((data.main.temp_min).toFixed(1))
                    setMaxTemp((data.main.temp_max).toFixed(1))
                    setIcon(data.weather[0].icon)
                   
                } catch (error) {
                    console.error("Full error:", error);
                    console.error("Error message :", error.message);
                    console.error("stack:", error.stack);
                    alert( error.message)
                }
            },
            () => {
                alert("Please allow location access.")
            }
        )
    }
    return (
        <div>
            <button onClick={handleLocation} className="w-full flex items-center justify-center gap-2  bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-3 sm:py-4.5 sm:px-6 rounded-xl shadow-lg hover-shadow-xl transition-all duration-300 transform active:scale-95 text-xs outline-none sm:text-xl cursor-pointer"><MapPinned className=" w-4 h-4 sm:w-5 sm:h-5"/>Get Weather</button>
        </div>
    )
}
export default CurrentLocation;