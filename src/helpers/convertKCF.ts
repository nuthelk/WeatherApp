const kelvinToCelsius = (tempKelvin:number) => {
    return Math.round(tempKelvin - 273.15)
}

export {kelvinToCelsius}

export const celsiusToFahrenheit = (temp:number) => {
    return Math.round((temp*1.8)+32)
}
export const fahrenheitToCelsius = (temp:number) => {
    return Math.round((temp-32)/1.8)
}