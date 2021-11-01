import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { weatherTypes } from './../models/types';




interface WeatherState {
    users: weatherTypes[];
    isLoading: boolean;
    error: string;
    count: number
}


const initialState: WeatherState = {
    users: [],
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

        }

    }
})


export default WeatherSlice.reducer;