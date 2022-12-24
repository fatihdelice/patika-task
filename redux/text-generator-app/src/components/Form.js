import React from 'react'
import { setParas, setFormat } from "../redux/textSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Form() {

    const dispatch = useDispatch();
    const paras = useSelector((state) => state.text.paras);
    const format = useSelector((state) => state.text.format);
    return (
        <div>
            <form className="form-inline">
                <div className="form-group">
                    <label>Paragraphs</label>
                    <div className="number">
                        <input type="number" value={paras} onChange={(e) => dispatch(setParas(Number(e.target.value)))} />
                    </div>
                </div>
                <div className="form-group">
                    <label>Include HTML</label>
                    <div className="select">
                        <select className="form-control" value={format} onChange={(e) => dispatch(setFormat(e.target.value))} >
                            <option value="html">Yes</option>
                            <option value="text">No</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}
