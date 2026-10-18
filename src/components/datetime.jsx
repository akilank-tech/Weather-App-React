import { useContext, useEffect } from "react";
import { WeatherContext } from "../context/weathercontext";
import axios from "axios";
const DateTime = () => {
    const { isWeatherLoaded, setIsWeatherLoaded, time, setTime, searchcity, date, setDate, city, timeZone, setTimeZone } = useContext(WeatherContext)
    useEffect(() => {
        if (!searchcity) {
            setIsWeatherLoaded(false)
            setDate("")
            setTime("")
            setTimeZone(null)
            return
        }
        let active = true;


        const getTimezone = async () => {
            try {
                setIsWeatherLoaded(false)
                setDate("")
                setTime("")
                const response = axios(`https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&appid=0efe0b956e513b1217ad609add553e0e`)
                setTimeZone((await response).data.timezone)
                setIsWeatherLoaded(true)
            } catch (error) {
                if (!active) return

                setDate("")
                setTime("")
                setIsWeatherLoaded(false)
                console.log("Unable to get city timezone", error)
            }
        }
        getTimezone();
    }, [searchcity])

    useEffect(() => {
        if(!isWeatherLoaded||timeZone==null)return;
        const updateDateTime = () => {
            const now = new Date()

            const citytime = new Date(
                now.getTime() + timeZone * 1000
            )
            const newDate = new Date(
                Date.UTC(
                    citytime.getUTCFullYear(),
                    citytime.getUTCMonth(),
                    citytime.getUTCDate()
                )
            )
            setDate(
                newDate.toLocaleDateString("en-IN",
                    {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                        timeZone: "UTC"
                    }
                )
            )
            setTime(
                citytime.toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                    timeZone: "UTC"
                })
            )
        }
        updateDateTime()
        const timer = setInterval(updateDateTime, 1000)
        return () => clearInterval(timer)
    }, [isWeatherLoaded, timeZone, setTime, setDate])
    if (!isWeatherLoaded) return null

    return (
        <div>
            <p className="text-xs sm:text-base mb-1">{date}</p>
            <p className="text-xs sm:text-base mb-1">{time}</p>
        </div>
    )
}
export default DateTime