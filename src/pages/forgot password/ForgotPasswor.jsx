import './ForgotPassword.css';
import Input_control from "../../components/input/input";
import Button_ from "../../components/button/button";
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <>
            <div className="container-forgot-password">
                <div className="form-image-forgot-password">
                </div>
                <div className="form-forgot-password">
                    <form action="#">
                        <div className="form-header-forgot-password">
                            <div className="title-forgot-password">
                                <h1>RECUPERAR SENHA</h1>
                                <p>Ao inserir os dados nos campos abaixo
você vai receber um código de verificação</p>
                            </div>
                        </div>
                        <div className="input-group-forgot-password">
                            <div className="input-box-forgot-password">
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
                            <div className="input-box-forgot-password">
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
                                text_button="RECUPERAR"
                                padding_="20px 55px"
                                margin_="20px 0px 0px 0px"
                                link_="/Login" />
                        </div>
                        <div className="login-cadastro">
                            <p>Retornar ao login? <Link to ='/Login' >Clique aqui!</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
}

export default ForgotPassword;



