import CurrentLocation from "./currentlocation"
import WeatherIcon from "../assets/image/Cloud.jpeg";
const Header =()=>{
    return(
        <header className="flex justify-between items-center gap-2 mb-8">
                <div className="flex gap-3">
                    <img src={WeatherIcon} alt="Weather" className="w-16 h-16 sm:w-39 sm:h-39 text-xl sm:text-3xl opject-contain" />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-[#3478F6] text-xl font-bold sm:text-5xl">Weather App</h1>
                        <p className="text-[#3478F6] text-xs sm:text-base">Check the weather details of any city</p>
                    </div>
                </div>
                <CurrentLocation />
            </header>
    )
}
export default Header