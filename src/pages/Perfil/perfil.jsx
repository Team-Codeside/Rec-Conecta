import React from "react";
import "./perfil.css"
import Input from "../../components/input/input";
import Navbar_ from "../../components/navbar/navbar";
import Form from 'react-bootstrap/Form';
import Button_ from "../../components/button/button";


const Perfil = () => {
    return (
        <>
            <Navbar_ />
            <div className="container-geral-perfil">

                <section className="bloco-info-perfil">
                    <section className="bloco-visual-perfil">

                        <div className="visual-perfil">
                            <h1>PERFIL</h1>
                            <div className="img-perfil">
                                <img src="./Recife.jpg" alt="" />
                            </div>
                            <div className="input-edicao-perfil">
                                <Button_
                                    width_="100px"
                                    heigth_="40px"
                                    backgroundcolor_="#221F8A"
                                    color_="#fff"
                                    border_="none"
                                    radius_=""
                                    weigth_="bold"
                                    font_="Roboto"
                                    text_button="Editar"
                                    padding_=""
                                    margin_=""
                                    link_=""
                                    type_="file"
                                    value_="sdfkskfm"
                                />

                            </div>

                        </div>

                        <section>

                            <div>
                                <h1>Suas informações</h1>
                            </div>
                            <div className="form-perfil">
                                <div className="input-perfil">
                                    <label htmlFor="">Nome Completo</label>
                                    <input
                                        className="form-control-perfil"
                                        id="disabledInput"
                                        type="text"
                                        placeholder="Fulaninho da silva sauro"
                                        disabled
                                    ></input>
                                </div>
                            </div>

                            <div className="form-perfil">
                                <div className="input-perfil">
                                    <label htmlFor="">Email</label>
                                    <input
                                        className="form-control-perfil"
                                        id="disabledInput"
                                        type="text"
                                        placeholder="FulainhoS2@gmail.com"

                                        disabled


                                    ></input>
                                </div>
                            </div>

                            <div className="form-perfil">
                                <div className="input-perfil">
                                    <label htmlFor="">Senha</label>
                                    <input
                                        className="form-control-perfil"
                                        id="disabledInput"
                                        type="password"
                                        placeholder="********"
                                        disabled
                                    ></input>
                                </div>
                            </div>

                            <div className="form-perfil">
                                <div className="input-perfil">
                                    <label htmlFor="">Telefone</label>
                                    <input
                                        className="form-control-perfil"
                                        id="disabledInput"
                                        type="text"
                                        placeholder="(09)4002-8922"
                                        disabled
                                    ></input>
                                </div>
                            </div>

                            <div className="form-perfil">
                                <div className="input-perfil">
                                    <label htmlFor="">CPF</label>
                                    <input
                                        className="form-control-perfil"
                                        id="disabledInput"
                                        type="text"
                                        placeholder="203594485"
                                        disabled
                                    ></input>
                                </div>
                            </div>
                        </section>
                    </section>

                </section>

            </div>

        </>
    );
}



export default Perfil;
