import './App.css';
import WeatherBlock from './components/WeatherBlock';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WeatherSlice } from './redux/reducers/weatherReducer';
import { useAppDispatch, useAppSelector } from './redux/reduxHooks/reduxHooks';


function App() {
  const { count } = useAppSelector(state => state.weatherReducer)
  const { increment } = WeatherSlice.actions
  const dispatch = useAppDispatch()

  return (
    <div>
      <WeatherBlock />
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(10))}>add</button>
    </div>
  );
}

export default App;
