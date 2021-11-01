import { weatherTypes } from './../models/types';
import axios from 'axios';
import { AppDispatch } from './../store';



export const fetchWeather = () => () => {
    try {
        const res = await axios.get<weatherTypes[]>(`https://api.openweathermap.org/data/2.5/weather?q=kiev&appid=6f84d1aedda3a1a3e9795b660ad609d9`)
    }
    }