import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downTime, increWordIndex, HandleWords } from "../redux/wordsSlice";

export default function Input() {
    const timer = useSelector(state => state.words.timer);
    const time = useSelector(state => state.words.time);
    const [start, setStart] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (timer < 2) setStart(false)
        if (start) {
            setTimeout(() => dispatch(downTime()), 1000)
        }
    }, [start, timer, dispatch])
    function increIndex(e) {
        if (e.target.value[e.target.value.length - 1] === " ") {
            dispatch(increWordIndex());
            e.target.value = ""
        }
    }
    function Handlekeyboard(e) {
        dispatch(HandleWords(e.target.value))
        setStart(true);
    }

    return (
        <div className='text_input'>
            <input
                type="text"
                className="form_control"
                dir="ltr"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                onKeyUpCapture={(e) => increIndex(e)}
                disabled={timer < 1 && !start}
                onChange={(e) => Handlekeyboard(e)}
            />
            <div className="timer">{time}</div>
            <button className="reload_btn" onClick={() => window.location.reload()} >↻</button>
        </div>
    )
}
