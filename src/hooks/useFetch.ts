import { useEffect, useState } from "react"


const useFetch = (url : string) => {
    const [data, setData] = useState(null)
    
    const opts = {
        headers: {
          'mode':'cors'
        }
    }

    useEffect(() => {
        fetch(url,opts)
            .then((res) => res.json())
            .then((data)=> setData(data))
    }, [url])
    
    return [data];
}

export default useFetch