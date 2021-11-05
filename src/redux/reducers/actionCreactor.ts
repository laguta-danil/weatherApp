import { textTypes } from './../models/types';
import { weatherTypes } from '../models/types';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


// Санки
export const fetchWeather = createAsyncThunk(
    'weather/fetchAll',
    async ({ city, cities }: { city: string; cities: textTypes[] }, thunkAPI) => {
        try {
            const res: any = await axios.get<weatherTypes[]>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f84d1aedda3a1a3e9795b660ad609d9`)
            const cityId = cities.findIndex((city) => {
                return city.id === res.data.id
            })
            const data = cityId === -1 ? [...cities, {
                id: res.data.id,
                temperature: res.data.main.temp,
                feels_like: res.data.main.feels_like,
                name: res.data.name,
                description: res.data.weather[0].description,
                humidity: res.data.main.humidity,
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
                return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=6f84d1aedda3a1a3e9795b660ad609d9`)
            }))
            console.log(data)
            return data.map((arr: any) => {
                return {
                    name: arr.data.name,
                    description: arr.data.weather[0].description,
                    temperature: arr.data.main.temp,
                    feels_like: arr.data.main.feels_like,
                    id: arr.data.id,
                    humidity: arr.data.main.humidity,
                }
            })
        } catch {

        }
    }
)

export const updateWeather = createAsyncThunk(
    'update/data',
    async ({cities, id, city}: any, thunkAPI) => {
        try {
            const {data} : any = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f84d1aedda3a1a3e9795b660ad609d9`)
    
            return cities.map((city: any) => {
                return id === city.id ? {
                    ...city,
                    name: data.name,
                    description: data.weather[0].description,
                    temperature: data.main.temp,
                    feels_like: data.main.feels_like,
                    humidity: data.main.humidity,
                } : city
            })
        } catch {

        }
    }
)



// export const hourlyWeather = createAsyncThunk(
//     'hourly/data',
//     async (coord, thunkAPI) => {
//         try {
//             const data = await axios.get<any>
//                 (`https://api.openweathermap.org/data/2.5/onecall?lat=-41.211128&lon=174.908081&exclude=daily,minutely,current,alerts&units=metric&appid=6f84d1aedda3a1a3e9795b660ad609d9`)
//             console.log(data)
//             const arr = data.data.hourly
//             let array = []
//             for (let i: number = 1; i < arr.length; i += 6) {
//                 array.push({ temp: arr[i].temp, dt: arr[i].dt, feels_like: arr[i].feels_like })
//             }

//             localStorage.setItem('tempBlock', JSON.stringify(array))
//             return {
//                 array
//             }
            
//         } catch {

//         }
//     }
// )
