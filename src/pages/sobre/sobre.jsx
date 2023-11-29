import './sobre.css'

const Sobre = () => {
    return (
        <>
            
            <header>
            <div className='sobre-texto1'>
                <h2>O QUE É O REC-CONECTA?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum ducimus ab consequatur <br /> asperiores minima. Sapiente adipisci deserunt temporibus laboriosam, fuga officia, deleniti voluptate, <br /> eum dignissimos cupiditate quam accusamus ipsam!</p>

                <div>
                <div className='img-recconecta'>
                    <img src="logo_RECCONECTA.svg" alt="" />
                   </div>
                </div>
                </div>
            </header>

        <main>
            
        <div>
            <div className='sobre-texto2'>
                <h2>COMO FUNCIONA?</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum ducimus ab consequatur <br /> asperiores minima. Sapiente adipisci deserunt temporibus laboriosam, fuga officia, deleniti voluptate, <br /> eum dignissimos cupiditate quam accusamus ipsam!</p>

                   <div className='img-como-funciona'>
                    <img src="como-funciona.svg" alt="" />
                   </div>
            </div>
        </div>

        <div>
            <div className='sobre-texto3'>
                <h2>Melhora de saúde mental para você</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum ducimus ab consequatur <br /> asperiores minima. Sapiente adipisci deserunt temporibus laboriosam, fuga officia, deleniti voluptate, <br /> eum dignissimos cupiditate quam accusamus ipsam!</p>
            </div>
        </div>
        </main>

        <div>
            <div className='titulo-sobre'>
                <h2>CONHEÇA NOSSA EQUIPE</h2>
                
            </div>
        </div>
        <div className='all'>
        <div className='container'>
            <div className='galeria'>
                <div className="img-box"><h3>Aline</h3></div>
                <div className="img-box"><h3>Aline</h3></div>
                <div className="img-box"><h3>Aline</h3></div>
                <div className="img-box"><h3>Aline</h3></div>
                <div className="img-box"><h3>Aline</h3></div>

            </div>
        </div>

        </div>

        </>
    )

 }

 export default Sobre;