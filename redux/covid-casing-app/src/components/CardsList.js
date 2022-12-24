import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchCovid } from "../redux/covidDataSlice"
import Moment from 'react-moment'

export default function CardsList() {
    const items = useSelector(state => state.covidData.items)
    const status = useSelector(state => state.covidData.status)
    //const country = useSelector(state => state.covidData.country)

    const dispatch = useDispatch()
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCovid())
        }

    }, [dispatch, status])

    let datas = []

    if (items) {

        datas = [
            {
                title: "Infected",
                value: items.confirmed.value,
                updatedText: "Last Updated at:",
                updated: items.lastUpdate,
                src: "Number of active cases of COVİD-19",
                color: "color_one",
            },
            {
                title: "Recovered",
                value: items.recovered.value,
                updatedText: "Last Updated at:",
                updated: items.lastUpdate,
                src: "Number of recoveries from COVİD-19",
                color: "color_two",
            },
            {
                title: "Deaths",
                value: items.deaths.value,
                updatedText: "Last Updated at:",
                updated: items.lastUpdate,
                src: "Number of deaths caused by COVİD-19",
                color: "color_three",
            },
            {
                title: "Active",
                value: items.confirmed.value - items.recovered.value - items.deaths.value,
                updatedText: "Last Updated at:",
                updated: items.lastUpdate,
                src: "Number of Active Cases of COVİD-19",
                color: "color_four",
            }
        ]
    }
    return (
        <div className='cards_container'>
            <div className="grid_container">
                {
                    datas && (
                        datas.map((data, key) => (
                            <div key={key} className={`card ${data.color}`}>
                                <div className="card_content">
                                    <p>
                                        <b>{data.title}</b>
                                    </p>
                                    <h5>
                                        <span>{Intl.NumberFormat('en-US').format(data.value)}</span>
                                    </h5>
                                    <p className='body1 colorPrimary'>{data.updatedText}</p>
                                    <p className='body2 colorSecondary'>
                                        <Moment format="Do MMM YYYY, hh:mm:ss">{data.updated}</Moment>
                                    </p>
                                    <p className='body2 colorSecondary'>16:21:09</p>
                                    <p className='body2'>{data.src}</p>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}
