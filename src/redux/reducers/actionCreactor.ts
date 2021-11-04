import { textTypes } from './../models/types';
import { weatherTypes } from '../models/types';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


// Санки
export const fetchWeather = createAsyncThunk(
    'weather/fetchAll',
    async ({ city, cities }: { city: string; cities: textTypes[] }, thunkAPI) => {
        try {
            const res: any = await axios.get<weatherTypes[]>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6fe9da2e085c26438563308a53617cb`)
            const cityId = cities.findIndex((city) => {
                return city.id === res.data.id
            })
            const data = cityId === -1 ? [...cities, {
                id: res.data.id,
                temperature: res.data.main.temp,
                feels_like: res.data.main.feels_like,
                name: res.data.name,
                description: res.data.weather[0].description
            }] : cities
            localStorage.setItem('cities', JSON.stringify(data))
            return data
        } catch (e: any) {
            return thunkAPI.rejectWithValue('Вы ввели некоректное название города - попробуйте снова!')
        }
    }
)


export const getWeatherLocal = createAsyncThunk(
    'weather/data',
    async (cities: any, thunkAPI) => {
        try {
            const data = await Promise.all(cities.map((city: any) => {
                return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=c6fe9da2e085c26438563308a53617cb`)
            }))
            console.log(data)
            return data.map((arr: any) => {
                return {
                    name: arr.data.name,
                    description: arr.data.weather[0].description,
                    temperature: arr.data.main.temp,
                    feels_like: arr.data.main.feels_like,
                    id: arr.data.id,
                }
            })
        } catch {

        }
    }
)

// export const getRenewWeather = createAsyncThunk(
//     'weather/data',
//     async (cities: any, thunkAPI) => {
//         try {
//             const data = await axios.get<weatherTypes[]>(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=c6fe9da2e085c26438563308a53617cb`)
//             console.log(data)
//             return {
//                 name: data.name,
//                 description: data.weather[0].description,
//                 temperature: data.main.temp,
//                 feels_like: data.main.feels_like,
//                 id: data.id,
//             }

//         } catch {

//         }
//     }
// )
