import axios from "axios";

export const getTime = axios.create({
    baseURL: 'https://timezone.abstractapi.com/v1/current_time/?api_key=849f6349353c418c9a44d1ccf8808ab2&location='
})

export const getWeatherData = axios.create({
    baseURL: 'api.openweathermap.org/data/2.5/forecast?q='
})