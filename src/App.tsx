import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppSelector } from './redux/reduxHooks/reduxHooks';
import WeatherBlock from './components/WeatherBlock';
import { Preloader } from './components/Preloader';




function App() {
  const { isLoading, error } = useAppSelector(state => state.weatherReducer)

  return (
    <div>
      <span className='preloader'>
      {isLoading && <h3>DOWNLOAD <Preloader /></h3>}
      </span>
      <span>
      {error && <h3>{error}</h3>}
      </span>
      <WeatherBlock />
    </div>
  );
}

export default App;
