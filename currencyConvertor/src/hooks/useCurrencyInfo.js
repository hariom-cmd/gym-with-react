import {useEffect, useState} from "react"

    // jab bhi hmara application load hoga to ye function first time apne aap run ho jayega. 
    // Fayda ye hoga k hme alg se koi function iske andr call nhi krna pdega
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;




