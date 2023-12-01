import './Evento.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button_ from '../../components/button/button';


const Eventos = () => {
    return (
        <>
            <div className="container-eventos">
                <div className="header-eventos">

                    <img src="./corrida-cilismo.jpg" alt="" />
                    {/* <Carousel
                        
                        /> */}

                </div>

                <div className="info-eventos">
                    <div className='titulo-info-eventos'>
                        <h1>Informações do evento</h1>

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
                            link_=""
                            type_="file"
                            value_="sdfkskfm"
                        />
                    </div>
                    <div className="detalhes-info-eventos">
                        <div className='container-detalhes-eventos'>
                            <div className='box-input-eventos'>
                                <label htmlFor=""><b>Nome do Evento</b></label>
                                <input
                                    className="form-control-perfil"
                                    id="disabledInput"
                                    type="text"
                                    placeholder= "Boa viagem runners 2° edição"
                                    disabled
                                ></input>
                            </div>
                            <div className='box-input-eventos'>
                                <label htmlFor=""><em>Categoria</em></label>
                                <input
                                    className="form-control-perfil"
                                    id="disabledInput"
                                    type="text"
                                    placeholder="Ciclismo"
                                    disabled
                                ></input>
                            </div>
                            <div className='box-input-eventos'>
                                <label htmlFor="">Localização</label>
                                <input
                                    className="form-control-perfil"
                                    id="disabledInput"
                                    type="text"
                                    placeholder="R. Maria Carolina, Boa viagem, Recife-PE"
                                    disabled
                                ></input>
                            </div>
                            <div className='box-input-eventos'>
                                <label htmlFor="">Inicio do evento</label>
                                <input
                                    className="form-control-perfil"
                                    id="disabledInput"
                                    type="text"
                                    placeholder="12/05/2023"
                                    disabled
                                ></input>
                            </div>


                        </div>
                    </div>

                    <div className='detalhes-info-eventos'>
                        <div className="container-detalhes-eventos">
                            <div className='box-input-eventos'>
                                <label htmlFor="">Sobre o Evento</label>
                                <p>hLorem ipsum justo primis urna posuere quis varius curabitur mollis eleifend nunc, rutrum nisi phellentesque torquent duis bibendu<i>mfacilisis mauris molestie. etiam non sed ad sed urna adfames amet volutpat convallis dui, tincidunt metus a netus rutrum ametdiamfaucibus quis class lectus, vehicula felis tristique pellentesque fringilla felis donec praesent fermentumproin.</i> egestas hvestibulum per elit habitasse praesent metus et euismod aptent, risus dapibus himenaeos augue arcu eget gravida non accumsan urna, netus ultricies volutpat sem non nisl nulla fusce. nisl eu nullam aliquet laoreet id lobortis imperdiet etiam, leo odio curaepellentesque donec aliquet etiammollis convallis, maecenas vitae sit litora sociosqu posuere rutrum.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='container-organizador-eventos'>
                     
                    <div className="organizador-eventos">

                        <div className="img-organizador">
                            <h1>ORGANIZADOR&#40;a&#41;</h1>
                            <img src="./Rec.png" alt="" />
                        </div>
                        <div className="organizador-info">
                            <div className='box-info-organizador'>
                                <label htmlFor="">Nome do Organizador&#40;a&#41;:</label>
                                <input
                                    className="form-control-perfil"
                                    id="disabledInput"
                                    type="text"
                                    placeholder="Andreia Camila"
                                    disabled
                                ></input>
                            </div>
                            <div className='box-info-organizador'>
                                <label htmlFor="">Contatos:</label>
                                <p>
                                andreia_camila_santos@hoatmail.com <br />   
                                (96) 99719-2403
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
}

export default Eventos;