import './Registrations.css';
import Card from '../../components/Card/Cards';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const Registrations = () => {
    return (
        <>
            <h1>Inscrições</h1>
            <div className="search-registrations">
                <Form>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Buscar eventos"
                            style={{
                                width:'100%' ,
                                height: '100%',
                                backgroundColor: '#EDEDED',
                                borderRadius: '6px',
                                border: '1px #DEE2E6',
                                margin: '0px 10px 0px 0px',
                                boxShadow:'0px 2px 4px rgba(0, 0, 0, 0.33)',
                                padding: '0px !important'
                            }}
                        />
                    </Form.Group>
                </Form>
                <a href="#">
                    <Button
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#EDEDED',
                        color: 'Black',
                        border:"1px #DEE2E6",
                        boxShadow:'0px 2px 4px rgba(0, 0, 0, 0.33)',
                        borderRadius: '6px',
                        fontWeight: '500',
                        fontFamily: 'Roboto',
                        type: 'button',
                        display:"flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >BUSCAR</Button>
                </a>
            </div>
            <div className="cards-registrations">
                <Card
                    width_card="100%"
                    height_card="100%"
                    width_image="100%"
                    height_image="20vh"
                    imagem="/Recife-1.png"
                    size_title="25px"
                    color_title="#221F8A"
                    titulo="Passeio de bike pelos rios"
                    size_texto="16px"
                    texto="venha conosco conhecer os rios do Recife e apreciar as belezas da natureza!"
                    data_size="12px"
                    data="Recife - 2023"
                    link="" />
                <Card
                    width_card="100%"
                    height_card="100%"
                    width_image="100%"
                    height_image="20vh"
                    imagem="/Recife-1.png"
                    size_title="25px"
                    color_title="#221F8A"
                    titulo="Passeio de bike pelos rios"
                    size_texto="16px"
                    texto="venha conosco conhecer os rios do Recife e apreciar as belezas da natureza!"
                    data_size="12px"
                    data="Recife - 2023"
                    link="" />
                <Card
                    width_card="100%"
                    height_card="100%"
                    width_image="100%"
                    height_image="20vh"
                    imagem="/Recife-1.png"
                    size_title="25px"
                    color_title="#221F8A"
                    titulo="Passeio de bike pelos rios"
                    size_texto="16px"
                    texto="venha conosco conhecer os rios do Recife e apreciar as belezas da natureza!"
                    data_size="12px"
                    data="Recife - 2023"
                    link="" />
              

            </div>
        </>
    );
}

export default Registrations;