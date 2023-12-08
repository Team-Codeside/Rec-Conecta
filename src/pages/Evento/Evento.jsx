import './Evento.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button_ from '../../components/button/button';
import Navbar_ from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import api from '../../utils/api';
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import useFlashMessage from '../../hooks/useFlashMessage';
import { useNavigate } from "react-router-dom";


const Eventos = () => {


    const [evento, setEvento] = useState({})
    const { id } = useParams()
    const { setFlashMessage } = useFlashMessage()
    const [token] = useState(localStorage.getItem('token') || '')
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/eventos/${id}`).then((response) => {
            setEvento(response.data.evento)
        })
    }, [id])

    async function Enviarinscricao() { //disparo inscrição
        let msgType = 'success'

        const data = await api.patch(`eventos/inscription/${evento._id}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
            },
        })
            .then((response) => {
                console.log(response.data)
                return response.data
            })
            .catch((err) => {
                console.log(err)
                msgType = 'error'
                return err.response.data
            })


        setFlashMessage(data.message, msgType)
        navigate('/')

    }
    return (
        <>
            <Navbar_ />
            <div className="container-eventos">
                <div className="header-eventos" >
                    <img src={`http://localhost:5000/images/eventos/${evento.images}`} />
                </div>

                <div className="info-eventos">
                    <div className='titulo-info-eventos'>
                        <h1>Informações do evento</h1>
                        {token ? (
                            <Button_
                                width_="150px"
                                heigth_="40px"
                                backgroundcolor_="#FF5212"
                                color_="#fff"
                                border_="none"
                                radius_=""
                                weigth_="bold"
                                font_="Roboto"
                                text_button="Inscrever-se"
                                padding_=""
                                margin_=""
                                type_="submit"
                                value_="inscricao"
                                Onclick_={Enviarinscricao}
                            />)
                            : (

                                <Button_
                                    width_="150px"
                                    heigth_="40px"
                                    backgroundcolor_="#FF5212"
                                    color_="#fff"
                                    border_="none"
                                    radius_=""
                                    weigth_="bold"
                                    font_="Roboto"
                                    text_button="Login"
                                    padding_=""
                                    margin_=""
                                    link_="/Login"
                                />
                            )}
                    </div>
                    <div className="detalhes-info-eventos">
                        <div className='container-detalhes-eventos'>
                            <div className='box-input-eventos evento-title'>
                                <label htmlFor=""></label>

                                <div className="title-evento">
                                    <h1>{evento.name}</h1>
                                </div>
                                <div className="evento-linha-divisoria">
                                    <img src="/linha.svg" alt="" />
                                </div>
                            </div>
                            <div className='box-input-eventos'>
                                <label htmlFor=""><em>Categoria</em></label>
                                <p>{evento.categoria}</p>
                            </div>
                            <div className='box-input-eventos'>
                                <label htmlFor="">Localização</label>
                                <p>{evento.endereco}</p>
                            </div>
                            <div className='box-input-eventos'>
                                <label htmlFor="">Inicio do evento</label>
                                <p>{evento.dataev}</p>
                            </div>


                        </div>
                    </div>

                    <div className='detalhes-info-eventos'>
                        <div className="container-detalhes-eventos">
                            <div className='box-input-eventos'>
                                <label htmlFor="">Sobre o Evento</label>
                                <p>{evento.description}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='container-organizador-eventos'>

                    <div className="organizador-eventos">

                        <div className="img-organizador">
                            <h1>ORGANIZADOR&#40;a&#41;</h1>
                            <img src="/Rec.png" alt="" />
                        </div>
                        <div className="organizador-info">
                            <div className='box-info-organizador'>
                                <label htmlFor="">Nome do Organizador&#40;a&#41;:</label>
                                <p>Andrei Camila Santos</p>
                            </div>
                            <div className='box-info-organizador'>
                                <label htmlFor="">Contatos:</label>
                                <p></p>
                                <p>
                                    andreia_camila_santos@hoatmail.com <br />
                                    (96) 99719-2403
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </>
    );
}

export default Eventos;