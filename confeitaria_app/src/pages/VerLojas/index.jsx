import "./VerLojas.css"
import { useState, useEffect } from 'react';
import axios from 'axios'

export function VerLojas() {

    const [confeitarias, setConfeitarias] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/verlojas')
            .then((response) => { setConfeitarias(response.data) })
            .catch((err) => { console.log(err) })
    }, [])

    return (
        <>
            {confeitarias.map((confeitaria) => (
                <div> {confeitaria.nome} </div>
            ))}
        </>
    )
}

