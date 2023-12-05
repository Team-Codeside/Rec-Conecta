import './CardDashboard.css';
import Card from '../Card/Cards'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const CardDashboard = ({ width_card, height_card, width_image, height_image, imagem, size_title, color_title, titulo, size_texto, texto, data_size, data, link,Onclick_ }) => {
    return (
        <>
            <div className="conteiner-cardr">
                <Card
                    width_card={width_card}
                    height_card={height_card}
                    width_image={width_image}
                    height_image={height_image}
                    imagem={imagem}
                    size_title={size_title}
                    color_title={color_title}
                    titulo={titulo}
                    size_texto={size_texto}
                    texto={texto}
                    data_size={data_size}
                    data={data}
                    link={link} />
                <div className="cardr-buttons">
                    <ButtonGroup style={{margin: '5%'}}>
    
                        <Button variant="primary">Editar</Button>
                        <Button 
                        variant="danger"
                        onClick={Onclick_}
                        >Excluir</Button>
                    </ButtonGroup>
                </div>
            </div>
        </>
    );
}

export default CardDashboard;
