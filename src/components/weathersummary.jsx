import { useContext, useState } from "react";
import { WeatherContext } from "../context/weathercontext";
import DateTime from "./datetime";
const WeatherSummary = () => {
    const { city, weather, desc, temp, feelsLike, icon, date, time } = useContext(WeatherContext)
    return (
        <div className="px-3 sm:px-10 md:px-15 bg-[#EBF1FF]">
            <div className="p-5 sm:p-10 flex justify-between items-center rounded-md shadow-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white">
                <img
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="Weather icon"
                    className="w-20 h-20 object-contain sm:w-60 sm:h-60 text-xs sm:text-base"
                />
                <div className="flex">
                    <div className="flex flex-col items-left justify-center border-r-1 border-r-white pr-2 sm:p-5">
                        <h2 className="text-xl font-bold sm:text-5xl mb-1 sm:mb-3">{temp ? `${temp}°C` : "--"}</h2>
                        <p className="text-xs sm:text-base mb-1">Feels Like {feelsLike ? `${feelsLike}°C` : "--"}</p>
                       <DateTime/>
                    </div>
                    <div className="flex flex-col items-left p-2 sm:p-5">
                        <h3 className="text-xl font-bold sm:text-5xl mb-2 sm:mb-3">{city}</h3>
                        <p className="text-xs sm:text-base mb-2 sm:mb-3">{desc}</p>
                        <p className="text-xs sm:text-base">{weather}</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
export default WeatherSummary;