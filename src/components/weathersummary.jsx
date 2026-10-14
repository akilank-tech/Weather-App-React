import { useContext, useState } from "react";
import { WeatherContext } from "../context/weathercontext";
const WeatherSummary = ()=>{
    const{city,weather,desc,temp,feelsLike}=useContext(WeatherContext)
    return(
        <div className="px-3 sm:px-10 md:px-15">
            <div className="p-5 sm:p-10 flex justify-between items-center rounded-md shadow-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white">
                <h1 className="text-5xl sm:text-9xl text-center">⛅</h1>
                <div className="flex gap-16">
                    <div className="flex flex-col items-left justify-center border-r-1 border-r-white p-4">
                    <h2 className="text-xl font-bold sm:text-3xl mb-2 sm:mb-3">{temp? `${temp}°C`:"--"}</h2>
                    <p className="text-xs sm:text-base">Feels Like{feelsLike?`${feelsLike}°C`:"--" }</p>
                </div>
                <div className="flex flex-col items-left justify-center">
                    <h3 className="text-xl font-bold sm:text-3xl mb-2 sm:mb-3">{city}</h3>
                    <p className="text-xs sm:text-base mb-2 sm:mb-3">{desc}</p>
                    <p className="text-xs sm:text-base">{weather}</p>
                </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
export default WeatherSummary;