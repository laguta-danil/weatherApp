import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { weatherTypes } from '../models/weatherTypes';




interface WeatherState {
    weatherBlock: weatherTypes[];
    isLoading: boolean;
    error: string;
    count: number
}


const initialState: WeatherState = {
    weatherBlock: [],
    isLoading: false,
    error: '',
    count: 1
}


export const WeatherSlice = createSlice( {
    name: 'weather',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload
        },
        weatherFetching(state) {
            state.isLoading = true;

        },
        weatherFetchingSuccess(state, action: PayloadAction<weatherTypes[]>) {
            state.isLoading = false;
            state.error = '';
            state.weatherBlock = action.payload;

        },
        weatherFetchingError(state, action: PayloadAction<string>) { 
            state.isLoading = false;
            state.error = action.payload

        }

    }
})


export default WeatherSlice.reducer;