import { createContext, useState } from "react";

const WeatherContext = createContext()
const Weather = (data) => {
    const [city, setCity] = useState("")
    const [searchcity, setSearchCity] = useState("")
    const [inputCity,setInputCity]=useState("")
    const [weather, setWeather] = useState("")
    const [temp, setTemp] = useState("")
    const [desc, setDesc] = useState("")
    const [feelsLike, setFeelsLike] = useState("")
    const [humidity, setHumidity] = useState("")
    const [pressure, setPressure] = useState("")
    const [windSpeed, setWindSpeed] = useState("")
    const [minTemp, setMinTemp] = useState("")
    const [maxTemp, setMaxTemp] = useState("")
    const [icon, setIcon] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [timeZone,setTimeZone]=useState(0)
    const[isWeatherLoaded,setIsWeatherLoaded]=useState(false)
    
    return (
        <WeatherContext.Provider value={{ isWeatherLoaded,setIsWeatherLoaded,city, setCity,inputCity,setInputCity, searchcity, setSearchCity, weather, setWeather, desc, setDesc, temp, setTemp, feelsLike, setFeelsLike, humidity, setHumidity, pressure, setPressure, windSpeed, setWindSpeed, minTemp, setMinTemp, maxTemp, setMaxTemp, icon, setIcon, date, setDate, time, setTime,timeZone,setTimeZone }}>
            {data.children}
        </WeatherContext.Provider>
    )
}
export default Weather;
export { WeatherContext }