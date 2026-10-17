import { useContext } from "react";
import { WeatherContext } from "../context/weathercontext";
import axios from "axios";
const DateTime = () => {
    const { time, setTime, searchcity,date, setDate,city } = useContext(WeatherContext)
    const response = axios(`https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&appid=0efe0b956e513b1217ad609add553e0e`)
    
    
    response.then((success) => {
        const data = success.data
        const dateTime = new Date(data.dt * 1000)
        setDate(dateTime.toLocaleDateString("en-IN"))
        setTime(dateTime.toLocaleTimeString("en-IN"))
    })
    return (
        <div>
            <p className="text-xs sm:text-base mb-1">{date}</p>
            <p className="text-xs sm:text-base mb-1">{time}</p>
        </div>
    )
}
export default DateTime