import { useEffect, useState } from 'react';
import { SliderPicker } from 'react-color';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import { User } from '../../model/User';

export function Customization(){
    const [primaryColor, setPrimaryColor] = useState()
    const [secondaryColor, setSecondaryColor] = useState()
    const [headerColor, setHeaderColor] = useState()
    const user = new User()

    const customization = {
        corPrimaria: primaryColor,
        corSecundaria: secondaryColor,
        header: headerColor,
        logo: '',
        confeitariaId: user.getConfeitariaId()
    }

    useEffect(() => {
        axios.get('http://localhost:3001/customization?confeitariaId=' + user.getConfeitariaId())
        .then(response => { 
            console.log(response.data)
            setPrimaryColor(response.data.cor_primaria || '')
            setSecondaryColor(response.data.cor_secundaria || '')
            setHeaderColor(response.data.cor_header_footer || '')
        })
        .catch(err => {})
    }, [])

    const onSaveCustomization = () => {
        axios.post(
            'http://localhost:3001/customization', 
            customization, 
            { headers: { 'Content-Type': 'multipart/form-data' } }
        ).then(response => { console.log(response) })
        .catch(err => {})
    }

    return(
        <Stack gap={4} direction='vertical'>
            <p>Customização</p>
            <Row>
                <Col xs={3}><p>Cor primaria do site</p></Col>
                <Col xs={9}><SliderPicker color={primaryColor} onChange={(e) => setPrimaryColor(e.hex)}/></Col>
            </Row>

            <Row>
                <Col xs={3}><p>Cor secundária do site</p></Col>
                <Col xs={9}><SliderPicker color={secondaryColor} onChange={(e) => setSecondaryColor(e.hex)}/></Col>
            </Row>

            <Row>
                <Col xs={3}><p>Cor do header do site</p></Col>
                <Col xs={9}><SliderPicker color={headerColor} onChange={(e) => setHeaderColor(e.hex)}/></Col>
            </Row>

            <Row>
                <Col xs={3}><p>Logo do site</p></Col>
                <Col xs={9}>
                    <input type="file" placeholder='imagens' onChange={(e) => { customization.logo = e.target.files[0] }} />
                </Col>
            </Row>

            <Row >
                <Col><Button onClick={onSaveCustomization}>Salvar</Button></Col>
            </Row>
        </Stack>
    );
}