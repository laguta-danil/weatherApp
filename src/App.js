import './App.css';
import WeatherBlock from './components/WeatherBlock';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WeatherSlice } from './redux/reducers/weatherReducer';
import { useAppDispatch, useAppSelector } from './redux/reduxHooks/reduxHooks';
import { useEffect } from 'react';
import { fetchWeather } from './redux/reducers/actionCreactor';


function App() {
  const { count } = useAppSelector(state => state.weatherReducer)
  const { increment } = WeatherSlice.actions
  const dispatch = useAppDispatch()
  const {WeatherBlock} = useAppSelector(state => state.weatherReducer)

  useEffect (() => {
    dispatch(fetchWeather())
  }, [])

  return (
    <div>
      <WeatherBlock />
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(10))}>add</button>
      {JSON.stringify(WeatherBlock, null, 2)}
    </div>
  );
}

export default App;
