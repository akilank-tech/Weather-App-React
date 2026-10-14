import { createContext, useState } from "react";

const WeatherContext = createContext()
const Weather = (data) => {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
    const [temp, setTemp] = useState("")
    const [desc, setDesc] = useState("")
    const [feelsLike, setFeelsLike] = useState("")
    const [humidity, setHumidity] = useState("")
    const [pressure, setPressure] = useState("")
    const [windSpeed, setWindSpeed] = useState("")
    const [minTemp, setMinTemp] = useState("")
    const [maxTemp, setMaxTemp] = useState("")
    return (
        <WeatherContext.Provider value={{city,setCity,weather,setWeather,desc,setDesc,temp,setTemp,feelsLike,setFeelsLike,humidity,setHumidity,pressure,setPressure,windSpeed,setWindSpeed,minTemp,setMinTemp,maxTemp,setMaxTemp}}>
            {data.children}
        </WeatherContext.Provider>
    )
}
export default Weather;
export { WeatherContext }