import { useContext } from "react";
import WeatherContext from "../../contexts/WeatherContext";
import styles from "./WeatherCard.module.css"

function WeatherCard() {
    const { data, weekday } = useContext(WeatherContext)
        return (
            <div className="row">
                <div className="row d-flex justify-content-between mb-4 mx-auto">

                    {data.map((item, index) =>
                        <div key={index} className={`col text-center align-items-center p-2 me-2 ${styles.cardItem} ${index === 0 ? "border-0 bg-white" : "border-0"}`}>
                            <h6>{weekday[new Date(item.datetime).getDay()]}</h6>
                            <img src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`} className={`${styles.weatherIcon}`} alt="..." />
                            <div>
                                <span className="me-2 fw-light">{Math.round(item.app_min_temp)}°</span>
                                <span>{Math.round(item.app_max_temp)}°</span>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        )                  
}

export default WeatherCard


