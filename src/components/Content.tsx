import SearchBar from './SearchBar'
import nublado from '../images/nublado.png'
import nubladoDark from '../images/nublado-dark.png'
import Tarjetas from './Tarjetas'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getWeather } from '../redux/slices/thunk';
import { RootState } from '../redux/store'
import { celsiusToFahrenheit, kelvinToCelsius } from '../helpers/convertKCF'
import Switch from './Switch'
import Load from './Load'


const Content = () => {

    const selector = useSelector((state: RootState) => state.openWeather)
    const tempCelsius = kelvinToCelsius(selector.temperatura)
    const tempFahrenheit = celsiusToFahrenheit(tempCelsius)

    return (
        <main className='p-4 flex flex-col items-center dark:text-white text-primary'>
            <SearchBar />
            {
                selector.isLoading ?
                    <Load />
                    :
                    <>
                        <div className='mt-16 flex flex-col items-center gap-2  '>
                            <h1 className='text-5xl font-semibold  capitalize'>{selector.city}</h1>
                            <img src={`https://openweathermap.org/img/wn/${selector.iconWeather}@2x.png`} alt="clima" className='w-24 h-24' />
                            <p className='-mt-4 capitalize'>{selector.description}</p>
                            <p className='font-medium text-xl'>{selector.time}</p>
                        </div>
                        <section className='mt-8 sm:mt-14 flex flex-col justify-center items-center gap-4 sm:flex-row w-full '>
                            <Tarjetas text="Temperatura" dato={selector.stateConvert ? tempFahrenheit : tempCelsius} simb={selector.stateConvert ? "°F" : "°C"} ><Switch /></Tarjetas>
                            <Tarjetas text="Humedad" dato={selector.humedad} simb="%" />
                            <Tarjetas text="Velocidad Viento" dato={selector.speedWind} simb="m/s" />
                        </section>
                    </>
            }


        </main>
    )
}

export default Content