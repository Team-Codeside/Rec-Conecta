import "./login.css"
import Input_control from "../../components/input/input";
import Button_ from "../../components/button/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {


const [user, setUser] = useState({})

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()


function EnviarLogin (){

    console.log(email,password)

navigate('/')
   
  
}



    return (
       
            <div className ="container-login">
                <div className ="form-image-login">
                </div>
                <div className ="form-login">
                    <form action="#">
                        <div className ="form-header-login">
                            <div className ="title-login">
                                <h1>LOGIN</h1>
                            </div>
                        </div>
                        <div className ="input-group-login">
                            <div className ="input-box-login">
                                <Input_control
                                    type_="email"
                                    label_=""
                                    name_="email"
                                    id_=""
                                    placeholder_="Email"
                                    width_="100%"
                                    heigth_="6vh"
                                    backgroundcolor_="#E7E7E7"
                                    color_=""
                                    border_="none"
                                    radius_="8px"
                                    fontsizelabel_=""
                                    Onchange_={(event) => {setEmail(event.target.value)}}
                                    />

                            </div>
                            <div className ="input-box-login">
                                <Input_control
                                    type_="password"
                                    label_=""
                                    name_="password"
                                    id_=""
                                    placeholder_="Senha"
                                    width_="100%"
                                    heigth_="6vh"
                                    backgroundcolor_="#E7E7E7"
                                    color_=""
                                    border_="none"
                                    radius_="8px"
                                    fontsizelabel_="" 
                                    Onchange_={(event) => {setPassword(event.target.value)}}
                                    />
                                    
                            </div>
                        </div>
                        <div id="forgot-pass"><a href="#forgot-password">Esqueceu a senha?</a></div>
                        <div className ="login-button">
                            <Button_
                                width_="30px"
                                heigth_="10px"
                                backgroundcolor_="#FF5212"
                                color_="#fff"
                                border_="0px"
                                radius_="6px"
                                weigth_="700"
                                font_="Roboto"
                                text_button="Entrar"
                                padding_="20px 40px"
                                margin_="20px 0px 0px 0px"
                                Onclick_={EnviarLogin}

                                 />
                        </div>
                       <div className="login-cadastro">
                            <p>Ainda não tem uma conta?<Link to ='/Cadastro' >Cadastre-se</Link> </p>
                        </div> 
                    </form>
                </div>
            </div>
       
    );
}

export default Login;