import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import "./login.css";
import { User } from "../../model/User";

export function Login() {
    const user = new User();
    const validationLogin = yup.object().shape({
        email: yup
            .string()
            .email("NÃO É UM EMAIL VÁLIDO")
            .required("PREENCHA O CAMPO"),
        password: yup
            .string()
            .min(8, "A SENHA DEVE TER NO MINIMO 8 CARACTERES")
            .required("PREENCHA O CAMPO"),
    });

    let navigate = useNavigate();

    const handleClickLogin = (e) => {
        if (validationLogin) {
            e.preventDefault;
            console.log(e);

            axios
                .post("http://localhost:3001/auth/login", e)
                .then((response) => {
                    console.log("Token id: " + response.idToken);

                    if (response.data.userId != undefined) {
                        user.saveUser({ id_usuario: response.data.userId });
                        user.saveConfeitaria({
                            id_confeitaria: response.data.idConfeitaria,
                        });
                        navigate("/loja/");
                    }
                })
                .catch((err) => console.log(err));
        }
    };

    const handleClickRegister = () => {
        navigate("/loja/register");
    };

    return (
        <>
            <div className="content">
                <div className="content_background"></div>
                <div className="content_login-singin">
                    <div className="login-container">
                        <div className="text">
                            <h1>
                                SWEET CONNECTION
                            </h1>
                            <p>
                                Bem vindo de volta amigo, aqui é onde voce pode fazer o seu login
                                para entrar na sua conta e começar a usar nossa ferramenta!
                            </p>
                        </div>
                        <div className="login">
                            <h1>LOGIN</h1>
                            <Formik
                                initialValues={{}}
                                onSubmit={handleClickLogin}
                                validationSchema={validationLogin}
                            >
                                <Form className="login-form">
                                    <div className="login-form-group">
                                        <Field
                                            name="email"
                                            className="form-field"
                                            placeholder="Email"
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="email"
                                            className="form-error"
                                        />
                                    </div>

                                    <div className="login-form-group">
                                        <Field
                                            name="password"
                                            className="form-field"
                                            placeholder="Senha"
                                            type="password"
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="password"
                                            className="form-error"
                                        />
                                    </div>
                                    <div className="group-button">
                                        <button
                                            className="button"
                                            type="submit"
                                            onClick={handleClickLogin}
                                        >
                                            Login
                                        </button>
                                        <button className="button ms-3" type="submit" onClick={handleClickRegister}> NAO TENHO CADASTRO </button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
