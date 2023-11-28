import "./login.css"
import Input_control from "../../components/input/input";
import Button_ from "../../components/button/button";

const Login = () => {
    return (
        <>
    <div class="container-login">
        <div class="form-image">
            <img src="./Login.svg" alt="" />
        </div>
        <div class="form">
            <form action="#">
                <div class="form-header">
                    <div class="title-login">
                        <h1>LOGIN</h1>
                    </div>
                </div>

                <div class="input-group">
                    <div class="input-box">
                        <Input_control
                        type_="email"
                        label_=""
                        name_=""
                        id_=""
                        placeholder_="Email"
                        width_="400px"
                        heigth_="40px"
                        backgroundcolor_="#E7E7E7"
                        color_=""
                        border_="none"
                        radius_="8px"
                        fontsizelabel_=""/>
                    </div>

                    <div class="input-box">
                        <Input_control
                        type_="password"
                        label_=""
                        name_=""
                        id_=""
                        placeholder_="Senha"
                        width_="400px"
                        heigth_="40px"
                        backgroundcolor_="#E7E7E7"
                        color_=""
                        border_="none"
                        radius_="8px"
                        fontsizelabel_=""/>
                    </div>
                </div>
                    <div id="forgot-pass"><a href="#">Esqueceu a senha?</a></div>
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
                        link_="#"/>
                    </div>
            <div className="login-cadastro">
                <p>Ainda não tem uma conta?<a href="#">Cadastre-se</a></p>
            </div>
            </form>
        </div>
    </div>
        </>
    );
}

export default Login;