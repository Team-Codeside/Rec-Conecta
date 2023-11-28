import React from "react";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import "../Cadastro/Cadastro.css";

const Cadastro = () => (
  <>
    <div class="container">
     
        <div className="form-image">
          <img src="./bikes-cad.svg" alt="" /></div>

      <div class="form">
        <form action="#">
          <div class="form-header">
          <h1><b>Cadastre-se</b></h1>
          </div>



          <div className="input-info-site">
                <div className="informacoes">
                    <b>
                      <h3><b>Infomaçoes</b></h3>
                    </b>
                </div>
              <div class="input-group">
                <div class="input-box">
                  <Input
                    type_="text"
                    label_=""
                    name_=""
                    id_=""
                    placeholder_="Nome completo"
                    width_="850px"
                    heigth_="40px"
                    backgroundcolor_="#F7F7F7"
                    color_=""
                    border_="none"
                    radius_="8px"
                    fontsizelabel_=""
                  />
                </div>
                <div class="input-box">
                <Input
                    type_="email"
                    label_=""
                    name_=""
                    id_=""
                    placeholder_="Email"
                    width_="850px"
                    heigth_="40px"
                    backgroundcolor_="#F7F7F7"
                    color_=""
                    border_="none"
                    radius_="8px"
                    fontsizelabel_=""
                  />
                </div>
                
                <div class="input-box">
                <Input
                    type_="password"
                    label_=""
                    name_=""
                    id_=""
                    placeholder_="Senha"
                    width_="390px"
                    heigth_="40px"
                    backgroundcolor_="#F7F7F7"
                    color_=""
                    border_="none"
                    radius_="8px"
                    fontsizelabel_=""
                    
                  />
                </div>
                <div class="input-box">
                <Input
                    type_="password"
                    label_=""
                    name_=""
                    id_=""
                    placeholder_="Confirme sua senha"
                    width_="430px"
                    heigth_="40px"
                    backgroundcolor_="#F7F7F7"
                    color_=""
                    border_="none"
                    radius_="8px"
                    fontsizelabel_=""
                  />
                </div>
              </div>
          </div>

          <div className="input-dados-pessoais">
            <div className="informacoes">
              
                <h3><b>Dados pessoais</b></h3>
              
            </div>
            <div class="input-group">
                <div class="input-box">
                <Input
                    type_="text"
                    label_=""
                    name_=""
                    id_=""
                    placeholder_="CPF"
                    width_="390px"
                    heigth_="40px"
                    backgroundcolor_="#F7F7F7"
                    color_=""
                    border_="none"
                    radius_="8px"
                    fontsizelabel_=""
                  />
                </div>
                <div class="input-box">
                <Input
                    type_="date"
                    label_=""
                    name_=""
                    id_=""
                    placeholder_="Data de nascimento"
                    width_="430px"
                    heigth_="40px"
                    backgroundcolor_="#F7F7F7"
                    color_="#000"
                    border_="none"
                    radius_="8px"
                    fontsizelabel_=""
                    margin_= "0px 0px 0px 25px"
                  />
                </div>
                <div />
            </div>

          </div>
              
           
          <div class="continue-button">
                <Button
                id_=""
                className =""
                width_="300px"
                heigth_=""
                backgroundcolor_="#FF5212"
                color_="#fff"
                border_="none"
                radius_="8px"
                weigth_="600"
                font_="Roboto"
                text_button="Confirmar"
                padding_=""
                margin_="30px auto"
                link_="#"
                type_="submit"
                value_="Submit"
                />
          </div>
        </form>
      </div>
    </div>
  </>
);

export default Cadastro;
