import Weather from './context/weathercontext'
import WeatherSearch from './components/weathersearch'
import WeatherSummary from './components/weathersummary'
import WeatherDetails from './components/weatherdetails'

function App() {

  return (
    <>
      <Weather>
      <WeatherSearch></WeatherSearch>
      <WeatherSummary></WeatherSummary>
      <WeatherDetails></WeatherDetails>
      </Weather>
    </>
  )
}

export default App;