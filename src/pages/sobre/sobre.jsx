import './sobre.css'
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

const Sobre = () => {
    return (
        <>

            <header className='cabecalho-header-sobre'>
                <div className='sobre-texto1-sobre'>
                    <div className='texto-recconecta-sobre'>
                        <h2>O QUE É O REC-CONECTA?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum ducimus  ab consequatur asperiores minima. Sapiente adipisci deserunt temporibus  laboriosam, fuga officia, deleniti voluptate,  eum dignissimos cupiditate quam accusamus ipsam!</p>
                    </div>


                    <img src="logo_RECCONECTA.png" alt="" />


                </div>
            </header>

            <main className='conteudo-sobre'>

                <div id='container-como-funciona-sobre'>
                    <div className='container-sobre'>
                        <div className='sobre-texto2-sobre'>

                            <h2>COMO FUNCIONA?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum ducimus ab consequatur  asperiores minima. Sapiente adipisci deserunt temporibus laboriosam</p>

                        </div>
                        <div id='container-como-sobre'>
                            <div className='img-como-sobre'>
                                <img src="boneco.png" alt="" />
                            </div>
                        </div>

                    </div>

                    <div id='container-como2-sobre'>

                        <div className='img-blocos-sobre'>

                            <div className='vector-sobre'>
                                <div className='p-pessoa-sobre'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Iste unde nobis iure quasi.</p>
                                </div>
                                <img src="pessoa-item.png" alt="" />
                            </div>
                            <div className='vector-sobre'>
                                <img src="Bussula-item.png" alt="" />
                                <div className='p-bussula-sobre'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde nobis iure quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                                    
                                </div>
                            </div>
                            <div className='vector-sobre'>
                                <div className='p-diagram-sobre'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Iste unde nobis iure quasi.  </p>
                                </div>
                                <img src="diagram-item.png" alt="" />
                            </div>

                        </div>
                    </div>

                </div>

                <div>
                    <div className='linha-azul-equipe-sobre'>
                        <img src="Rectangle 8.png" alt="" />
                    </div>

                    <div className='texto3-saude-sobre'>
                        <h2>Melhora de saúde mental para você</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum ducimus ab consequatur <br /> asperiores minima. Sapiente adipisci deserunt temporibus laboriosam, fuga officia, deleniti voluptate, <br /> eum dignissimos cupiditate quam accusamus ipsam!</p>
                    </div>
                </div>

            </main>
            <div>
                <div className='video-recconecta-sobre'>
                    <iframe width="760" height="415" src="https://www.youtube.com/embed/Tj4bS0IUQNM?si=41zsYhRJtb4CAX-T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            
                    <div className='p-do-video-sobre'>
                        <p>Video informativo sobre o projeto</p>
                    </div>
            </div>


            <div>
                <div className='titulo-equipe-sobre'>
                    <h2>CONHEÇA NOSSA EQUIPE</h2>

                </div>
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

        </>
    )
        
}

export default Sobre;