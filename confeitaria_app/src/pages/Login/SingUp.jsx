import React, {useState, useEffect}from "react";
import axios from 'axios'
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { User } from "../../model/User";

export function Register(){
    
    let user = new User();
    let navigate = useNavigate()

    const validationRegister = yup.object().shape({
        nomeDono: yup.string().min(5,"PELO MENOS 5 CARACTERES").max(50,"LIMITE ATINGIDO").required("PREENCHA O CAMPO"),
        // nomeEmpresa: yup.string().min(5,"PELO MENOS 5 CARACTERES").required("PREENCHA O CAMPO"),
        // cnpj: yup.string("NÃO PODE SER UMA LETRA").min(14,"CNPJ DEVE TER 14 CARACTERES").max(14,"MÁXIMO DE 14 CARACTERES").required("PREENCHA O CAMPO"),
        email: yup.string().email("NÃO É UM EMAIL VÁLIDO").required("PREENCHA O CAMPO"),
        password: yup.string().min(8,"A SENHA DEVE TER 8 CARACTERES").required("PREENCHA O CAMPO"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "AS SENHAS NÃO SÃO IGUAIS").required("PREENCHA O CAMPO"),
        
    })
    
    const handleClickRegister = (e) => {
        if(validationRegister){
        e.preventDefault;
        console.log(e)

         axios.post("http://localhost:3001/auth/register", e)
            .then(response => {
                console.log(response.data)
                user.saveUser(response.data)
                navigate('/loja/nova-confeitaria')
            })
            .catch(err => console.log(err))
        } 
    }
 
    return (
        <div className="content">

        <div className="login-container">
            <h1>Cadastro</h1>
            <Formik 
            initialValues={{}}
            onSubmit={handleClickRegister}
            validationSchema={validationRegister}
            
            >
                 <Form className="login-form">
                 <div className="login-form-group">
                        <Field name="nomeDono" className="form-field" placeholder="Seu Nome" />
                        <ErrorMessage
                         component ="span"
                         name="nomeDono"
                         className="form-error"
                        />       
                    </div>
                    {/* <div className="login-form-group">
                        <Field name="nomeEmpresa" className="form-field" placeholder="Nome da empresa" />
                        <ErrorMessage
                         component ="span"
                         name="nomeEmpresa"
                         className="form-error"
                        />
                    </div> */}
                    {/* <div className="login-form-group">
                        <Field name="cnpj" className="form-field" placeholder="CNPJ: 00789358000195" />
                        <ErrorMessage
                         component ="span"
                         name="cnpj"
                         className="form-error"
                        />
                    </div> */}
                    <div className="login-form-group">
                        <Field name="email" className="form-field" placeholder="Email" />
                        <ErrorMessage
                         component ="span"
                         name="email"
                         className="form-error"
                        />
                    </div>

                    <div className="login-form-group">
                        <Field name="password" className="form-field" placeholder="Senha" type="password" />
                        <ErrorMessage
                         component ="span"
                         name="password"
                         className="form-error"
                        />
                    </div>
                    <div className="login-form-group">
                        <Field name="confirmPassword" className="form-field" placeholder="Confirme Sua Senha" type="password" />
                        <ErrorMessage
                         component ="span"
                         name="confirmPassword"
                         className="form-error"
                        />
                    </div>
                    <div className="group-button">
                    <button className="button" type="submit" onSubmit={handleClickRegister}>Cadastrar</button>
                    </div>
                 </Form>
                </Formik>
        </div>
        </div>
    )
}

export default Register;