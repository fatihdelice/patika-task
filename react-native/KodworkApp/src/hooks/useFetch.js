import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (URL) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchData = async () => {
        try {
            const { data: response } = await axios.get(URL);
            setData(response);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {
        data,
        loading,
        error
    }
}

export default useFetch;