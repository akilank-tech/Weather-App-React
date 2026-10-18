import { useContext } from "react";
import { WeatherContext } from "../context/weathercontext";
const WeatherDetails = () => {
    const { weather, desc, temp, feelsLike, humidity, pressure, windSpeed, minTemp, maxTemp,icon } = useContext(WeatherContext)

    const iconBase = "inline-flex h-10 w-10 items-center justify-center rounded-full " +
        "text-lg sm:h-12 sm:w-12 sm:text-2xl md:h-14 md:text-3xl"

    const details = [{
        icon: <span className={`${iconBase} bg-blue-300 text-blue-600 flex items-center justify-center overflow-hidden`}><img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=""
            className="w-full h-full object-contain"
        /></span>,
        title: "Weather",
        value: weather
    },
    {
        icon: <span className={`${iconBase} bg-violet-300 text-violet-700`}><i className="fa-solid fa-clipboard-list"></i></span>,
        title: "Description",
        value: desc
    },
    {
        icon: <span className={`${iconBase} bg-red-300 text-red-600`}><i className="fa-solid fa-temperature-high"></i></span>,
        title: "Temperature",
        value: temp ? `${temp}°C` : "--"
    },
    {
        icon: <span className={`${iconBase} bg-violet-300 text-violet-800`}><i className="fa-solid fa-temperature-half"></i></span>,
        title: "Feels Like",
        value: feelsLike ? `${feelsLike}°C` : "--"
    },
    {
        icon: <span className={`${iconBase} bg-blue-200 text-blue-800`}><i className="fa fa-tint" aria-hidden="true"></i></span>,
        title: "Humidity",
        value: humidity ? `${humidity}%` : "--"
    },
    {
        icon: <span className={`${iconBase} bg-gray-300 text-violet-800`}><i className="fa-solid fa-wind"></i></span>,
        title: "Wind Speed",
        value: windSpeed !== "" ? `${windSpeed} m/s` : ""
    },
    {
        icon: <span className={`${iconBase} bg-blue-100 text-blue-700`}><i className="fa-solid fa-gauge"></i></span>,
        title: "Pressure",
        value: pressure !== "" ? `${pressure} hpa` : ""
    },
    {
        icon: <span className={`${iconBase} bg-rose-300 text-rose-600`}><i className="fa-solid fa-plus-minus"></i></span>,
        title: "Min / Max Temperature",
        value: minTemp !== "" && maxTemp !== "" ? `${minTemp} °C / ${maxTemp} °C` : ""
    }
    ]
    return (
        <div className="grid grid-cols-2 px-3 sm:px-10 md:px-15 pt-6 gap-4 pb-6 bg-[#EBF1FF] sm:grid-cols-2 lg:grid-cols-4">
            {
                details.map((item) => {
                    return (
                        <div className="min-w-0 rounded-xl bg-[#FFFFFF] p-4 shadow-sm" key={item.title}>

                            <div>
                                {item.icon}
                                <p className="text-sm text-slate-500 mt-3">{item.title}</p>
                                <h3 className="mt-2 break-words font-bold text-[#6D3BE8]">
                                    {item.value || "--"}
                                </h3>
                            </div>
                        </div>)

                })
            }
        </div>
    )
}
export default WeatherDetails;