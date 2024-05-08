import "./VerLojas.css"
import axios from 'axios'

export function VerLojas (){

    const confeitaria =[ {
        nome: '',
        bairro: '',
        numero: '',
        logradouro: '',
        descricao: '',
        telefone: '',
        celular: '',
        logo_url: '',
    }]
    axios.get('http://localhost:3001/verlojas').then(response => {
        console.log(response)
        confeitaria =reponse.data;
    })
    .catch(err => console.log(err))

    return(
        <div className="verlojas">
            <h1 className="">HELLO WORLD</h1>
        </div>
    )
}

