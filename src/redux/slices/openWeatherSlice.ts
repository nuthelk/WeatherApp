import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isLoading: false,
    iconWeather: "",
    temperatura: 0,
    speedWind: 0,
    humedad: 0,
    time: "",
    city: "medellin",
    description: "",
    stateConvert: false,
}

export const openWeatherSlice = createSlice({
    name: "openWeather",
    initialState,
    reducers: {
        isLoadingOpenWeather: (state) => {
            state.isLoading = true;
        },
        setDataWeather: (state, {payload}) => {
            state.isLoading = false;
            state.iconWeather = payload.iconWeather;
            state.temperatura = payload.temperatura;
            state.speedWind = payload.speedWind;
            state.humedad = payload.humedad;
            state.time = payload.time;
            state.city = payload.city;
            state.description = payload.description
        },
        changeStateConvert: (state,{payload}) => {
            state.stateConvert = payload;
        }
    }
})


export const {isLoadingOpenWeather, setDataWeather, changeStateConvert} = openWeatherSlice.actions