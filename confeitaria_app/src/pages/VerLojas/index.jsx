import "./VerLojas.css"
import { useState, useEffect } from 'react';
import axios from 'axios'

export function VerLojas (){

    const [confeitarias, setConfeitarias] = useState([])


        axios.get("http://localhost:3001/verlojas").then((response) => {
        console.log(response.data)
        setConfeitarias(response.data);
    })
       


    return(
        <div className="verlojas">
            <h1>HELLO WORLD</h1>
        </div>
    )
}

