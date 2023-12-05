import React from "react";
import "./perfil.css"
import Navbar_ from "../../components/navbar/navbar";
import Button_ from "../../components/button/button";
import Footer from "../../components/footer/footer";


const Perfil = () => {

    return (
        <>
        <Navbar_ />
            <div className="container-geral-perfil">

                <section className="bloco-info-perfil">
                    <section className="bloco-visual-perfil">

                        <div className="visual-perfil">
                            {/* <h1>PERFIL</h1> */}
                            <div className="img-perfil">
                                <img src="./Recife.jpg" alt="" />
                                
                            </div>
                            <div className="input-edicao-perfil">
                                <Button_
                                    width_="130px"
                                    heigth_="50px"
                                    backgroundcolor_="#221F8A"
                                    color_="#fff"
                                    border_="none"
                                    radius_="10px"
                                    weigth_="bold"
                                    font_="Roboto"
                                    text_button="Editar"
                                    padding_=""
                                    margin_=""
                                    link_=""
                                    type_="file"
                                    value_=""
                                />

                            </div>

                        </div>

                        <section className="sessao-informacoes-perfil">

                            <div className="titulo-informacoes-perfil">
                                <h1>Suas informações</h1>
                                <span></span>
                                
                            </div>

                            <div className="form-perfil">
                                <div className="input-perfil">
                                    <label htmlFor="">Nome Completo</label>
                                    <div className="input-container-perfil">

                                        <input
                                            className="form-control-perfil"
                                            id="disabledInput"
                                            type="text"
                                            placeholder="Lucas Silva"

                                            disabled
                                        ></input>
                                    </div>
                                </div>
                            </div>

                            <div className="form-perfil">
                                <div className="input-perfil">
                                    <label htmlFor="">Email</label>
                                    <input
                                        className="form-control-perfil"
                                        id="disabledInput"
                                        type="text"
                                        placeholder="lucassilva@gmail.com
                                        "
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
                                        placeholder="**********"
                                        disabled
                                    ></input>
                                </div>
                            </div>

                            <div className="form-perfil">
                                <div className="input-perfil">
                                    <label htmlFor="">Data Nacimento</label>
                                    <input
                                        className="form-control-perfil"
                                        id="disabledInput"
                                        type="text"
                                        placeholder="30/03/1999"
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
                                        placeholder="456.928.453-36"
                                        disabled
                                    ></input>
                                </div>
                            </div>
                        </section>
                    </section>

                </section>

            </div>

            <Footer /> 

        </>
    );
}



export default Perfil;