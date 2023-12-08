import "./login.css"
import { useState, useContext } from "react";
import Input_control from "../../components/input/input";
import Button_ from "../../components/button/button";
import { Link } from "react-router-dom";
import { Context } from "../../context/UserContext";


const Login = () => {
    const {login} = useContext(Context)
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
    
    async function EnviarLogin (){
        login ({email, password})
      
    }
  
    return (
        <>
            <div className="container-login">
                <div className="form-image-login">
                </div>
                <div className="form-login">
                    <form action="#">
                        <div className="form-header-login">
                            <div className="title-login">
                                <h1>LOGIN</h1>
                            </div>
                        </div>
                        <div className="input-group-login">
                            <div className="input-box-login">
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
                                    Onchange_={(event) => {setEmail(event.target.value)}} />
                            </div>
                            <div className="input-box-login">
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
                        <div id="forgot-pass"><Link to ='/forgot-password' >Esqueceu a senha?</Link></div>
                        <div className="login-button">
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

                                type_="submit"
                                value_="Login"
                                Onclick_={EnviarLogin}
                                />
                        </div>
                        <div className="login-cadastro">
                            <p>Ainda não tem uma conta? <Link to ='/Cadastro' >Cadastre-se</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;