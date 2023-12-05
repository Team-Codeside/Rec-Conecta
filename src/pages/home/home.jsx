import Navbar_ from "../../components/navbar/navbar";
import "./home.css";
import Footer from "../../components/footer/footer";
import Button_ from "../../components/button/button";
import { useEffect, useState } from 'react';
import Carousels from "../../components/carousels/carousel";
import Card from "../../components/Card/Cards";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Faq from "../../components/faq/faq";
import { Link } from 'react-router-dom';
import CardsHome from "../../components/cardshome/CardsHome";
import api from "../../utils/api";


const Home = () => {

    const [pesquisa,setPesquisa] = useState('')
    const [eventospesquisados,setEventospesquisados] = useState([])

    function pesquisarEvento(){
        api.get(`/eventos/pesquisa/${pesquisa}`).then((response) => {
            console.log(response.data)
            setEventospesquisados(response.data.evento)
          })
    }


    return (
        <>
            <Navbar_ />
            
            <header>
                <div className="conteiner-header">
                    <div className="texts-header">
                        <h1>Eventos esportivos conectando você <br />com: <span>Recife</span>
                        </h1>
                        <p>Amplie sua saúde mental e aproveite os eventos de seus esportes favoritos com REC-CONECTA!</p>
                        <div>
                            <Button_
                                width_="130px"
                                heigth_="45px"
                                backgroundcolor_="#201C97"
                                color_="#fff"
                                border_=""
                                radius_="6px"
                                weigth_="700"
                                font_="Roboto"
                                text_button="Inscreva-se já!"
                                padding_="2px"
                                margin_=""
                                link_="/cadastro"
                                type_="button"
                                value_=""
                                 />
                        </div>
                    </div>
                    <div className="header-img">
                        <img src="./Logo-home.svg" alt="" />
                    </div>
                </div>
            </header>
            <div className="home-divisor"></div>
            <main>
                <section className="home-eventos">
                    <div className="eventos-especificos">
                        <div className="title-caroussel">
                            <h1>PRINCIPAIS EVENTOS</h1>
                            <img src="./linha-divisoria.svg" alt="linha divisória" />
                            <p>Descubra os melhores eventos da sua região</p>
                        </div>
                        <div className="eventos-caroussel">
                            <Carousels />
                        </div>
                        <section className="search-eventos">
                            <div className="header-search">
                                <div className="titles-search">

                                    <h1>TODOS OS EVENTOS</h1>

                                    <div className="search">
                                        <div className="search-header">
                                            <Form>
                                                <Form.Group>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Buscar eventos"
                                                        onChange={(event) => {setPesquisa(event.target.value)}}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: '#EDEDED',
                                                            borderRadius: '6px',
                                                            border: '1px #DEE2E6',
                                                            margin: '0px 10px 0px 0px',
                                                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.33)',
                                                            padding: '0px !important'
                                                        }}
                                                    />
                                                </Form.Group>
                                               
                                            </Form>
                                            <Button
                                                onClick={pesquisarEvento}
                                                    style={{
                                                        width: '200px',
                                                        height: '100%',
                                                        backgroundColor: '#EDEDED',
                                                        color: 'Black',
                                                        border: "1px #DEE2E6",
                                                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.33)',
                                                        borderRadius: '6px',
                                                        fontWeight: '500',
                                                        fontFamily: 'Roboto',
                                                        type: 'button',
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >BUSCAR</Button>
                                               
                                                                                   </div>
                                        <div className="search-filtros">
                                            <a href="/Evento">
                                                <Button
                                                    style={{
                                                        width: '100%',
                                                        height: '45%',
                                                        backgroundColor: '#EDEDED',
                                                        color: 'Black',
                                                        border: "1px #DEE2E6",
                                                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.33)',
                                                        borderRadius: '6px',
                                                        fontWeight: '500',
                                                        fontFamily: 'Roboto',
                                                        type: 'button',
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",

                                                    }}
                                                >CICLISMO</Button>
                                            </a>
                                            <a href="#">
                                                <Button
                                                    style={{
                                                        width: '100%',
                                                        height: '45%',
                                                        backgroundColor: '#EDEDED',
                                                        color: 'Black',
                                                        border: "1px #DEE2E6",
                                                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.33)',
                                                        borderRadius: '6px',
                                                        fontWeight: '500',
                                                        fontFamily: 'Roboto',
                                                        type: 'button',
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >CORRIDA</Button>
                                            </a>
                                            <a href="#">
                                                <Button
                                                    style={{
                                                        width: '100%',
                                                        height: '45%',
                                                        backgroundColor: '#EDEDED',
                                                        color: 'Black',
                                                        border: "1px #DEE2E6",
                                                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.33)',
                                                        borderRadius: '6px',
                                                        fontWeight: '500',
                                                        fontFamily: 'Roboto',
                                                        type: 'button',
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >FUTEBOL</Button>
                                            </a>
                                            <a href="#">
                                                <Button
                                                    style={{
                                                        width: '100%',
                                                        height: '45%',
                                                        backgroundColor: '#EDEDED',
                                                        color: 'Black',
                                                        border: "1px #DEE2E6",
                                                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.33)',
                                                        borderRadius: '6px',
                                                        fontWeight: '500',
                                                        fontFamily: 'Roboto',
                                                        type: 'button',
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >SKATE</Button></a>
                                            <a href="#">
                                                <Button
                                                    style={{
                                                        width: '100%',
                                                        height: '45%',
                                                        backgroundColor: '#EDEDED',
                                                        color: 'Black',
                                                        border: "1px #DEE2E6",
                                                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.33)',
                                                        borderRadius: '6px',
                                                        fontWeight: '500',
                                                        fontFamily: 'Roboto',
                                                        type: 'button',
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >OUTROS</Button>
                                            </a>

                                        </div>
                                    </div>
                                    <CardsHome/>                  
                                </div>
                            </div>
                        </section>
                        <div className="home-divisor"></div>
                    </div>
                </section>
                <section className="home-faq">
                    <div className="faq-titles">
                         <h1>FAQ</h1>
                         <p>Saiba mais sobre as dúvidas frequentes, explore nossa seção de respostas para esclarecer suas dúvidas</p>
                         <div className="faq-home"><Faq/></div>
                    </div>
                    
                    <div className="faq-photo">
                         
                        <img src="/photo-faq.svg" alt="" />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;
