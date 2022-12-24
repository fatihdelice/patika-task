import { useContext } from 'react'
import Header from '../Header'
import WeatherCard from '../WeatherCard'
import styles from "./Container.module.css"
import WeatherContext from '../../contexts/WeatherContext'

function Container() {
  const { data } = useContext(WeatherContext)

  return (
    <div className={`container align-items-center py-2 px-4 mt-5 mx-auto ${styles.weatherContainer}`}>
        <Header/>
        { data && <WeatherCard/>}
    </div>
  )
}

export default Container

