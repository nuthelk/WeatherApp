import { isLoadingOpenWeather, setDataWeather } from "./openWeatherSlice"
import axios from 'axios';


export const getWeather = (city:string) => {
    return async (dispatch) => {
        dispatch(isLoadingOpenWeather())
        const { data: {list} } = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=sp&appid=bded955301d42d6701ed44073e7dc370`) 
        const { data:{datetime} } = await axios(`https://timezone.abstractapi.com/v1/current_time/?api_key=849f6349353c418c9a44d1ccf8808ab2&location=${city}`)
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