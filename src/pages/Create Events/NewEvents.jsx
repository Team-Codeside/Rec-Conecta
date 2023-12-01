import './NewEvents.css';
import Input_control from '../../components/input/input';
import Form from 'react-bootstrap/Form';
import Button_ from '../../components/button/button';
import { useState } from 'react';

const NewEvents = () => {

    const [photo] = useState('./image.png')

    return (
        <>

            <div className="NewEvents-conteiner">
                <h1>Crie Seus Eventos</h1>
                <div className="events-photo">
                    <input type="file" name='photo' id='photo' />
                    <label htmlFor="photo" id="photo-label">

                        <div className="input-photo" style={{ backgroundImage: `url('${photo}')` }}>

                        </div>
                        <div className='events-input-texts'>
                            <p>
                                Insira o banner de perfil do seu evento
                                Confira se ela está em boa qualidade.
                                Os arquivos suportados são: .png, .jpg
                                Tamanho da imagem: 1440x471 (px)
                            </p>
                        </div>

                    </label>
                </div>
                <div className="NewEvents-inputs">
                    <Input_control
                        type_="text"
                        label_=""
                        name_=""
                        id_=""
                        placeholder_="Nome do Evento"
                        width_="100%"
                        heigth_="6vh"
                        backgroundcolor_=""
                        color_=""
                        border_=""
                        radius_="8px"
                        fontsizelabel_=""
                        margin_=""
                        padding_=""
                        handleOnchange_=""
                        value_=""
                        multiple="" required />
                    <div className="input-middle">
                        <div className="input-middle-header">

                            <Input_control
                                type_="text"
                                label_=""
                                name_=""
                                id_=""
                                placeholder_="Categoria"
                                width_="100%"
                                heigth_="6vh"
                                backgroundcolor_=""
                                color_=""
                                border_=""
                                radius_="8px"
                                fontsizelabel_=""
                                margin_=""
                                padding_=""
                                handleOnchange_=""
                                value_=""
                                multiple="" required />

                            <Input_control
                                type_="text"
                                label_=""
                                name_=""
                                id_=""
                                placeholder_="Hora do Evento"
                                width_="100%"
                                heigth_="6vh"
                                backgroundcolor_=""
                                color_=""
                                border_=""
                                radius_="8px"
                                fontsizelabel_=""
                                margin_=""
                                padding_=""
                                handleOnchange_=""
                                value_=""
                                multiple="" required />

                        </div>
                        <div className="input-middle-footer">

                            <Input_control
                                type_="text"
                                label_=""
                                name_=""
                                id_=""
                                placeholder_="Localização"
                                width_="100%"
                                heigth_="6vh"
                                backgroundcolor_=""
                                color_=""
                                border_=""
                                radius_="8px"
                                fontsizelabel_=""
                                margin_=""
                                padding_=""
                                handleOnchange_=""
                                value_=""
                                multiple="" required />

                            <Input_control
                                type_="date"
                                label_=""
                                name_=""
                                id_=""
                                placeholder_="DD/MM/AAAA"
                                width_="100%"
                                heigth_="6vh"
                                backgroundcolor_=""
                                color_=""
                                border_=""
                                radius_="8px"
                                fontsizelabel_=""
                                margin_=""
                                padding_=""
                                handleOnchange_=""
                                value_=""
                                multiple="" required />

                        </div>
                    </div>
                    <div className="text-area">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px', backgroundColor: '#E9ECEF', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.33)', resize: 'none', width: '100%',marginTop:'2.3%' }}
                        />
                    </div>
                    <Button_
                        width_="10%"
                        heigth_="5vh"
                        backgroundcolor_="#FF5212"
                        color_="#fff"
                        border_="1px solid #FF5212"
                        radius_="6px"
                        weigth_="600"
                        font_=""
                        text_button="CRIAR"
                        padding_="1% 5.5%"
                        margin_="2% 0 0 0"
                        link_="#"
                        type_="submit"
                        value_="" />

                </div>
            </div>
        </>
    );
}

export default NewEvents
