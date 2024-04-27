import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useAxios(param) {
    let [response,setResponse] = useState(null);
    let [loading ,setLoading]= useState(false);
    let [error,setError] = useState('');

    axios.defaults.baseURL = "https://api.coingecko.com/api/v3/"
    let fetchData = async()=>{
        try{
            setLoading(true);
            let result = await axios(param)
            setResponse(result.data)
        }
        catch(e){
            setError(e);
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
            fetchData(param);
    },[]);
  return {
    response,loading,error
}
}

export default useAxios