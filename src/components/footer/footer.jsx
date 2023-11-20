import React from "react";
import './Footer.css';

const Footer = () => {
    return (
      <>
       <footer class="container-fluid bg-dark-color" id="footer">
      <div class="container">
        <div class="row">
          <div class="col-12" id="footer-top">
            <div class="row justify-content-between">
              <div class="col-4">
                <h2>
                Rec-conecta
                </h2>
              </div>
              <div class="col-4" id="social-icons">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-youtube"></i>
              </div>
            </div>
          </div>
          <div class="col-12" id="footer-details">
            <div class="row">
              <div class="col-12 col-md-4" id="news-container">
                <h4>Fique por dentro das novidades</h4>
                <p class="text-white">
                  Inscreva-se para receber aletas de eventos
                </p>
                <form>
                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Digite o seu e-mail"
                    />
                  </div>
                  <button class="btn btn-dark">Inscrever</button>
                </form>
              </div>
              <div class="col-12 col-md-4" id="contact-container">
                <h4>Contato</h4>
                <p class="text-white">teamcodeside@gmail.com</p>
              </div>
              <div class="col-12 col-md-4" id="links-container">
                <div class="row">
                  <h4>Você pode estar buscando por:</h4>
                  <div class="col-6">
                    <ul class="list-unstyled">
                      <li><a href="#" >Eventos</a></li>
                      <li><a href="#" >Perfil</a></li>
                      <li><a href="#" >FAQ</a></li>
                    </ul>
                  </div>
                  <div class="col-6">
                    <ul class="list-unstyled">
                      <li>
                        <a href="#" >Trabalhe conosco</a>
                      </li>
                      <li><a href="#" >Contato</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12" id="footer-bottom">
            <div class="row justify-content-between">
              <div class="col-12 col-md-3">
                <p class="secondary-color"> Team Codeside &copy; 2023</p>
              </div>
              <div class="col-12 col-md-3">
                <p class="secondary-color">
                  Promovendo saúde 
                  <i class="bi bi-lightning-charge"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
      </>
    )
  }
  
  export default Footer;