import './Myevents.css'
import api from '../../utils/api'
import CardDashboard from '../../components/cards my events/CardDashboard';
import { useState, useEffect } from 'react';
import useFlashMessage from '../../hooks/useFlashMessage';


const MyEvents = () => {
    const [eventos, setEventos] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')
    const { setFlashMessage } = useFlashMessage()

    useEffect(() => {
        //retornando eventos do usuário
        api
            .get('/eventos/myeventos', {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                },
            })
            .then((response) => {
                setEventos(response.data.eventos)
            })
    }, [token])

    async function removeEvento(id){
        let msgType = 'success'

        const data = await api.delete(`/eventos/${id}`,{
            headers: {
                Authorization:`Bearer ${JSON.parse(token)}`,
            }
        }).then((response) =>{
            const updatedEventos = eventos.filter ((evento) => evento._id != id )
            setEventos(updatedEventos)
            return response.data
        })
        .catch((err) => {
            msgType = 'error'
            return err.response.data
        })
        
        setFlashMessage(data.message, msgType) 
    }




    return (
        <>
            <h1>Meus Eventos</h1>
            <div>
                {eventos.length > 0 && eventos.map((evento) => (
                         <CardDashboard
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
                            link="/Evento"
                            Onclick_={() => {removeEvento(evento._id)}}
                            />
                        
                ))
                }
                {eventos.length === 0 && <p>Não há Evento cadastrados</p>}

            </div>

        </>
    );
}

export default MyEvents;