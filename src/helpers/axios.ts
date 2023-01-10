import axios from "axios";

const apiTimeKey = import.meta.env.VITE_API_TIME_KEY

export const getTime = axios.create({
    baseURL: `https://timezone.abstractapi.com/v1/current_time/?api_key=${apiTimeKey}&location=`
})

export const getWeatherData = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
})