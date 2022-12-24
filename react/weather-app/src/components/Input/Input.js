import { useContext } from "react";
import CityContext from "../../contexts/CityContext";
import styles from "./Input.module.css"


function Input() {

    const { city, setCity, cities } = useContext(CityContext)

    return (
        <div className="row">
            <div className="input-group my-4">
                <select
                    className="form-select border-0"
                    id="inputGroupSelect02"
                    onChange={(e) => setCity(e.target.value)}
                >
                    <option defaultValue={city || "Bir şehir seçiniz"}>{city || "Bir şehir seçiniz"}</option>
                    {
                        cities.map(item => (
                            <option className="dropdown-item"
                                key={item.id}
                            >
                                {item.name}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>

    )
}

export default Input


