import { postAPI } from './../services/PostApi';
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import weatherReducer from "./reducers/weatherReducer"

const rootReducer = combineReducers({
        weatherReducer,
        [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
        return configureStore({
                reducer: rootReducer,
                devTools: true,
                middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)
        })
}




export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']