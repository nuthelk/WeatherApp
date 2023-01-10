import { isLoadingOpenWeather, setDataWeather } from "./openWeatherSlice"
import axios from 'axios';
import { getTime, getWeatherData } from "../../helpers/axios";

const apiWeatherKey = import.meta.env.VITE_API_WEATHER_KEY

export const getWeather = (city:string) => {
    return async (dispatch:any) => {
        dispatch(isLoadingOpenWeather())
        const { data: {list} } = await getWeatherData.get(`forecast?q=${city}&lang=sp&appid=${apiWeatherKey}`) 
        const { data:{datetime} } = await getTime.get(`${city}`)
        const objeto = {
            iconWeather: list[0].weather[0].icon,
            temperatura: list[0].main.temp,
            speedWind: list[0].wind.speed,
            humedad: list[0].main.humidity,
            time: datetime,
            city,
            description: list[0].weather[0].description
        }
        dispatch(setDataWeather(objeto))
        
    }
}