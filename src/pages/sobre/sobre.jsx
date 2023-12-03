import './sobre.css'
import Navbar_ from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import { Link } from 'react-router-dom'
import Button_ from "../../components/button/button";
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Faq from "../../components/faq/faq";


const Sobre = () => {
    return (
        <>
            <Navbar_ />
        
            <header className='cabecalho-header-sobre'>
                <div className="conteiner-header">
                    <div className="texto-recconecta-sobre">
                        <h1>O QUE É O REC-CONECTA?</h1>

                            <p>O REC-CONECTA, liderado pela Equipe CODESIDE, é um projeto inovador que busca reconectar as pessoas com o Recife e consigo mesmas. Através de eventos esportivos, saúde mental e parcerias locais, o projeto visa fortalecer os laços comunitários, promover a atividade física e abordar desafios relacionados à saúde mental, contribuindo para uma cidade mais saudável e conectada.</p>
                    </div>
                    <div className="header-img">
                        <img src="./Logo-home.svg" alt="" />
                    </div>
                </div>
            </header>
            <div className="home-divisor"></div>
            <main>
                    <div className="container-sobre">
                        <div className="title-caroussel">
                            <h1>COMO FUNCIONA?</h1>
                            <img src="./linha-divisoria.svg" alt="linha divisória" />
                            <div className='p2-negrito'>
                                <p>Encontre e crie eventos esportivos em Recife, promovendo a saúde física e mental. Os usuários podem participar de atividades, criar seus próprios eventos e contribuir para uma comunidade mais saudável e conectada.</p>
                            </div>
                        </div>

                        {/* container de vectores */}

                        <div className='container-como-sobre'>
                        <div className='img-como-sobre'>
                            <img src="boneco.png" alt="" />
                        </div>
                            <div className='img-blocos-sobre'>
                                <div className='vector-sobre'>
                                    <div className='p-pessoa-sobre'>
                                        <p>Conheça pessoas com nossos eventos.</p>
                                    </div>
                                    <img src="pessoa-item.png" alt="" />
                                </div>
                                <div className='vector-sobre'>
                                    <img src="Bussula-item.png" alt="" />
                                    <div className='p-bussula-sobre'>
                                        <p>Explorando eventos e locais. </p>
                
                                    </div>
                                </div>
                                <div className='vector-sobre'>
                                    <div className='p-diagram-sobre'>
                                        <p>Participando e criando eventos na comunidade.</p>
                                    </div>
                                    <img src="diagram-item.png" alt="" />
                                </div>
                            </div>
                        </div>

                        {/* fim-vectores */}
                            <div className="header-search">
                                <div className="titles-search">
                                        <div className='saude-sobre'>
                                    <h1>Melhora de saúde mental para você</h1>

                                        <p>Oferecemos uma solução abrangente e inovadora para os desafios pós-pandêmicos na cidade do Recife. <br /> Ao criar uma plataforma dedicada ao bem-estar e à saúde mental, nosso projeto permite que as pessoas <br /> encontrem facilmente eventos esportivos, desde atividades relaxantes como aulas de ioga na parque até <br /> jogos animados de futebol no parque. Além de promover a saúde física, estamos construindo uma sólida <br /> rede de apoio, reduzindo o isolamento social que muitos enfrentaram durante a pandemia.</p>

                                        <div className='video-recconecta-sobre'>
                                            
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Tj4bS0IUQNM?si=41zsYhRJtb4CAX-T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                                            <div className='p-do-video-sobre'>
                                                <p>Video informativo sobre o projeto</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                        <div className="home-divisor"></div>
                        <div className="header-search">
                                <div className="titulo-equipe-sobre">

                                    <h1>CONHEÇA NOSSA EQUIPE</h1>
                                        <img src="./linha-divisoria.svg" alt="linha divisória" />

                            </div>
                        <div className='box-sobre'>
                    <div className='container-image-sobre'>
                        <div className='galeria-sobre'>
                            <div className="img-box-sobre"><h3>André Pinheiro</h3></div>
                            <div className="img-box-sobre"><h3>Aline Batista</h3></div>
                            <div className="img-box-sobre"><h3>Camilly Maria</h3></div>
                            <div className="img-box-sobre"><h3>Gabriela Farias</h3></div>
                            <div className="img-box-sobre"><h3>Filipe Pereira</h3></div>
                        </div>
                    </div>
                </div>
            </div>
            </main>
            <Footer />
        </>
    );
}

export default Sobre;
