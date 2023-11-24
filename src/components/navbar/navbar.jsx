import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <nav id= "navegacao-principal" >
            <div  className=" container py-2 d-flex align-items-center justify-content-between">
                <div id="logo">
                    <img src="./log1.png" alt="" width={150} />
                </div>
                <div id="navegacao-box">
                    <ul id="navegacao" className="d-flex align-items-center text-light">
                        <li><a href="">Home</a></li>
                        <li><a href="">Eventos</a></li>
                        <li><a href="">FAQs</a></li>
                        <li><a href="" className="btn btn-primary" id="entar-navbar">Entrar</a></li>
                        <li><a href="" className="btn btn-info">Cadastrar</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
      );

}
 

export default Navbar;