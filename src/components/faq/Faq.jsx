import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import "./faq.css";



const Faq = () => {
    return ( 

        
        <>
            <div id="tudo-pro-css">

                <div id="Faq-inicio">

        <div id="faq-perguntas">    
         <Accordion defaultActiveKey="0" flush >
      <Accordion.Item eventKey="0" style={{backgroundColor: "#eeeeee",
        }}  >
        <Accordion.Header id="header-faq"> Como posso encontrar eventos específicos no site?</Accordion.Header>
        <Accordion.Body>
        Para encontrar eventos específicos em nosso site, utilize a seção "Todos os Eventos". Lá, você pode realizar uma pesquisa por palavras-chave, como ciclismo, caminhada, basquete, entre outros. Além disso, é possível filtrar os eventos por localidade.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" style={{backgroundColor: "#eeeeee"}}>
        <Accordion.Header>Como faço para criar um evento na comunidade?</Accordion.Header>
        <Accordion.Body>
        Criar um evento em nossa comunidade é simples! Após fazer login, vá para a seção de eventos e clique em "Criar Evento". Preencha as informações necessárias, como tipo de atividade, local, data e hora de encontro. Não se esqueça de adicionar uma descrição atraente para atrair participantes. 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2"  style={{backgroundColor: "#eeeeee"}}>
        <Accordion.Header>Como funcionam os eventos em destaque?</Accordion.Header>
        <Accordion.Body>
        Criar um evento em nossa comunidade é simples! Após fazer login, vá para a seção de eventos e clique em "Criar Evento". Preencha as informações necessárias, como tipo de atividade, local, data e hora de encontro. Não se esqueça de adicionar uma descrição atraente para atrair participantes. 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" style={{backgroundColor: "#eeeeee"}}>
        <Accordion.Header>Como faço para criar um evento na comunidade?</Accordion.Header>
        <Accordion.Body>
        Os eventos em destaque são aqueles que estão recebendo mais atenção e interação da comunidade. Eles são destacados na página inicial do site para que todos possam vê-los facilmente. A popularidade é determinada pelo número de inscrições, comentários e interações. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

            </div>
        </div>
    </div>    

        </>
     );
}
 
export default Faq;