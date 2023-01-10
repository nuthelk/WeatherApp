import { configureStore } from "@reduxjs/toolkit";
import { openWeatherSlice } from "./slices/openWeatherSlice";


export const store = configureStore({
    reducer: {
        openWeather: openWeatherSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch;