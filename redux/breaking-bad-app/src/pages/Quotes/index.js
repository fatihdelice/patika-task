import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllQuotes, quotesSelector, StatusSelector, errorSelector } from '../../redux/quotesSlice'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import Item from './Item'

export default function Quotes() {
    const data = useSelector(quotesSelector);
    const status = useSelector(StatusSelector);
    const error = useSelector(errorSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllQuotes());
        }
    }, [dispatch, status]);

    if (error) {
        return <Error message={error} />
    }

    return (
        <div style={{ padding: 10 }}>
            <h1>Quotes</h1>
            {status === 'loading' && <Loading />}
            {
                status === 'succeeded' && (
                    data.map((item) => (
                        <Item key={item.quote_id} item={item} />
                    ))
                )
            }
            {status === 'succeeded' && <div className='quotes_info'>{data.length} quotes.</div>}
        </div>
    )
}
