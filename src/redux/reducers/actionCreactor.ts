import { weatherTypes } from '../models/weatherTypes';
import axios from 'axios';
import { AppDispatch } from './../store';
import { WeatherSlice } from './weatherReducer';


export const fetchWeather = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(WeatherSlice.actions.weatherFetching())
        const res = await axios.get<weatherTypes[]>(`https://api.openweathermap.org/data/2.5/weather?q=kiev&appid=6f84d1aedda3a1a3e9795b660ad609d9`)
        dispatch(WeatherSlice.actions.weatherFetchingSuccess(res.data))
    } catch (e:any) {
        dispatch(WeatherSlice.actions.weatherFetchingError(e.message))
    } finally {}
}