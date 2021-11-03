import { weatherTypes } from '../models/types';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


// export const fetchWeather = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(WeatherSlice.actions.weatherFetching())
//         const res = await axios.get<weatherTypes[]>(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=6f84d1aedda3a1a3e9795b660ad609d9`)
//         dispatch(WeatherSlice.actions.weatherFetchingSuccess(res.data))
//     } catch (e: any) {
//         dispatch(WeatherSlice.actions.weatherFetchingError(e.message))
//     }
// }


// Санки
export const fetchWeather = createAsyncThunk(
    'weather/fetchAll',
    async (city: any, thunkAPI) => {
        try {
            const res = await axios.get<weatherTypes[]>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6fe9da2e085c26438563308a53617cb`)
            return res.data
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message)
        }

    }
)



export const getWeatherData = createAsyncThunk(
    'weather/data',
    async (data: any, thunkAPI) => {
        try {
            const temperature = data.main.temp
            const feels_like = data.main.feels_like
            const name = data.name
            const description = data.weather[0].description

            let id = data.id

            return  {id, temperature, feels_like, name, description}

        } catch {
            return  thunkAPI.rejectWithValue("You have some mistake")
        }
    }
)