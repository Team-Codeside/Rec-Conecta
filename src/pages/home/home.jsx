import Navbar from "../../components/navbar/navbar";
import "./home.css"
import Footer from "../../components/footer/footer";
import Input_control from "../../components/input/input";
import Button_ from "../../components/button/button";
import Faq from "../../components/faq/faq";

const Home = () => {
    return (
        <>
            <Faq/>
            
            <div>
                <div id="texto-foto" className="container d-flex align-items-center justify-content-between">
                    <div className="w-50">
                        <h1>Reconectando <br /> você com : </h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus minus temporibus eos.</p>
                        <a href="" className="btn btn-info text-light" id="btn-pincipal">Inscreva-se agora</a>
                    </div>
                    <div id="imagem-home" className="w-50 img-fluid" >
                    </div>
                </div>
                <div class="conteainer"></div>
                <div class="container" id="featured-container">
                    <div class="col-12">
                        <h2 class="title primary-color">Enventos em Destaque</h2>
                        <p class="subtitle secondary-color">
                            Conheça nossos eventos mais procurados!
                        </p>
                    </div>
                    <div class="col-12" id="featured-images">
                        <div class="row g-4">
                            <div class="col-12 col-md-4">
                                <img src="./Recife.jpg" alt="Projeto 1" class="img-fluid" />
                                <div class="banner-content">
                                    <p class="secondary-color">Categoria</p>
                                    <h3>Nome </h3>
                                    <p>R$ 0</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <img src="./Recife.jpg" alt="Projeto 2" class="img-fluid" />
                                <div class="banner-content">
                                    <p class="secondary-color">Categoria</p>
                                    <h3>Nome </h3>
                                    <p>R$ 0</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <img src="./Recife.jpg" alt="Projeto 3" class="img-fluid" />
                                <div class="banner-content">
                                    <p class="secondary-color">Categoria</p>
                                    <h3>Nome</h3>
                                    <p>R$ 0</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <img src="./Recife.jpg" alt="Projeto 4" class="img-fluid" />
                                <div class="banner-content">
                                    <p class="secondary-color">Categoria</p>
                                    <h3>Nome</h3>
                                    <p>R$ 0</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <img src="./Recife.jpg" alt="Projeto 5" class="img-fluid" />
                                <div class="banner-content">
                                    <p class="secondary-color">Categoria</p>
                                    <h3>Nome</h3>
                                    <p>R$ 0</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <img src="./Recife.jpg" alt="Projeto 6" class="img-fluid" />
                                <div class="banner-content">
                                    <p class="secondary-color">Categoria</p>
                                    <h3>Nome</h3>
                                    <p>R$ 0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container" id="info-container">

                    <div class="col-12">
                        <div class="row">
                            <div class="col-12 col-md-5" id="info-banner">
                                <img src="./Recife.jpg" alt="Informações" class="img-fluid" />
                            </div>
                            <div class="col-12 col-md-7 bg-secondary-color" id="info-content">
                                <div class="row">
                                    <div class="col-12">
                                        <h2 class="title">Estes dados fazem a diferença:</h2>
                                        <p class="subtitle secondary-color">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Praesentium tempore fugit et iusto quisquam beatae impedit
                                            nobis quas doloribus, atque, ut id similique eligendi, ab
                                            soluta magnam maxime cum debitis.
                                        </p>
                                    </div>
                                    <div class="col-12" id="info-numbers">
                                        <div class="row">
                                            <div class="col-4">
                                                <h3 class="primary-color">18</h3>
                                                <p class="secondary-color">Esportes</p>
                                            </div>
                                            <div class="col-4">
                                                <h3 class="primary-color">95</h3>
                                                <p class="secondary-color">Eventos</p>
                                            </div>
                                            <div class="col-4">
                                                <h3 class="primary-color">639</h3>
                                                <p class="secondary-color">Clientes</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <a href="" class="btn btn-dark">Saber Mais</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;