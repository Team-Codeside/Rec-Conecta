import './Registrations.css';
import Card from '../../components/Card/Cards';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from 'react'
import api from '../../utils/api';


const Registrations = () => {

    const [eventos, setEventos] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')
  
    useEffect(() => {
      api
        .get('/eventos/myparticipantes', {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
          setEventos(response.data.eventos)
        })
    }, [token])

    useEffect(() => {
        console.log(eventos)
    },[eventos])
    return (
        <>
            <h1>Inscrições</h1>
            {/* <div className="search-registrations">
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
            </div> */}
            <div className='card-display'>
                    {eventos.length > 0 && eventos.map((evento) =>  (
                        <div  className="cards-registrations">
                        <Card
                             key={evento.id}
                             width_card="300px"
                             height_card="350px"
                             width_image="100%"
                             height_image="20vh"
                             imagem={`http://localhost:5000/images/eventos/${evento.images[0]}`}
                             size_title="25px"
                             color_title="#221F8A"
                             titulo={evento.name}
                             size_texto="16px"
                             texto={evento.description}
                             data_size="12px"
                             data={evento.dataev}
                             link={`/Evento/${evento._id}`} 
                             />
                        
                        
                    </div>
                   ))}
                    {eventos.length === 0 &&<p>Não há Inscrições</p>}

                </div>
           
        </>
    );
}

export default Registrations;