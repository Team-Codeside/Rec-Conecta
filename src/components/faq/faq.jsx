import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import "./faq.css";



const Faq = () => {
    return ( 

        
        <>
            <div id="tudo-pro-css">

                <div id="Faq-inicio">
                    <h1 id="faq-nome">FAQ</h1>
                        <h2 id="faq-texto">Saiba mais sobre as dúvidas frequentes, explore nossa seção de respostas para esclarecer suas dúvidas.</h2>

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

      <Accordion.Item eventKey="4"style={{backgroundColor: "#eeeeee"}}>
        <Accordion.Header>Como faço para criar uma conta no site?</Accordion.Header>
        <Accordion.Body>
        Para criar uma conta, clique no botão "Cadastro" na página inicial. Preencha as informações solicitadas, como nome, e-mail, e crie uma senha segura. Após o cadastro, você terá acesso total à nossa comunidade de eventos esportivos.
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="5"style={{backgroundColor: "#eeeeee"}}>
        <Accordion.Header>Esqueci minha senha, como posso recuperá-la?</Accordion.Header>
        <Accordion.Body>
        Se esqueceu sua senha, vá para a página de login e clique em "Esqueci a senha". Insira o e-mail associado à sua conta e siga as instruções enviadas por e-mail para redefinir sua senha.
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