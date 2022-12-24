import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWords } from '../redux/wordsSlice';

export default function WordsBox() {
    const lang = useSelector(state => state.words.lang);
    const words = useSelector(state => state.words.items);
    const wordindexnumber = useSelector(state => state.words.wordindexnumber);
    const [grup, setGrup] = useState([]);
    const [num, setNum] = useState(0);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getWords(lang));
    }, [lang, dispatch])
    useEffect(() => {
        if (wordindexnumber % 15 === 0) {
            setNum(wordindexnumber)
        }
        setGrup(words.slice(num, 15 + num))
    }, [words, num, wordindexnumber])

    return (
        <div className='words_box'>
            <p className='word_area'>
                {
                    grup.map((k, index) => {
                        return (
                            <span key={index} className={`word  ${k.status} ${k.nowWords ? "set" : null}`} > {k.word}</span>
                        )
                    })
                }
            </p>
        </div>
    )
}
