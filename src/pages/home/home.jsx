import Navbar_ from "../../components/navbar/navbar";
import "./home.css";
import Footer from "../../components/footer/footer";
import Input_control from "../../components/input/input";
import Button_ from "../../components/button/button";
import { useState } from 'react';
import Carousels from "../../components/carousels/carousel";

const Home = () => {
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
                                link_="#"
                                type_="button"
                                value_="" />
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
                           
                        </div>
                    </div>
                </section>
                <section className="home-faq">
                    <Carousels/>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;