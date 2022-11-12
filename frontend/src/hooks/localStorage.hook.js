import { useState, useEffect } from "react";

function UselocalStorage (key, initValue){

    const [value,setValue] = useState(JSON.parse(localStorage.getItem(key))|| initValue);

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[key,setValue])

    return [value,setValue]
}

export default UselocalStorage