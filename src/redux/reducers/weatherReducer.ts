import { textTypes } from './../models/types';
import { fetchWeather, getWeatherData } from './actionCreactor';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { weatherTypes } from '../models/types';


interface WeatherState {
    getWeather: weatherTypes[];
    isLoading: boolean;
    error: string;
    textBlock: textTypes[];
    text: string
}


const initialState: WeatherState = {
    getWeather: [],
    isLoading: false,
    error: '',
    textBlock: [
        { id: 0, name: 'rostov', description: 'something', temperature: 10, feels_like: 8 },
        { id: 1, name: 'new', description: 'gde eto', temperature: 20, feels_like: 12 }
    ],
    text: 'rostov'

}


export const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        changer(state, action: PayloadAction<any>) {
            state.text = action.payload
        }
        // weatherFetching(state) {
        //     state.isLoading = true;

        // },
        // weatherFetchingSuccess(state, action: PayloadAction<weatherTypes[]>) {
        //     state.isLoading = false;
        //     state.error = '';
        //     state.getWeather = action.payload;

        // },
        // weatherFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false;
        //     state.error = action.payload
        // }
    },
    extraReducers: {
        [fetchWeather.fulfilled.type]: (state, action: PayloadAction<weatherTypes[]>) => {
            state.isLoading = false;
            state.error = '';
            state.getWeather = action.payload;
        },
        [fetchWeather.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchWeather.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [getWeatherData.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = '';
            state.textBlock = [...state.textBlock, action.payload]
                debugger
        },
        [getWeatherData.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getWeatherData.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
        
    }
    
})

export default WeatherSlice.reducer;