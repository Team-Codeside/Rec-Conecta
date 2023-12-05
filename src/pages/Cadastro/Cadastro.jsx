import Input from "../../components/input/input";
import Button from "../../components/button/button";
import "../Cadastro/Cadastro.css";
import { Link } from "react-router-dom";
import { useState  , useContext, useEffect} from "react";
import { Context } from "../../context/UserContext";



const Cadastro = () =>  {
  const { register } = useContext(Context)
  const [user, setUser] = useState({})
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmassword] = useState('')
  const [cpf, setCpf] = useState('')
  const [datanasc, setDatanasc] = useState('')
  const [image, setImage] = useState()

  
  async function EnviarCadastro (){
      register ({name, email, password, confirmpassword, cpf, datanasc})
    
  }
  
      return (
  <>
    
    <div className="container-cadastro">
    
      <div className="form-image-cadastro">
        
      </div>
     
      <div className="form-cadastro">
        <form action="#">

          <div className="form-header-cadastro">
            <h1><b>Cadastre-se</b></h1>
            <span />
          </div>
          

          <div className="input-info-site-cadastro">
            <div className="informacoes">
              <b>
                <h3><b>Infomaçoes</b></h3>
              </b>
            </div>
           
            <div className="input-group">
              <div className="input-box">
                <Input
                  type_="text"
                  label_=""
                  name_="name"
                  id_=""
                  placeholder_="Nome completo"
                  width_="850px"
                  heigth_="40px"
                  backgroundcolor_="#F7F7F7"
                  color_=""
                  border_="none"
                  radius_="8px"
                  fontsizelabel_=""
                  Onchange_={(event) => {setName(event.target.value)}}
                />
              </div>
              <div className="input-box">
                <Input
                  type_="email"
                  label_=""
                  name_="email"
                  id_=""
                  placeholder_="Email"
                  width_="850px"
                  heigth_="40px"
                  backgroundcolor_="#F7F7F7"
                  color_=""
                  border_="none"
                  radius_="8px"
                  fontsizelabel_=""
                  Onchange_={(event) => {setEmail(event.target.value)}}
                />
              </div>

              <div className="wrapper-inputs-box-cadastro">
                <div className="input-box">
                  <Input
                    type_="password"
                    label_=""
                    name_="password"
                    id_=""
                    placeholder_="Digite a sua senha"
                    width_="390px"
                    heigth_="40px"
                    backgroundcolor_="#F7F7F7"
                    color_=""
                    border_="none"
                    radius_="8px"
                    fontsizelabel_=""
                    Onchange_={(event) => {setPassword(event.target.value)}}
                  />
                </div>
                <div className="input-box">
                  <Input
                    type_="password"
                    label_=""
                    name_="confirmpassword"
                    id_=""
                    placeholder_="Confirme sua senha"
                    width_="430px"
                    heigth_="40px"
                    backgroundcolor_="#F7F7F7"
                    color_=""
                    border_="none"
                    radius_="8px"
                    fontsizelabel_=""
                    Onchange_={(event) => {setConfirmassword(event.target.value)}}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="input-dados-pessoais-cadastro">
            <div className="informacoes">

              <h3><b>Dados pessoais</b></h3>

            </div>
            <div className="input-group-cadastro">
              <div className="input-box">
                <Input
                  type_="text"
                  label_=""
                  name_="cpf"
                  id_=""
                  placeholder_="CPF"
                  width_="390px"
                  heigth_="40px"
                  backgroundcolor_="#F7F7F7"
                  color_=""
                  border_="none"
                  radius_="8px"
                  fontsizelabel_=""
                  Onchange_={(event) => {setCpf(event.target.value)}}
                />
              </div>
              <div className="input-box">
                <Input
                  type_="text"
                  label_=""
                  name_="datanasc"
                  id_=""
                  placeholder_="Data de nascimento"
                  width_="430px"
                  heigth_="40px"
                  backgroundcolor_="#F7F7F7"
                  color_="#000"
                  border_="none"
                  radius_="8px"
                  fontsizelabel_=""
                  Onchange_={(event) => {setDatanasc(event.target.value)}}
                />
              </div>
              <div />
            </div>

          </div>


          <div className="continue-button-cadastro">
            <Button
              id_=""
              className=""
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

              type_="submit"
              value_="cadastrar"
              Onclick_={EnviarCadastro}
            />
          </div>
        </form>
        <p>
          Já tem conta ? <Link to ='/Login' >Clique aqui</Link>
        </p>
      </div>
    </div>
  </>
);
      }
export default Cadastro;