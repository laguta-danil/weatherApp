import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppSelector } from './redux/reduxHooks/reduxHooks';
import WeatherBlock from './components/WeatherBlock';
import { Preloader } from './components/Preloader';




function App() {
  const {isLoading, error} = useAppSelector(state => state.weatherReducer)

  // useEffect(() => {
  //   dispatch(fetchWeather('kiev'))

  // }, [])

  return (
    <div>
      <WeatherBlock/>
      {isLoading && <h3>DOWNLOAD <Preloader /></h3>}
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default App;
