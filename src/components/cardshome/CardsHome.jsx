
import Card from '../../components/Card/Cards';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from 'react';
import api from '../../utils/api';


const CardsHome = () => {
     const [eventos, setEventos] = useState([])
    
    useEffect(() => {
        api.get('/eventos').then((response) => {
          setEventos(response.data.eventos)
        })
      }, [])
    





    return (
        <>
            <div className='cards-home'>
                {eventos.length > 0 && eventos.map((evento) => (
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
                        
                ))
                }
                {eventos.length === 0 && <p>Não há Evento cadastrados</p>}

            </div>
        </>
    );
}

export default CardsHome;