import "./login.css"
import Input_control from "../../components/input/input";
import Button_ from "../../components/button/button";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <>
            <div class="container-login">
                <div class="form-image-login">
                </div>
                <div class="form-login">
                    <form action="#">
                        <div class="form-header-login">
                            <div class="title-login">
                                <h1>LOGIN</h1>
                            </div>
                        </div>
                        <div class="input-group-login">
                            <div class="input-box-login">
                                <Input_control
                                    type_="email"
                                    label_=""
                                    name_=""
                                    id_=""
                                    placeholder_="Email"
                                    width_="100%"
                                    heigth_="6vh"
                                    backgroundcolor_="#E7E7E7"
                                    color_=""
                                    border_="none"
                                    radius_="8px"
                                    fontsizelabel_="" />
                            </div>
                            <div class="input-box-login">
                                <Input_control
                                    type_="password"
                                    label_=""
                                    name_=""
                                    id_=""
                                    placeholder_="Senha"
                                    width_="100%"
                                    heigth_="6vh"
                                    backgroundcolor_="#E7E7E7"
                                    color_=""
                                    border_="none"
                                    radius_="8px"
                                    fontsizelabel_="" />
                            </div>
                        </div>
                        <div id="forgot-pass"><Link to ='/forgot-password' >Esqueceu a senha?</Link></div>
                        <div class="login-button">
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
                                link_="/" />
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