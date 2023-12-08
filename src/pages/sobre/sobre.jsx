import './sobre.css'
import Navbar_ from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import { Link } from 'react-router-dom'
const Sobre = () => {
    return (
        <>
            <Navbar_ />
            <div className='container-geral-sobre'>
                <header className='header-sobre'>
                    <div className='conteudo-header-sobre'>
                        <div className='texto-recconecta-sobre'>
                            <h1>O QUE É O REC-CONECTA?</h1>
                            <span></span>
                            <p>O REC-CONECTA, liderado pela Equipe CODESIDE, é um projeto inovador que busca reconectar as pessoas com o Recife e consigo mesmas. Através de eventos esportivos, saúde mental e parcerias locais, o projeto visa fortalecer os laços comunitários, promover a atividade física e abordar desafios relacionados à saúde mental, contribuindo para uma cidade mais saudável e conectada.</p>
                        </div>
                        <div className='img-header-sobre'>
                            <img src="logo_RECCONECTA.svg" alt="" />
                        </div>
                    </div>
                </header>

                <main className='conteudo-main-sobre'>
                    <div className='container-como-funciona-sobre'>

                        <div className='conteudo-como-funciona-sobre'>
                            <div className='texto-como-funciona-sobre'>
                                <h1>COMO FUNCIONA?</h1>
                                <span></span>
                                <p>Encontre e crie eventos esportivos em Recife, promovendo a saúde física e mental. Os usuários podem participar de atividades, criar seus próprios eventos e contribuir para uma comunidade mais saudável e conectada.</p>
                            </div>
                            <img src="boneco.png" alt="" />
                        </div>

                        <div className='container-topicos-sobre'>

                            <div className='img-blocos-sobre'>

                                <div className='vector-sobre'>
                                    <img src="pessoa-item.png" alt="" />
                                    <div className='p-pessoa-sobre'>
                                        <p>Conheça pessoas com nossos eventos.</p>
                                    </div>
                                </div>

                                <div className='vector-sobre'>
                                    <img src="Bussula-item.png" alt="" />
                                    <div className='p-bussula-sobre'>
                                        <p>Explorando eventos e locais. </p>

                                    </div>
                                </div>

                                <div className='vector-sobre'>
                                    <img src="diagram-item.png" alt="" />
                                    <div className='p-diagram-sobre'>
                                        <p>Participando e criando eventos na comunidade.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </main>

                <div className='texto-saude-sobre'>
                    <h1>Melhora de saúde mental para você</h1>
                    <p>Oferecemos uma solução abrangente e inovadora para os desafios pós-pandêmicos na cidade do Recife. <br /> Ao criar uma plataforma dedicada ao bem-estar e à saúde mental, nosso projeto permite que as pessoas <br /> encontrem facilmente eventos esportivos, desde atividades relaxantes como aulas de ioga na parque até <br /> jogos animados de futebol no parque. Além de promover a saúde física, estamos construindo uma sólida <br /> rede de apoio, reduzindo o isolamento social que muitos enfrentaram durante a pandemia.</p>
                </div>


                <div className='sobre-tudo-geral'>
                    <div className='video-recconecta-sobre'>
                        <p>Video informativo sobre o projeto</p>
                        <iframe width="760" height="415" src="https://www.youtube.com/embed/Tj4bS0IUQNM?si=41zsYhRJtb4CAX-T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='box-sobre'>
                        <h1>CONHEÇA A EQUIPE CODESIDE</h1>
                        <span></span>
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
            </div>
            <Footer />
        </>

    )

}

export default Sobre;