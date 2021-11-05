import { textTypes } from './../models/types';
import { fetchWeather, getWeatherLocal, updateWeather } from './actionCreactor';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { weatherTypes } from '../models/types';


interface WeatherState {
    isLoading: boolean;
    error: string;
    citiesData: textTypes[];
    text: string;
    id: number;
    dataTemp: any;
}


const initialState: WeatherState = {
    isLoading: false,
    error: '',
    citiesData: [],
    text: '',
    id: 0,
    dataTemp: []
}


export const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        changer(state, action: PayloadAction<any>) {
            state.text = action.payload
        },
        handleDeleteData (state, action: any) {
            state.citiesData = action.payload
        }, 
        localStoreCities (state, action: any) {
            state.citiesData = action.payload
        },
        localHourData (state, action:any) {
            state.dataTemp = action.payload
        }
        
    },
    extraReducers: {
        [fetchWeather.fulfilled.type]: (state, action: PayloadAction<weatherTypes[]>) => {
            state.isLoading = false;
            state.error = '';
            state.citiesData = action.payload;
        },
        [fetchWeather.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchWeather.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
        
        [getWeatherLocal.fulfilled.type]: (state, action: PayloadAction<weatherTypes[]>) => {
            state.isLoading = false;
            state.error = '';
            state.citiesData = action.payload;
        },
        [getWeatherLocal.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getWeatherLocal.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },

        [updateWeather.fulfilled.type]: (state, action: PayloadAction<textTypes[]>) => {
            state.isLoading = false;
            state.error = '';
            state.citiesData = action.payload;
        },
        [updateWeather.pending.type]: (state) => {
            state.isLoading = true;
        },
        [updateWeather.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
        
        },

        // [hourlyWeather.fulfilled.type]: (state, action: PayloadAction<textTypes[]>) => {
        //     state.isLoading = false;
        //     state.error = '';
        //     state.dataTemp = action.payload;
        // },
        // [hourlyWeather.pending.type]: (state) => {
        //     state.isLoading = true;
        // },
        // [hourlyWeather.rejected.type]: (state, action: PayloadAction<string>) => {
        //     state.isLoading = false;
        
        // },

    }

})

export default WeatherSlice.reducer;