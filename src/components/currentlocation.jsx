import { WeatherContext } from "../context/weathercontext";
import { useContext } from "react";
import axios from "axios";

const API_KEY="0efe0b956e513b1217ad609add553e0e"
const CurrentLocation = () => {
    
    const { setCity, setWeather, setDesc, setTemp, setFeelsLike, setHumidity, setPressure, setWindSpeed, setMinTemp, setMaxTemp ,setIcon } = useContext(WeatherContext);
    const handleLocation = () => {
        if(!navigator.geolocation){
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
                    console.error("Full error:",error);
                    console.error("Error message :",error.message);
                    console.error("stack:",error.stack);
                    alert(
                
                        error.message)
                }
            },
            () => {
                alert("Please allow location access.")
            }
        )
    }
    return (
        <div>
            <button onClick={handleLocation} className="bg-gradient-to-r focus:outline-none from-blue-500 to-violet-500 bg-clip-text text-transparent cursor-pointer text-4xl sm:text-6xl"><i className="fa-solid fa-location-dot"></i></button>
        </div>
    )
}
export default CurrentLocation;