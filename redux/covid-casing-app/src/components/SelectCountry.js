import { useEffect } from 'react'
import { fetchCountriesCovid, fetchCovid, selectedCountry } from "../redux/covidDataSlice"
import { useSelector, useDispatch } from "react-redux"

export default function SelectCountry() {
    const countries = useSelector(state => state.covidData.countries)
    //const country = useSelector(state => state.covidData.country)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCountriesCovid())
    }, [dispatch])

    return (
        <div className="country_control">
            <div className="form_control">
                <select className='select_input'>
                    <option>Global</option>
                    {
                        countries && (
                            countries.countries.map((country, key) => (
                                <option key={key} onSelect={() => { dispatch(fetchCovid(country.name)); dispatch(selectedCountry(country.name)) }} eventkey={country.name} >{country.name}</option>
                            ))
                        )
                    }
                </select>
                <svg className="arrow_bottom_icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg>
            </div>
        </div>
    )
}
