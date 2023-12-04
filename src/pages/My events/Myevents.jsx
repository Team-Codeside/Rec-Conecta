import './Myevents.css'
import api from '../../utils/api'
import CardDashboard from '../../components/cards my events/CardDashboard';
import { useState, useEffect } from 'react';
import useFlashMessage from '../../hooks/useFlashMessage';

const MyEvents = () => {
    const [eventos, setEventos] = useState ([])
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


    
    
    return ( 
        <>
        <h1>Meus Eventos</h1>
        <div>
           {eventos.length > 0 && <p>Meus Eventos cadastrados</p> }
           {eventos.length === 0 && <p>Não há Evento cadastrados</p> }

        </div>

        </>
     );
}
 
export default MyEvents;