import { textTypes } from './../models/types';
import { fetchWeather, getWeatherLocal } from './actionCreactor';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { weatherTypes } from '../models/types';


interface WeatherState {
    isLoading: boolean;
    error: string;
    citiesData: textTypes[];
    text: string;
    id: number

}


const initialState: WeatherState = {
    isLoading: false,
    error: '',
    citiesData: [],
    text: 'rostov',
    id: 0

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


    

    }

})

export default WeatherSlice.reducer;