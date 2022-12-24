import { useEffect } from 'react'
import { fetchText, } from "../redux/textSlice";
import { useSelector, useDispatch } from "react-redux";

export default function TextList() {
    const dispatch = useDispatch();

    const paras = useSelector((state) => state.text.paras);
    const format = useSelector((state) => state.text.format);

    const text = useSelector(state => state.text.items);

    useEffect(() => {
        dispatch(fetchText({ paras: paras, format: format }));
    }, [dispatch, paras, format]);

    return (
        <div>
            <p className='output'>{text}</p>
        </div>
    )
}
