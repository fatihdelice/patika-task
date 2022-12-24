import React from 'react'
import { changeLang } from "../redux/wordsSlice"
import { useDispatch, useSelector } from "react-redux";

export default function Header() {    
    const dispatch = useDispatch();
    const timer = useSelector(state => state.words.timer);

    return (
        <div className='header'>
            <select name="language" className="lang_btn" onChange={(e) => dispatch(changeLang(e.target.value))} disabled={timer < 60}>
                <option value="turkish">Türkçe</option>
                <option value="english">English</option>
            </select>
            <span>Switch Typing Test language</span>
        </div>
    )
}
