import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import { Context } from 'react';
import './navbar.css'


function Navbar_() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#FF5212'}}>
      <Container>
        <Navbar.Brand href="#home"><img src="./RECCONECTA-nav.svg" alt="Rec-conecta" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto' style={{alignItems: 'center'}}>
            <Nav.Link href="#abaout us" style={{color:'#fff'}}>Sobre nós</Nav.Link>
            <Nav.Link href="/Login" style={{color:'#fff'}}>Entrar</Nav.Link>
            <Nav.Link href="#events" style={{color:'#fff'}}>Criar Eventos</Nav.Link>
            <NavDropdown title={<img src="./user_icon.svg" alt="perfil" style={{width:'60%'}}/>} id="collapsible-nav-dropdown" style={{padding:'0px!important'}}> 
                <div>
                    <NavDropdown.Item href="#action/3.1" className='m-0'>Meu Perfil</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className='m-0'>Criar Eventos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className='m-0' >Meus Eventos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className='m-0' >Inscrições</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className='m-0' style={{color: '#FF5212', fontWeight:'700'}}>Sair</NavDropdown.Item>
                </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar_;