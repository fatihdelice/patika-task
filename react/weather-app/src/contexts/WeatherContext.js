import React, { createContext, useContext, useEffect, useState } from "react";
import CityContext from "./CityContext";
import axios from "axios"

const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {

    const { city, setCity } = useContext(CityContext)
    const [ data, setData ] = useState()
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const apiKey = "4d496593dbb14471a8b831770f492325"

    useEffect( () => {
            navigator.geolocation.getCurrentPosition( (position) => {
                    axios(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=2eb5e66f28533bb0afdea44205243ec8&lang=tr`)
                    .then( (res) => res.data.name )
                    .then( (data) => setCity(data))
                })
    },[])

    useEffect ( () => {
             axios(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city},TR&key=${apiKey}&lang=tr`)
            .then( (res) => res.data.data)
            .then( (item) => setData(item.filter( (day, index) => index < 7)))
            .catch( (e) => console.log(e))
        }, [city])


    const values = {
        data,
        weekday,
    }

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext