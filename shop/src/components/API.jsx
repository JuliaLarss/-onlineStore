import { useEffect, useState } from "react"
import axios from 'axios';

const API = (url) => {
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
        try {
            const response = await axios.get(url)
            setData(response.data)
            setError(null)
        } catch (error) {
            setError(error.message)
            setData(null)
        }finally {
            setLoading(false)
        }
        }
        fetchApi()
    }, [url])

    
    console.log(data)
    return { data, loading, error }
}

export default API;